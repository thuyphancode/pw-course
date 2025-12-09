/* Tạo file test4.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài
học 4: Personal notes”.
a. Thêm mới 10 note với nội dung sau ở bảng dưới đây.
i. Field “Title”: điền nội dung ở cột “Tên action”
ii. Field “Content”: điền nội dung ở cột “Mô tả”
b. Thực hiện search với keyword “một hoặc nhiều” */

import { test } from "@playwright/test";

test("Personal notes - add 10 notes and search", async ({ page }) => {

  await test.step("Step1: Navigate to Personal Notes page", async () => {
    await page.goto("https://material.playwrightvn.com/");
    await page.click("//a[@href='04-xpath-personal-notes.html']");
  });

  const notes = [
    { title: "Action 1", content: "Mô tả action 1" },
    { title: "Action 2", content: "Mô tả action 2" },
    { title: "Action 3", content: "Mô tả action 3" },
    { title: "Action 4", content: "Mô tả action 4" },
    { title: "Action 5", content: "Mô tả action 5" },
    { title: "Action 6", content: "Mô tả action 6" },
    { title: "Action 7", content: "Mô tả action 7" },
    { title: "Action 8", content: "Mô tả action 8" },
    { title: "Action 9", content: "Mô tả action 9" },
    { title: "Action 10", content: "Mô tả action 10" },
  ];

  await test.step("Step2: Add 10 notes", async () => {
    for (const note of notes) {
      // Title
      await page.locator("//input[@id='note-title']").fill(note.title);

      // Content
      await page.locator("//textarea[@id='note-content']").fill(note.content);

      // Button add Note
      await page.locator("//button[@id='add-note']").click();
    }
  });

  await test.step('Step3: Search with keyword "một hoặc nhiều"', async () => {
    await page.locator("//input[@id='search']").fill("một hoặc nhiều");
  });

});
