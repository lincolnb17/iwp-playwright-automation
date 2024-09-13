import { test, expect} from '@playwright/test';
import { sleep } from '../lib/utils';

test.describe('Suite:', () => {
  // Navigate to the website before each test
  test.beforeEach(async ({ page }) => {
    await page.goto('https://stage.instawp.io/onboard');
  });

  // Test case for login functionality
  test('Login functionality', async ({ page }) => {
    await page.click("//span[normalize-space()='Continue with Email']");
    // Enter the username/email in the login form
    await page.fill('input[id="email"]', 'lincoln@instawp.com');
    
    // Enter the password in the login form
    await page.fill('input[id="password"]', '11111111');
    
    // Click on the login button
    await page.click('button[type="submit"]');
    
  // Wait for the element to be visible
  const locator = page.locator('//*[@id="app"]/div/div/header/div/h2'); 
  
  // Get the text content of the element
  const textContent = await locator.textContent();
  
  // Assert the text content
  expect(textContent).toBe('Dashboard');
  await sleep(5000);
  
  });
});



