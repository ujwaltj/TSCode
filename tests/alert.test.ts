import {expect, test} from '@playwright/test'

test("handling alert 1", async({page}) =>{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")

    page.on("dialog", async(alert) => {
        const text = alert.message();
        console.log(text);
        alert.accept();
        
    })    
    const javascriptAlterBtn = await page.locator("button:has-text('Click Me')").nth(0).click()
})

test("handling alert 2", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")

    page.on("dialog", async(alert) => {
        const textValue = alert.message();
        console.log(textValue);
        alert.dismiss();
                
    })

    const confirmBoxBtn = await page.locator("button:has-text('Click Me')").nth(1).click()
    const verifyDismissText = page.locator("#confirm-demo")
    console.log(await verifyDismissText.textContent());
    const exptext= await verifyDismissText.textContent()
    expect(exptext).toEqual("You pressed Cancel!")
    expect(exptext).toContain("Cancel")
})

test("handling acceptance alert for Alert 2", async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")

    page.on("dialog", async(alert) =>{
        const accpetMsg= alert.message();
        console.log(accpetMsg);
        alert.accept();
        
    })

    const confirmAcceptBtn = await page.locator("button:has-text('Click Me')").nth(1).click()
    const verifyAcceptMsg= page.locator("#confirm-demo")
    console.log(await verifyAcceptMsg.textContent());
    const expAccpRes= await verifyAcceptMsg.textContent()
    expect(expAccpRes).toContain("You pressed OK!")
})


test("handling alert 3", async({page}) =>{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")

    page.on("dialog", async(alert) =>{
       const textVerify =  alert.defaultValue()
       console.log(textVerify);
       
        alert.accept("Ujwal")
    })
    
    const thirdPromptBox = await page.locator("button:has-text('Click Me')").nth(2).click()
    const verifyExpRes= page.locator("#prompt-demo")
    console.log((await verifyExpRes.textContent()));
    const expecRes= await verifyExpRes.textContent();
    expect(expecRes).toContain("You have entered 'Ujwal' !")

})