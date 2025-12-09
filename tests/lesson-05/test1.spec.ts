/* 1. Tạo file test1.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài
học 1: Register Page”
a. Nhập đầy đủ các thông tin, click button register */

import { test } from '@playwright/test';
import path from 'path';

test('Register with valid data', async ({ page }) => {

    await test.step('Step1: Navigate to register page', async () => {
        await page.goto('https://material.playwrightvn.com/');
        await page.locator("//a[@href='01-xpath-register-page.html']").click();

    });

    await test.step('Step2: Fill username', async () => {
        await page.locator("//input[@id='username']").fill("thuyphan");
    })

    await test.step('Step3: Fill email', async () => {
        await page.locator("//input[@id='email']").fill("kimthuygts@gmail.com");
    })

    await test.step('Step4: Check gender', async () => {
        await page.locator("//input[@id='female']").check();
    })

    await test.step('Step5: Select your hobbies', async () => {
        await page.locator("//input[@id='traveling']").check();
        await page.locator("//input[@id='reading']").check();

    })

    await test.step('Step6: Select Interests', async () => {
        await page.locator("//select[@id='interests']").selectOption([
            { label: 'Technology' },
            { label: 'Science' },
            { label: 'Art' },
        ]);
    })

    await test.step('Step7: Select country', async () => {
        await page.locator("//select[@id='country']").selectOption(
            { label: 'United States' },
        );
    })

    await test.step('Step7: Select country', async () => {
        await page.locator("//input[@id='dob']").fill("1995-07-12");
    })

    await test.step('Step9: Upload profile picture', async () => {
        const filePath = path.join(process.cwd(), 'test-data', 'uploads', 'avt.jpeg');
        await page.setInputFiles("//input[@id='profile']", filePath);
    });

    await test.step('Step10: Write biography', async () => {
        await page.locator("//textarea[@id='bio']").fill("Hello, my name is Thuy. I love learning Playwright");

    })

    await test.step('Step11: Rate Us', async () => {
        await page.locator("//input[@id='rating']").fill("10");
    });

    await test.step('Step12: Select favorite color', async () => {
        await page.locator("//input[@id='favcolor']").fill("#00ff00");
    });

    await test.step('Step13: Enable feature', async () => {
        await page.locator("//span[@class='slider round']").click();
    });

    await test.step('Step14: Rate with stars', async () => {
        await page.locator("//div[@id='starRating']").click();
    });

   /*  await test.step('Step15: Fill custom date', async () => {
    await page.locator("//input[@id='customDate']").fill("2025-09-12");
}); */ 
// -> Step15: e k nhập dc date trên UI :(( nên code cũng k chạy dc

    await test.step('Step16: Click Register button', async () => {
    await page.locator("//button[@type='submit']").click();
});


});



