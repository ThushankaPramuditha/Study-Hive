const { test, expect } = require('@playwright/test');

test('StudyHive Registration Page Test', async ({ page }) => {
  // Navigate to the StudyHive registration page
  await page.goto('http://your-app-url'); // Replace with the actual URL

  // Verify the page title or welcome message
  await expect(page.locator('text=Welcome to StudyHive')).toBeVisible();

  // Validate the "Back" button
  const backButton = page.locator('a:has-text("Back")');
  await expect(backButton).toBeVisible();

  // Verify the login/register toggle
  const loginRegisterToggle = page.locator('.w-60.h-12.bg-[#FDF58B]');
  await expect(loginRegisterToggle).toBeVisible();
  await expect(loginRegisterToggle.locator('text=Login')).toBeVisible();
  await expect(loginRegisterToggle.locator('text=Register')).toBeVisible();

  // Fill in the registration form
  await page.fill('#firstname', 'John');
  await page.fill('#lastname', 'Doe');
  await page.fill('#email', 'john.doe@example.com');
  await page.fill('#password', 'SecurePassword123');

  // Submit the form
  const registerButton = page.locator('button:has-text("Register")');
  await registerButton.click();

  // Validate post-registration behavior (e.g., success message or redirection)
  // Replace the below line with the expected behavior after registration
  await expect(page).toHaveURL(/.*dashboard/); // Example: redirected to a dashboard page
});
