import { Builder, By, Key, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';

async function test() {
    // Replace this URL with your actual login URL
    const loginUrl = "http://localhost:5173/login";

    // Create a new WebDriver instance
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        // Navigate to the login page
        await driver.get(loginUrl);
        console.log("Navigated to login page");

        // Wait for the input fields to become available and log the steps
        await driver.wait(until.elementLocated(By.css('.sc-kGLCbq')));
        console.log("Input fields located");

        // Enter the username "admin"
        await driver.findElement(By.css('.sc-kGLCbq:nth-of-type(1)')).sendKeys("admin");
        console.log("Entered username");

        // Enter the password "123456"
        await driver.findElement(By.css('.sc-kGLCbq:nth-of-type(2)')).sendKeys("123456");
        console.log("Entered password");

        // Wait for the login button to become available and log the step
        await driver.wait(until.elementLocated(By.css('.sc-drMgrp.ixqYfv')));
        console.log("Login button located");

        // Click on the login button
        await driver.findElement(By.css('.sc-drMgrp.ixqYfv')).click();
        console.log("Clicked login button");

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
