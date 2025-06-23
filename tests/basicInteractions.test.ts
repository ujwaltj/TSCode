import {expect, test} from '@playwright/test'

test("New website Test", async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
    const msg= page.getByPlaceholder("Please enter your Message")
    await msg.scrollIntoViewIfNeeded();
    console.log(await msg.getAttribute("placeholder"));
    expect(msg).toHaveAttribute("placeholder", "Please enter your Message")
    console.log("Before entering data: " + await msg.inputValue());
    await msg.fill("test");
    console.log("After entering data: " + await msg.inputValue());
    
    await page.waitForTimeout(3000)

})

test("Sum test", async({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
    const firstValue = page.getByPlaceholder("Please enter first value")
    await firstValue.scrollIntoViewIfNeeded();
    const secondValue = page.getByPlaceholder("Please enter second value")
    const getSumBtn = page.getByRole('button', {name: 'Get Sum'})
    const result = page.locator("#addmessage")

    let num1 = 10;
    let num2 = 201;
    let expectedRes = num1 + num2;
    await firstValue.fill("" +num1)
    await secondValue.type("" +num2)
    await getSumBtn.click()
    console.log(await result.textContent());
    const actualRes= await result.textContent()

    expect(actualRes).toEqual("" +expectedRes)


})


test("checkBoxdemo", async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo")
    const checkBox1 = page.locator("//h2[text()='Single Checkbox Demo']/following-sibling::label/input")
    expect(checkBox1).not.toBeChecked();
    await checkBox1.check();
    expect(checkBox1).toBeChecked();
    await page.waitForTimeout(3000)
    const checkMsg= page.locator("//p[text()='Checked!']")
    console.log(await checkMsg.textContent());
    const actCheckBoxMsg= await checkMsg.textContent()
    expect(actCheckBoxMsg).toEqual("Checked!")

})