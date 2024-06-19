import { Builder, By, Key, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';

async function test (){
    // Replace this URL with your actual login URL
    const loginUrl = "http://localhost:5173/login";

    // Create a new WebDriver instance
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        // Navigate to the login page
        await driver.get(loginUrl);

        // Wait for the username input field to become available
        await driver.wait(until.elementLocated(By.name('username')));

        // Enter the username "admin"
        await driver.findElement(By.name('username')).sendKeys("admin");

        // Wait for the password input field to become available
        await driver.wait(until.elementLocated(By.name('password')));

        // Enter the password "123456"
        await driver.findElement(By.name('password')).sendKeys("123456");

        // Wait for the login button to become available
        await driver.wait(until.elementLocated(By.name('loginButton')));

        // Click on the login button
        await driver.findElement(By.name('loginButton')).click();

        // Wait for some element that indicates a successful login
        // Replace 'dashboard' with an actual element ID or selector that is present on the post-login page
        await driver.wait(until.elementLocated(By.id('dashboard')));

        console.log("Login successful");

    } catch (error) {
        console.error("An error occurred:", error);
    } finally {
        // Quit the driver after some time
        setTimeout(async () => {
            await driver.quit();
        }, 10000);
    }
}

test();
