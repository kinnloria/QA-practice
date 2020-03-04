module.exports ={
    before: browser => {
       browser.url('https://www.yoodlize.com/') 
       .waitForElementPresent('body')
    },
    after: browser=> {
        browser.end()
    },
    'see if all links work':browser=> {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[1]')
        .pause(1000)
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]',"Recreational Vehicles")
        .useXpath()
        .click('//img[@src="/images/logo/blueRaw.png"]')
        .pause(1000)
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[2]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', "Outdoor Gear")
        .pause(5000)
        .useXpath()
        .click('//img[@src="/images/logo/blueRaw.png"]')
        .pause(5000)
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[3]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]',"Electronics")
        .pause(5000)
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[4]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]',"Party & Wedding Equipment")
        .pause(5000)
        .useXpath()
        .click('//img[@src="/images/logo/blueRaw.png"]')
        .pause(5000)
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[5]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]',"Tools")
        .pause(5000)
        .useXpath()
        .click('//img[@src="/images/logo/blueRaw.png"]')
        .pause(5000)
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[6]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]',"Clothing")
        .pause(5000)
        .useXpath()
        .click('//img[@src="/images/logo/blueRaw.png"]')
        .pause(5000)
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[7]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]',"Home & Kitchen")
        .pause(5000)
        .useXpath()
        .click('//img[@src="/images/logo/blueRaw.png"]')
        .pause(5000)
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[8]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]',"Toys & Games")
        .pause(5000)
        .useXpath()
        .click('//img[@src="/images/logo/blueRaw.png"]')
        .pause(5000)
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[9]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]',"Lawn & Garden")
        .pause(5000)
        .useXpath()
        .click('//img[@src="/images/logo/blueRaw.png"]')
        .pause(5000)
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[10]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]',"Sporting Goods")
        .pause(5000)
        .useXpath()
        .click('//img[@src="/images/logo/blueRaw.png"]')
        .pause(5000)
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[11]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]',"DVDs & Video Games")
        .pause(5000)
        .useXpath()
        .click('//img[@src="/images/logo/blueRaw.png"]')
        .pause(5000)
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[12]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]',"Venues")
        .pause(5000)
        .useXpath()
        .click('//img[@src="/images/logo/blueRaw.png"]')
        .pause(5000)
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[13]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]',"Music")
        .pause(5000)
        .useXpath()
        .click('//img[@src="/images/logo/blueRaw.png"]')
        .pause(5000)
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[14]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]',"Business Equipment")
        .pause(5000)
        .useXpath()
        .click('//img[@src="/images/logo/blueRaw.png"]')
        .pause(5000)
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[15]')
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]',"Misc")
        .pause(5000)

        
    }
}