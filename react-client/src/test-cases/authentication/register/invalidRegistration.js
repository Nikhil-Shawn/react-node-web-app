import { Builder, By, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';

async function testInvalidRegistration() {
    const registrationUrl = "http://localhost:5173/register";
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        await driver.get(registrationUrl);
        console.log("Navigated to registration page");

        await driver.wait(until.elementLocated(By.name('username')));
        await driver.findElement(By.name('username')).sendKeys("testuser");
        console.log("Entered username");

        await driver.findElement(By.name('email')).sendKeys("test@example.com");
        console.log("Entered email");

        await driver.findElement(By.name('password')).sendKeys("password123");
        console.log("Entered password");

        // Leaving confirm password field empty to simulate missing fields
        await driver.findElement(By.css('.register-button')).click();
        console.log("Clicked register button");

        await driver.wait(until.elementLocated(By.id('errorMessage')));
        console.log("Error message displayed for missing fields");

    } catch (error) {
        console.error("An error occurred:", error);
    } finally {
        setTimeout(async () => {
            await driver.quit();
        }, 5000);
    }
}

testInvalidRegistration();
