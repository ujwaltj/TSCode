import{expect, test} from '@playwright/test'

test("handling frames test 1", async({page}) => {
    await page.goto("https://letcode.in/frame/")
    const totalFrames= await page.frames()
    console.log("total nu. of frames: " +totalFrames.length);
    
    const myframe = page.frame("firstFr")
    myframe?.fill("input[name='fname']", "Ujwal")
    page.waitForTimeout(4000)
    myframe?.fill("[placeholder='Enter email']", "Bho")
    const text1= await myframe?.locator("p.title has-text-info").textContent()
    console.log(text1);
    
   // expect(await myframe?.locator("p.title has-text-info").textContent())
    //.toContain("You have entered")
    
})