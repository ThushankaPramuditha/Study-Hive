const { test, expect } = require('@playwright/test');

test('StudyHive Login Page Test', async ({ page }) => {
  // Navigate to the StudyHive login page
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

  // Fill in the login form
  await page.fill('#email', 'john.doe@example.com');
  await page.fill('#password', 'SecurePassword123');

  // Interact with "Remember me" checkbox
  const rememberMeCheckbox = page.locator('#remember');
  await expect(rememberMeCheckbox).toBeVisible();
  await rememberMeCheckbox.check();

  // Verify the "Forgot password?" link
  const forgotPasswordLink = page.locator('a:has-text("Forgot password?")');
  await expect(forgotPasswordLink).toBeVisible();
  await expect(forgotPasswordLink).toHaveAttribute('href', '#');

  // Submit the form
  const loginButton = page.locator('button:has-text("Login")');
  await expect(loginButton).toBeVisible();
  await loginButton.click();

  // Validate post-login behavior (e.g., success message or redirection)
  // Replace the below line with the expected behavior after login
  await expect(page).toHaveURL(/.*dashboard/); // Example: redirected to a dashboard page
});
