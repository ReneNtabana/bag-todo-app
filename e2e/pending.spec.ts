import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://bag-todo-app.netlify.app/pending");
  await page.getByRole("button").click();
  await page.getByRole("button").nth(1).click();
  await page.getByRole("checkbox").click();
});
