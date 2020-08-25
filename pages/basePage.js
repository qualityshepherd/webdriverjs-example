import {Builder, By, until} from 'selenium-webdriver'
const driver = new Builder().forBrowser('chrome').build()
driver.manage().setTimeouts({ implicit: 20000, pageLoad: 20000 })


const basePage = {
  driver,
  baseUrl: 'https://qualityshepherd.com/',

  /**
   * wrapper for navigateTo so we can use relative urls and append them to baseUrl
   * @param  {string} relativeUrl
   */
  async goto(relativeUrl = '') {
    await this.driver.get(`${this.baseUrl}${this.url}${relativeUrl}`)
  },

  async quit() {
    await this.driver.quit()
  },

  async find(elementBy) {
    const element = await this.driver.wait(until.elementLocated(elementBy))
    return element
  },

  async findAll(elementBy) {
    const elements = await this.driver.wait(until.elementsLocated(elementBy))
    return elements
  },

  async click(elementBy, index = 0) {
    const elements = await this.findAll(elementBy)
    return elements[index].click()
  },

  async getCount(elementBy) {
    const elements = await this.findAll(elementBy)
    return elements.length
  },

  async elementPressent(elementBy) {
    const found = await this.driver.findElements(elementBy)
    return found.length > 0
  },

  async switchToNewWindow() {
    await this.driver.wait(async () => ( await this.driver.getAllWindowHandles()).length === 2, 5000);
    const windows = await this.driver.getAllWindowHandles()
    await this.driver.switchTo().window(windows[1])
  },

  async switchToFirstWindow() {
    const windows = await this.driver.getAllWindowHandles()
    await this.driver.switchTo().window(windows[0])
  },

  async close() {
    await this.driver.close()
  },

  async hoverOver(elementBy) {
    const element = await this.find(elementBy)
    const actions = this.driver.actions({async: true})
    await actions.move({origin:element}).perform();
  }
}
export default basePage