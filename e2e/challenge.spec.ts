import { test, expect } from '@playwright/test';

test('fill basic info', async ({ page }) => {
  const firstName = 'John'
  const lastName = 'Sample'
  await page.goto('https://surveyrc.taxcreditco.com/automation-challenge');
  await page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
  await page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);
  await page.getByRole('textbox', { name: 'Email Address' }).fill('xyztest1001@taxcc.bg');
  await page.getByRole('textbox', { name: 'Street Address' }).fill('Street line 1');
  await page.getByRole('textbox', { name: 'City' }).fill('Monterey Park');
  await page.getByRole('textbox', { name: 'Zip Code' }).fill('97754');

  await page.getByRole('button', { name: 'Next' }).click();

  await page.getByText('No').nth(0).click()
  await page.getByText('No').nth(1).click()
  await page.getByText('No').nth(2).click()
  await page.getByText('No').nth(3).click()
  await page.getByText('No').nth(4).click()
  await page.getByText('No').nth(5).click()
  await page.getByText('No').nth(6).click()

  await page.getByRole('button', { name: 'Next' }).click();

  await expect(page.getByRole('textbox')).toHaveValue(`${firstName} ${lastName}`)

  await page.getByRole('button', { name: 'Submit form' }).click();

  await expect(page).toHaveURL( /https\:\/\/www.experian.com\/employer-services*/) 
});

