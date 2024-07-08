import { Builder, By, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';

async function testPasswordReset() {
    const loginUrl = "http://localhost:5173/login";
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        await driver.get(loginUrl);
        console.log("Navigated to login page");

        // Wait for and click on the "Forgot Password" link
        await driver.wait(until.elementLocated(By.css('.forgot-password')));
        console.log("Forgot Password link located");

        await driver.findElement(By.css('.forgot-password')).click();
        console.log("Clicked Forgot Password link");

        // Wait for the password reset page to load
        await driver.wait(until.elementLocated(By.css('.password-reset-page')));
        console.log("Password reset page loaded");

        // Enter the email address for password reset
        await driver.findElement(By.css('.password-reset-email')).sendKeys("user@example.com");
        console.log("Entered email for password reset");

        // Submit the password reset request
        await driver.findElement(By.css('.password-reset-submit')).click();
        console.log("Submitted password reset request");

        // Wait for the confirmation message
        await driver.wait(until.elementLocated(By.css('.reset-confirmation')));
        console.log("Password reset confirmation received");

    } catch (error) {
        console.error("An error occurred:", error);
    } finally {
        setTimeout(async () => {
            await driver.quit();
        }, 5000);
    }
}

testPasswordReset();
