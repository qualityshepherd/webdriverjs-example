'use strict';

const assert = require('assert');
const {Builder, By, promise, until} = require('selenium-webdriver');

describe('QualityShepherd.com', () => {
    let driver;

    before(async () => {
        driver = await new Builder().forBrowser('chrome').build();
    });

    it('should open the home page', async () => {
        await driver.get('http://qualityshepherd.com');
        let siteTitle = await driver.findElement(By.css('.site-title a')).getText();

        assert.equal(siteTitle, 'Quality Shepherd');
    });

    after(async () => {
        await driver.quit();
    });
});