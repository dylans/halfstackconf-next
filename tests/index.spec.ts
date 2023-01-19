import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("Index", async ({ page }) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page }).analyze();

  if (!results.violations.length) {
    return;
  }

  for (const violation of results.violations) {
    console.error();
  }

  expect(
    results.violations.length,
    [
      "Accessibility violations found. Run aXe to view more details:",
      ...results.violations.map(
        (violation) =>
          `- [${violation.id}] ${violation.help} (${violation.impact})`
      ),
    ].join("\n")
  ).toBe(0);
});
