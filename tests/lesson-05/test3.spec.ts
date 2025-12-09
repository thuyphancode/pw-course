/* Tạo file test3.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài
học 3: Todo page”.
a. Thêm mới 100 todo item có nội dung “Todo <i>”
b. Xoá các todo có số lẻ */

import { test } from "@playwright/test";

test("Todo page - add 100 items and delete odd items", async ({ page }) => {

    await test.step("Step1: Navigate to Todo page", async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.click("//a[@href='03-xpath-todo-list.html']");
    });

    await test.step("Step2: Add 100 todo items", async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
            await page.locator("//button[@id='add-task']").click();
        }
    });

    page.on("dialog", async (dialog) => {
        await dialog.accept();   // Bấm OK
    });

    await test.step("Step3: Delete odd todo items", async () => {
        for (let i = 1; i <= 100; i += 2) {   // 1,3,5,7...
            await page.locator(`//button[@id='todo-${i}-delete']`).click();
        }
    });

});

