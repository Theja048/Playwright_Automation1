import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
	await test.step("navigate to facebook url", async () => {
		await page.goto("https://www.facebook.com/");
	});

	await test.step("enter username & password", async () => {
		await page.getByTestId("royal-email").click();
		await page.getByTestId("royal-email").fill("Admin@123");
		await page.getByTestId("royal-pass").fill("123445");
	});

	await test.step("click on login", async () => {
		await page.getByTestId("royal-login-button").click();
	});

	await test.step("validate error message", async () => {
		await expect(page.locator("#email_container")).toContainText(
			"email you entered isn't connected to an account. Find your account and log in."
		);
	});
});
