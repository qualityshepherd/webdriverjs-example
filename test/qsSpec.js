'use strict';

const assert = require('assert');
const {Builder, By, promise, until} = require('selenium-webdriver');

describe('QualityShepherd.com', function() {
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('should open the home page', async function() {
        await driver.get('http://qualityshepherd.com');
        let siteTitle = await driver.findElement(By.css('.site-title a')).getText();
        
        assert.equal(siteTitle, 'Quality Shepherd');
    });

    after(async function() {
        await driver.quit();
    });
});