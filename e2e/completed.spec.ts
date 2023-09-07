import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://bag-todo-app.netlify.app/completed");
  await page.locator(".flex > div > .inline-flex").first().click();
});
