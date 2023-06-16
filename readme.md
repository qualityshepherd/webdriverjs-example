[![E2E Tests](https://github.com/qualityshepherd/webdriverjs-example/actions/workflows/e2e.yaml/badge.svg)](https://github.com/qualityshepherd/webdriverjs-example/actions/workflows/e2e.yaml)

# WebdriverJS Example

[WebdriverJS](https://www.selenium.dev/documentation) (confusingly aka `Selenium-Webdriver` :\ ) is an adorable little e2e testing framework... with all the quirks we've come to expect from it.

At the end of the day... I _definitely would_ choose vanilla webdriverjs over [Protractor](https://github.com/qualityshepherd/protractor-example) or [WebdriverIO](https://github.com/qualityshepherd/wdio-example) because of the _crazy_ amount of changes both of those frameworks go through (and we must endure). But ultimately, I'd recommend getting off Selenium/Webdriver altogether.

These example E2E tests:
  - use [WebdriverJS](https://www.npmjs.com/package/selenium-webdriver)
  - run via [Jest](https://jestjs.io/)
  - use page objects
  - run in parallel
  - use ES6y
  - run on CI
  - are a bit silly but you'll get the point...

## Installing & Running
> assumes you have [Nodejs 10+](https://nodejs.org/en) and [Git](https://git-scm.com/downloads) installed
- clone it! `git clone git@github.com:qualityshepherd/webdriverjs-example.git`
- jump into the directory `cd webdriverjs-example`
- install dependencies: `npm i`
- run tests: `npm test`

## Links
- [WebdriverJS API](https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/index.html)

![Test Run Gif](https://qualityshepherd.com/screencasts/webdriverjs-example.gif)
