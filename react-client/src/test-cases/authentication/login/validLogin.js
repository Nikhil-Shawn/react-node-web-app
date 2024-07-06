import { Builder, By, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';

async function testValidLogin() {
    const loginUrl = "http://localhost:5173/login";
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        await driver.get(loginUrl);
        console.log("Navigated to login page");

        await driver.wait(until.elementLocated(By.css('.sc-kGLCbq')));
        console.log("Input fields located");

        await driver.findElement(By.css('.sc-kGLCbq:nth-of-type(1)')).sendKeys("admin");
        console.log("Entered username");

        await driver.findElement(By.css('.sc-kGLCbq:nth-of-type(2)')).sendKeys("123456");
        console.log("Entered password");

        await driver.wait(until.elementLocated(By.css('.sc-drMgrp.ixqYfv')));
        console.log("Login button located");

        await driver.findElement(By.css('.sc-drMgrp.ixqYfv')).click();
        console.log("Clicked login button");

        await driver.wait(until.elementLocated(By.id('dashboard')));
        console.log("Login successful");

    } catch (error) {
        console.error("An error occurred:", error);
    } finally {
        setTimeout(async () => {
            await driver.quit();
        }, 5000);
    }
}

testValidLogin();
