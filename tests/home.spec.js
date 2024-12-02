const { test, expect } = require('@playwright/tests');

test.describe('StudyHive Page Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to the page
    await page.goto('http://localhost:5173'); // Update with the correct URL
  });

  test('Verify header elements', async ({ page }) => {
    // Check the logo is visible
    const logo = page.locator('.logo img');
    await expect(logo).toBeVisible();

    // Verify navigation links
    const homeLink = page.locator('a[href="/"]');
    const dashboardLink = page.locator('a[href="/home"]');
    const loginLink = page.locator('a[href="/login"]');
    await expect(homeLink).toHaveText('Home');
    await expect(dashboardLink).toHaveText('Dashboard');
    await expect(loginLink).toHaveText('Login');
  });

  test('Validate Hero Section', async ({ page }) => {
    // Verify hero text
    const heroHeader = page.locator('h1.text-orange-500');
    const heroParagraph = page.locator('.hero-text p');
    await expect(heroHeader).toHaveText('Collaborate, Learn & Achieve');
    await expect(heroParagraph).toContainText('StudyHive is an interesting platform');

    // Verify 'Join for free' button
    const joinButton = page.locator('button:has-text("Join for free")');
    await expect(joinButton).toBeVisible();
    await joinButton.click();
    // Add assertion for navigation or modal after click, if any
  });

  test('Validate Features Section', async ({ page }) => {
    // Check Features header
    const featuresHeader = page.locator('section.features h2');
    await expect(featuresHeader).toContainText('Our Features');

    // Validate feature cards
    const featureCards = page.locator('.features .container .feature-image img');
    await expect(featureCards).toHaveCount(4);
  });

  test('Validate Testimonial Section', async ({ page }) => {
    // Check Testimonial header and content
    const testimonialHeader = page.locator('section.testimonial h2');
    const testimonialContent = page.locator('section.testimonial p');
    await expect(testimonialHeader).toHaveText('What They Say?');
    await expect(testimonialContent).toContainText('StudyHive has got more than 10k positive ratings');
  });

  test('Validate Footer', async ({ page }) => {
    // Verify newsletter subscription
    const emailInput = page.locator('footer input[type="email"]');
    const subscribeButton = page.locator('footer button:has-text("Subscribe")');
    await expect(emailInput).toBeVisible();
    await expect(subscribeButton).toBeVisible();

    // Subscribe with a test email
    await emailInput.fill('test@example.com');
    await subscribeButton.click();
    // Add assertion to validate subscription behavior
  });

});
