import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://bag-todo-app.netlify.app/");
  await page.getByRole("button", { name: "Add new task" }).click();
  await page.getByPlaceholder("Enter a task").click();
  await page.getByPlaceholder("Enter a task").fill("new task");
  await page.getByPlaceholder("Enter a description").click();
  await page.getByPlaceholder("Enter a description").fill("new dsecription");
});