import { Builder, By, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';

async function testInvalidLogin() {
    const loginUrl = "http://localhost:5173/login";
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        await driver.get(loginUrl);
        console.log("Navigated to login page");

        await driver.wait(until.elementLocated(By.css('.sc-kGLCbq')));
        console.log("Input fields located");

        await driver.findElement(By.css('.sc-kGLCbq:nth-of-type(1)')).sendKeys("wronguser");
        console.log("Entered invalid username");

        await driver.findElement(By.css('.sc-kGLCbq:nth-of-type(2)')).sendKeys("wrongpassword");
        console.log("Entered invalid password");

        await driver.wait(until.elementLocated(By.css('.sc-drMgrp.ixqYfv')));
        console.log("Login button located");

        await driver.findElement(By.css('.sc-drMgrp.ixqYfv')).click();
        console.log("Clicked login button");

        // Wait for the error message to appear
        await driver.wait(until.elementLocated(By.css('.error-message')));
        console.log("Login failed as expected");

    } catch (error) {
        console.error("An error occurred:", error);
    } finally {
        setTimeout(async () => {
            await driver.quit();
        }, 5000);
    }
}

testInvalidLogin();
