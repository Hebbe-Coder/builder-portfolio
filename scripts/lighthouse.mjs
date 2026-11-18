import fs from 'node:fs/promises';
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
const base=process.env.QA_BASE_URL||'http://127.0.0.1:3100';
const routes=['/','/projects','/projects/hotscript','/projects/bsc-studio','/projects/smart-station','/engineering','/fde','/about','/insights','/insights/agent-workflows'];
const browser=await chromeLauncher.launch({chromePath:'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',chromeFlags:['--headless','--no-first-run','--disable-extensions']});
const summary=[];
await fs.mkdir('qa/lighthouse',{recursive:true});
try {for(const route of routes){
  const result=await lighthouse(base+route,{port:browser.port,output:'json',logLevel:'error',onlyCategories:['performance','accessibility','best-practices','seo'],formFactor:'mobile',screenEmulation:{mobile:true,width:390,height:844,deviceScaleFactor:1,disabled:false}});
  if(!result)throw new Error(`No report: ${route}`);
  const {lhr}=result;
  const scores=Object.fromEntries(Object.entries(lhr.categories).map(([key,value])=>[key,Math.round(value.score*100)]));
  const item={route,scores,warnings:lhr.runWarnings,metrics:{FCP:lhr.audits['first-contentful-paint'].displayValue,LCP:lhr.audits['largest-contentful-paint'].displayValue,CLS:lhr.audits['cumulative-layout-shift'].displayValue,TBT:lhr.audits['total-blocking-time'].displayValue},failedAudits:Object.values(lhr.audits).filter(a=>a.score!==null&&a.score<.9&&a.scoreDisplayMode!=='informative').map(a=>({id:a.id,title:a.title,displayValue:a.displayValue}))};
  summary.push(item);
  await fs.writeFile(`qa/lighthouse/${route==='/'?'home':route.slice(1).replaceAll('/','-')}.json`,result.report);
  await fs.writeFile('qa/lighthouse-summary.json',JSON.stringify({date:new Date().toISOString(),base,environment:'Local production build / installed Edge / Lighthouse simulated mobile 390x844',results:summary},null,2));
  console.log(JSON.stringify(item));
}}
finally{await browser.kill();}
if(summary.some(item=>item.scores.performance<90||item.scores.accessibility<95||item.scores['best-practices']<95||item.scores.seo<95))process.exitCode=1;
