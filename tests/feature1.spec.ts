import { test, expect } from '@playwright/test';

test('feature1', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
    await expect(page).toHaveTitle(/Playwright2/);

});
