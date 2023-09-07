import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://bag-todo.netlify.app/completed");
});
