let yoodilize = {}
module.exports ={
    before: browser=>{
        yoodilize = browser.page.yoodilizePage(),
        yoodilize.navigate()

    },
    after: browser=> {
        yoodilize.end()
    },
    'Yoodilize': browser=> {
        var searchterm = 'Xbox'
        yoodilize
        .setValue('@searchbar', searchterm)
        .click('@results')
        .waitForElementPresent('body')
        .verify.containsText('@check', searchterm)
        .click('@home')
    },
    'Selector test': browser=> {
        yoodilize
        .click('@recvehicles')
        .waitForElementVisible('@check')
        .verify.containsText('@check', 'Recreational Vehicles')
        .click('@home')
        .click('@OutdoorGear')
        .waitForElementVisible('@check')
        .verify.containsText('@check', 'Outdoor Gear')
        .click('@home')
        .click("@Electronics")
        .waitForElementVisible('@check')
        .verify.containsText('@check', 'Electronics')
        .click('@home')
        .click('@party')
        .waitForElementVisible('@check')
        .verify.containsText('@check', 'Party & Wedding Equipment')
        .click('@home')
        .click('@tools')
        .waitForElementVisible('@check')
        .verify.containsText('@check', 'Tools')
        .click('@home')
        .click('@lotsofcotton')
        .waitForElementVisible('@check')
        .verify.containsText('@check','Clothing')
        .click('@home')
        .click('@homeandk')
        .waitForElementVisible('@check')
        .verify.containsText('@check','Home and Kitchen')
        .click('@home')
        .click('@gamermode')
        .waitForElementVisible('@check')
        .pause(2000)
        .verify.containsText('@check','Toys and Games')
        .click('@home')
        .click('@lawnandgarden')
        .waitForElementVisible('@check')
        .verify.containsText('@check','Lawn and Garden')
        .click('@home')
        .click('@sportingGoods')
        .waitForElementVisible('@check')
        .verify.containsText('@check','Sporting Equipment')
        .click('@home')
        .click('@dvds')
        .waitForElementVisible('@check')
        .verify.containsText('@check', 'DVDs')
        .click('@home')
        .click('@venues')
        .waitForElementVisible('@check')
        .verify.containsText('@check','Venues')
        .click('@home')
        .click('@music')
        .waitForElementVisible('@check')
        .verify.containsText('@check','Music')
        .click('@home')
        .click('@businessequipment')
        .waitForElementVisible('@check')
        .verify.containsText('@check','Business Equipment')
        .click('@home')
        .click('@misc')
        .waitForElementVisible('@check')
        .verify.containsText('@check','Misc')
    }

}