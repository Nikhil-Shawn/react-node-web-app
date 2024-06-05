import { Builder, By, Key, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';

async function test (){
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://google.com");

    // Wait for the button to become available
    await driver.wait(until.elementLocated(By.id('W0wltc')));

    // Click on the button
    await driver.findElement(By.id('W0wltc')).click();

    // Wait for the search input field to become available
    await driver.wait(until.elementLocated(By.name('q')));

    // Send keys to the search input field
    await driver.findElement(By.name("q")).sendKeys("Hello, world", Key.RETURN);
    
    // Quit the driver after some time
    setTimeout(async () => {
        await driver.quit();
    }, 10000);
}

test();
