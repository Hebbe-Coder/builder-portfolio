import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import fs from "node:fs/promises";
const browser = await chromium.launch({ channel: "msedge", headless: true });
const report = { date: new Date().toISOString(), checks: [] };
await fs.mkdir("qa/v2", { recursive: true });
try {
  for (const width of [1440, 1280, 768, 390]) {
    for (const reducedMotion of ["no-preference", "reduce"]) {
      const context = await browser.newContext({
        viewport: { width, height: 1000 },
        reducedMotion,
      });
      const page = await context.newPage();
      const errors = [];
      page.on("pageerror", (e) => errors.push(e.message));
      await page.goto("http://127.0.0.1:3100", { waitUntil: "networkidle" });
      await page.evaluate(() => document.fonts.ready);
      if (
        await page.evaluate(
          () => document.documentElement.scrollWidth > innerWidth + 1,
        )
      )
        throw Error(`Overflow ${width}`);
      const hero = page.locator(".builder-system");
      await hero.getByRole("button", { name: /03.*FDE/ }).click();
      if (
        !(await page
          .locator(".system-proof")
          .innerText()
          .then((t) => t.includes("Personal project practice")))
      )
        throw Error("Career direction");
      if (width >= 768 && reducedMotion === "no-preference") {
        await page
          .getByRole("button", { name: "Pause career rotation" })
          .click();
        await page.locator(".build-loop").scrollIntoViewIfNeeded();
        const list = page.getByRole("listbox", { name: "Explore how I build" });
        await list.waitFor();
        await list.focus();
        await page.keyboard.press("ArrowDown");
        await page.waitForTimeout(300);
        if (
          !(await page
            .locator(".build-loop-detail")
            .innerText()
            .then((t) => t.includes("02")))
        )
          throw Error("List keyboard selection");
      } else {
        await page
          .getByRole("group", { name: "Explore how I build" })
          .getByRole("button", { name: /02.*Define/ })
          .click();
        if (
          !(await page
            .locator(".build-loop-detail")
            .innerText()
            .then((t) => t.includes("02")))
        )
          throw Error("Static selection");
      }
      for (const selector of [".hero-v2", ".build-loop", ".work-modes"]) {
        await page.locator(selector).scrollIntoViewIfNeeded();
        await page.waitForTimeout(250);
        const scan = await new AxeBuilder({ page })
          .include(selector)
          .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
          .analyze();
        if (scan.violations.length)
          throw Error(
            JSON.stringify({
              width,
              reducedMotion,
              selector,
              violations: scan.violations.map((v) => ({
                id: v.id,
                nodes: v.nodes.map((n) => ({
                  html: n.html,
                  summary: n.failureSummary,
                })),
              })),
            }),
          );
      }
      await page.evaluate(() => scrollTo(0, 0));
      await page.screenshot({
        path: `qa/v2/home-${width}-${reducedMotion}.png`,
        fullPage: true,
      });
      await page.goto("http://127.0.0.1:3100/fde", {
        waitUntil: "networkidle",
      });
      await page.locator(".fde-stepper").scrollIntoViewIfNeeded();
      if (width >= 768 && reducedMotion === "no-preference") {
        const stages = page.getByRole("listbox", {
          name: "Explore FDE practice stages",
        });
        await stages.waitFor();
        await stages.focus();
        await page.keyboard.press("End");
      } else {
        await page
          .getByRole("group", { name: "Explore FDE practice stages" })
          .getByRole("button", { name: /07.*Iterate/ })
          .click();
      }
      await page.waitForTimeout(300);
      if (
        !(await page
          .locator(".fde-stage-detail")
          .innerText()
          .then((t) => t.includes("Choose the next validation boundary.")))
      )
        throw Error("FDE selection");
      for (const name of [
        "Problem",
        "Approach",
        "Implementation",
        "Validation",
        "Limitation",
      ])
        if (
          !(await page
            .locator(".fde-stage-detail dt")
            .allTextContents()
            .then((t) => t.includes(name)))
        )
          throw Error("FDE missing field " + name);
      await page.getByRole("button", { name: "Switch to dark theme" }).click();
      await page.waitForTimeout(300);
      const fdeScan = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      if (fdeScan.violations.length)
        throw Error(
          JSON.stringify(
            fdeScan.violations.map((v) => ({
              id: v.id,
              nodes: v.nodes.map((n) => n.html),
            })),
          ),
        );
      if (
        await page.evaluate(
          () => document.documentElement.scrollWidth > innerWidth + 1,
        )
      )
        throw Error(`FDE overflow ${width}`);
      await page.screenshot({
        path: `qa/v2/fde-dark-${width}-${reducedMotion}.png`,
        fullPage: true,
      });
      if (errors.length) throw Error(errors.join(";"));
      report.checks.push({
        width,
        reducedMotion,
        overflow: false,
        errors,
        interactions: "passed",
        axeViolations: 0,
      });
      await context.close();
    }
  }
} finally {
  await fs.writeFile(
    "qa/v2/react-bits-report.json",
    JSON.stringify(report, null, 2),
  );
  await browser.close();
}
console.log(JSON.stringify(report, null, 2));
