import { test, expect } from '@playwright/test';

test('Authorization test', async ({ page }) => {
    await page.goto('https://realworld.qa.guru/');
    await page.getByRole('link', { name: 'Login' }).click();
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill('guruTest93@example.com');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('qwertyuio');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Dmitriy')).toBeVisible();
});