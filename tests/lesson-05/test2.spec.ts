
/* 2. Tạo file test2.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài
học 2: Product page”, hãy thêm sản phẩm để giỏ hàng có số lượng sản phẩm như sau:
a. Sản phẩm 1: 2 sản phẩm
b. Sản phẩm 2: 3 sản phẩm
c. Sản phẩm 3: 1 sản phẩm */

import { test } from "@playwright/test";

test('Add products to cart', async ({ page }) => {

  await test.step('Step1: Navigate to product page', async () => {
    await page.goto('https://material.playwrightvn.com/');
    await page.click("//a[@href='02-xpath-product-page.html']");
  });

  // a. Product 1: Add 2 items
  await test.step('Step2: Add Product 1 (2 items)', async () => {
    const btn1 = page.locator("//button[@data-product-id='1']");
    await btn1.click();
    await btn1.click();
  });

  // b. Product 2: Add 3 items
  await test.step('Step3: Add Product 2 (3 items)', async () => {
    const btn2 = page.locator("//button[@data-product-id='2']");
    await btn2.click();
    await btn2.click();
    await btn2.click();
  });

  // c. Product 3: Add 1 item
  await test.step('Step4: Add Product 3 (1 item)', async () => {
    const btn3 = page.locator("//button[@data-product-id='3']");
    await btn3.click();
  });

});
