let expect = require('chai').expect
const {Builder, By, promise, until} = require('selenium-webdriver')
let driver = new Builder()
    .usingServer('http://localhost:4444/wd/hub')
    .forBrowser('chrome')
    .build()

describe('QualityShepherd.com', function() {
    it('should open the home page', async function() {
        await driver.get('http://qualityshepherd.com')
        let siteTitle = await driver.findElement(By.css('.site-title a')).getText()
        
        expect(siteTitle).to.equal('Quality Shepherd')
    })

    after(async function() {
        await driver.quit()
    })
})