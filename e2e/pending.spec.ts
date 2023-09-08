import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://bag-todo-app.netlify.app/pending");

