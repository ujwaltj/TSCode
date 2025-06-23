import {Browser, BrowserContext, chromium, expect, Page, test} from '@playwright/test'

test("login test demo", async () => {
    const browser: Browser= await chromium.launch({headless : false});
    const context: BrowserContext = await browser.newContext();    
    const page:Page = await context.newPage();       
    await page.goto("https://ecommerce-playground.lambdatest.io/")
    await page.hover("//a[@class='icon-left both nav-link dropdown-toggle']/div/span[contains(.,'My account')]")
  
    await page.click("//ul[@class='navbar-nav horizontal']/li[6]/ul//a[1]")
    const emailID = page.locator("input[id='input-email']")
    const passd =  page.locator("input[id='input-password']")
    const loginBtn =  page.locator("input[value='Login']")

    await emailID.fill('ujwal.tjau@gmail.com')
    await passd.fill('test@123')
    await loginBtn.click()

    const title = await page.title()
    expect(title).toEqual('My Account')
    await page.waitForTimeout(3000)
    const page1:Page= await context.newPage()
    await page1.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/account')
    await page.waitForTimeout(3000)
})