import { test, expect } from '@playwright/test';

test('test new file', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.hover("//a[@class='icon-left both nav-link dropdown-toggle']/div/span[contains(.,'My account')]")
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('ujwal.tjau@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('test@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Edit your account' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('ujwal test');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.waitForTimeout(3000)
  await page.hover("//a[@class='icon-left both nav-link dropdown-toggle']/div/span[contains(.,'My account')]")
  await page.getByRole('link', { name: 'Logout', exact: true }).click();
});