import{expect, test} from '@playwright/test'

test("select drop down test", async({page}) =>{
    let dayOfWeek = "Thursday"
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo")
    await page.selectOption("#select-demo", {
        //label: "Tuesday"
        value: dayOfWeek
        //index: 5
    })
    await page.waitForTimeout(4000)
    const textVal= page.locator("//p[text()='Day selected :- "+dayOfWeek+"']")
    console.log(await textVal.textContent())
    const textRes= await textVal.textContent()
    expect(textRes).toContain(dayOfWeek)
})

test("multi-select from dropdown", async({page}) =>{
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo")
    await page.selectOption("#multi-select", [{
        label: "Texas"
    }, {
        index: 2
    }, {
        value: "Washington"
    }])

    await page.waitForTimeout(4000)

})


test("handle dropdown 3", async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo")
    selectCountry("Australia")
     async function selectCountry(countryName) {
        const clickSelectCountryDropDown= page.locator("#country+span")
        await clickSelectCountryDropDown.click()  
        await page.waitForTimeout(4000)
        await page.locator("ul#select2-country-results")
                  .locator("li", {
                        hasText: countryName
                }).click()
    }   
    
})