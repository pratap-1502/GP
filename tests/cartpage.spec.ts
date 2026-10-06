import { test, expect } from '@playwright/test';

test('Cartpage', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
    await expect(page).toHaveTitle(/Playwright2/);

});
