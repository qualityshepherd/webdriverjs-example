const {Builder, By, promise, until} = require('selenium-webdriver');

/* jshint ignore:start */

describe('QualityShepherd.com', () => {
    let driver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('firefox').build();
    });

    test('should open the home page', async () => {
        await driver.get('http://qualityshepherd.com');
        let siteTitle = await driver.findElement(By.css('.site-title a')).getText();

        expect(siteTitle).toBe('Quality Shepherd');
    });

    afterAll(async () => {
        await driver.quit();
    }, 10000);
});

/* jshint ignore:end */