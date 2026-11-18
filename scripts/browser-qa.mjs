import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import fs from 'node:fs/promises';
const base = process.env.QA_BASE_URL || 'http://127.0.0.1:3100';
const core = ['/', '/projects', '/projects/hotscript', '/projects/bsc-studio', '/projects/smart-station'];
const routes = process.argv.includes('--core') ? core : [...core, '/engineering', '/fde', '/about', '/insights', '/insights/building-from-ambiguity', '/insights/hotscript-workflow', '/insights/prd-to-sop', '/insights/agent-workflows', '/insights/rag-beyond-vector-search', '/insights/ai-coding-workflow', '/insights/what-fde-means'];
const browser = await chromium.launch({channel:'msedge', headless:true});
await fs.mkdir('qa', {recursive:true});
const report = {date:new Date().toISOString(), base, routes:[], interactions:[], failures:[]};
const internalLinks = new Set();
const assert = (condition, text) => {if(!condition) { report.failures.push(text); throw new Error(text); }};
try {
  for (const width of [1440,1280,768,390]) {
    const context = await browser.newContext({viewport:{width,height:1000},reducedMotion:'reduce'});
    const page = await context.newPage();
    for (const route of routes) {
      const errors=[];
      const errorHandler = error=>errors.push(error.message);
      const consoleHandler = message=>{if(message.type()==='error')errors.push(message.text());};
      page.on('pageerror',errorHandler);
      page.on('console',consoleHandler);
      const response=await page.goto(base+route,{waitUntil:'domcontentloaded'});
      await page.evaluate(()=>document.fonts.ready);
      assert(response.status()===200,`${width} ${route}: HTTP ${response.status()}`);
      assert(await page.locator('h1').count()===1,`${width} ${route}: exactly one h1`);
      const sizes=await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,viewport:innerWidth}));
      assert(sizes.scroll<=sizes.viewport+1,`${width} ${route}: horizontal overflow ${sizes.scroll}`);
      const scan=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa']).analyze();
      assert(scan.violations.length===0,`${width} ${route}: axe ${JSON.stringify(scan.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>({html:n.html,summary:n.failureSummary}))})))}`);
      assert(errors.length===0,`${width} ${route}: browser errors ${errors.join(';')}`);
      const links=await page.locator('a[href]').evaluateAll(items=>items.map(a=>a.getAttribute('href')));
      assert(!links.some(link=>link==='#'||link?.includes('placeholder')||link?.includes('undefined')),`${width} ${route}: invalid link`);
      links.filter(link=>link?.startsWith('/')||link?.startsWith('#')).forEach(link=>internalLinks.add(new URL(link,base+route).href));
      report.routes.push({width,route,status:response.status(),overflow:false,axeViolations:0,browserErrors:errors.length});
      if ((width===1440||width===390) && (!route.startsWith('/insights/') || route.endsWith('agent-workflows'))) await page.screenshot({path:`qa/${route==='/'?'home':route.slice(1).replaceAll('/','-')}-${width}.png`,fullPage:true});
      page.off('pageerror',errorHandler);
      page.off('console',consoleHandler);
    }
    await page.goto(base+'/projects');
    await page.getByRole('button',{name:'Business System',exact:true}).click();
    assert(await page.locator('.project-row').count()===1,'Business System filter');
    assert(await page.locator('.project-row h3').innerText()==='智慧驿站','Business System selects station');
    await page.getByRole('combobox').nth(0).selectOption('FastAPI');
    assert(await page.getByText('No projects match these filters.').isVisible(),'Empty combination feedback');
    await page.getByRole('button',{name:'Clear all filters'}).click();
    assert(await page.locator('.project-row').count()===3,'Filter reset');
    if(width<768) {
      await page.getByRole('button',{name:'Open menu'}).click();
      assert(await page.getByRole('navigation',{name:'Mobile navigation'}).isVisible(),'Mobile menu opens');
      await page.keyboard.press('Escape');
      assert(await page.getByRole('button',{name:'Open menu'}).getAttribute('aria-expanded')==='false','Escape closes menu');
      await page.getByRole('button',{name:'Open menu'}).click();
      await page.getByRole('navigation',{name:'Mobile navigation'}).getByRole('link',{name:'Work',exact:true}).click();
      assert(await page.getByRole('button',{name:'Open menu'}).getAttribute('aria-expanded')==='false','Navigation closes menu');
    }
    await page.getByRole('button',{name:'Switch to dark theme'}).click();
    await page.reload();
    assert(await page.locator('html').getAttribute('data-theme')==='dark','Theme persists');
    if(!process.argv.includes('--core')) {
      for (const route of routes) {
        await page.goto(base+route,{waitUntil:'domcontentloaded'});
        const scan=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
        assert(scan.violations.length===0,`Dark ${width} ${route}: ${JSON.stringify(scan.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.html)})))}`);
        const sizes=await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,viewport:innerWidth}));
        assert(sizes.scroll<=sizes.viewport+1,`Dark ${width} ${route}: overflow`);
      }
      await page.goto(base+'/insights/agent-workflows');
      await page.getByRole('button',{name:'Copy code',exact:true}).click();
      await page.getByRole('button',{name:'Copied',exact:true}).waitFor();
      await page.getByRole('navigation',{name:'Article contents'}).getByRole('link').last().click();
      assert(new URL(page.url()).hash.length>1,'Article TOC updates anchor');
      assert(Number(await page.getByRole('progressbar').getAttribute('aria-valuenow'))>0,'Reading progress updates');
      await page.goBack();
      await page.getByRole('button',{name:'Switch to light theme'}).click();
      await page.goto(base+'/');
      await page.keyboard.press('Tab');
      assert(await page.getByRole('link',{name:'Skip to content'}).evaluate(el=>document.activeElement===el),'Keyboard skip link first');
      await page.getByRole('link',{name:'Skip to content'}).press('Enter');
      assert(new URL(page.url()).hash==='#main','Skip link reaches content');
      await page.getByRole('button',{name:'Switch to dark theme'}).click();
    }
    await page.goto(base+'/projects');
    const darkScan = await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
    assert(darkScan.violations.length===0,`Dark theme axe ${darkScan.violations.map(v=>v.id)}`);
    await page.screenshot({path:`qa/projects-dark-${width}.png`,fullPage:true});
    const notFound = await page.goto(base+'/not-a-real-page');
    assert(notFound.status()===404,'Custom 404 HTTP status');
    assert(await page.getByRole('link',{name:'Back home',exact:true}).isVisible(),'404 recovery link');
    await page.getByRole('link',{name:'Back home',exact:true}).click();
    await page.waitForURL(base+'/');
    assert(new URL(page.url()).pathname==='/','404 recovery navigation');
    report.interactions.push({width,category:true,combinedFilters:true,reset:true,themePersistence:true,darkAxe:true,notFound:true,mobileMenu:width<768?'passed':'not applicable'});
    await context.close();
  }
  if(!process.argv.includes('--core')) {
    const context=await browser.newContext();
    for(const link of internalLinks) {
      const url=new URL(link); const response=await context.request.get(url.origin+url.pathname);
      assert(response.status()===200,`Internal link ${link}: ${response.status()}`);
      if(url.hash) {const html=await response.text();assert(html.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`),`Missing anchor ${link}`);}
    }
    report.internalLinks=internalLinks.size;
    await context.close();
  }
} catch(error) { if(!report.failures.includes(error.message)) report.failures.push(error.message); }
finally { await browser.close(); await fs.writeFile(`qa/${process.argv.includes('--core')?'core-':'full-'}browser-report.json`,JSON.stringify(report,null,2)); }
console.log(JSON.stringify({pages:report.routes.length,interactions:report.interactions.length,failures:report.failures}));
if(report.failures.length) process.exitCode=1;

