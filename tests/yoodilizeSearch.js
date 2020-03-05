module.exports ={
    before: browser=> {
        browser.url('https://www.yoodlize.com/')
        .waitForElementPresent('body')
    },
    after: browser=> {
        browser.end()
    },
    'Search Test':browser=> {
        browser
        .useXpath()
        .setValue('//input[@placeholder="Search for an item"]', 'Rubix Cube')   
        .pause(1000)
        .click('//button[@class="sc-uJMKN fpBmEu sc-ifAKCX kvYMhQ"]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]','Rubix Cube')
        .pause(1000)
        .click('//div[@class="_1WAWo"]')
        .pause(5000)
    }
}