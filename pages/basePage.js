import { Builder, until, Key } from 'selenium-webdriver'

// use Builder to create a new webdriver instance using chrome
// and use implicit waits
const driver = new Builder().forBrowser('chrome').build()
driver.manage().setTimeouts({ implicit: 20000, pageLoad: 20000 })

const basePage = {
  driver,
  baseUrl: 'https://qualityshepherd.com/',

  /**
   * wrapper for navigateTo so we can use relative urls and append them to baseUrl
   * @param  {string} relativeUrl
   */
  async goto (relativeUrl = '') {
    await this.driver.get(`${this.baseUrl}${this.url}${relativeUrl}`)
  },

  /**
   * quit the current webdriver session
   */
  async quit () {
    await this.driver.quit()
  },

  /**
   * find a single element
   * @param  {By} elementBy - an object created by Webdriver's By method
   * @return {obj} - a webdriver locator object
   */
  async find (elementBy) {
    const element = await this.driver.wait(until.elementLocated(elementBy))
    return element
  },

  /**
   * find multiple elements
   * @param  {By} elementBy - an object created by Webdriver's By method
   * @return {obj} - a webdriver locator object
   */
  async findAll (elementBy) {
    const elements = await this.driver.wait(until.elementsLocated(elementBy))
    return elements
  },

  /**
   * click an element
   * @param  {By} elementBy - an object created by Webdriver's By method
   * @param  {int} index - optional index of element to click
   * @return {obj} - a self reference
   */
  async click (elementsBy, index = 0) {
    const elements = await this.findAll(elementsBy)
    await elements[index].click()
  },

  /**
   * wait and click
   *
   * click can sometimes fire while scrolling to an element
   *
   * @param  {By} elementBy
   * @param  {num} waitTime - time to wain in ms
   * @return {obj} - a self reference
   */
  async waitAndClick (elementBy, waitTime = 420) {
    const element = await this.find(elementBy)
    const actions = this.driver.actions({ async: true })
    return await actions
      .move({ origin: element })
      .pause(waitTime)
      .click(element)
      .perform()
  },

  /**
   * command click a link (opens in new tab)
   * @param  {By} elementBy
   * @return {obj} - a self reference
   */
  async commandClick (elementBy) {
    const element = await this.find(elementBy)
    const actions = driver.actions({ async: true })
    await actions
      .keyDown(Key.COMMAND)
      .click(element)
      .perform()
  },

  /**
   * get the number of elements
   * @param  {By} elementBy - an object created by Webdriver's By method
   * @return {int}
   */
  async getCount (elementBy) {
    const elements = await this.findAll(elementBy)
    return elements.length
  },

  /**
   * test if an element is present in the dom
   * @param  {By} elementBy - an object created by Webdriver's By method
   * @return {bool}
   */
  async isPressent (elementBy) {
    const found = await this.driver.findElements(elementBy)
    return found.length > 0
  },

  /**
   * switch to a new browser window
   * @param  {int} index - the index of the window to switch to (default 1)
   */
  async switchToNewWindow (index = 1) {
    // wait for the new window to open
    await this.driver.wait(async () => (await this.driver.getAllWindowHandles()).length === 2, 6000)
    const windowHandles = await this.driver.getAllWindowHandles()
    await this.driver.switchTo().window(windowHandles[index])
  },

  /**
   * switch to the first/original window
   */
  async switchToFirstWindow () {
    const windowHandles = await this.driver.getAllWindowHandles()
    await this.driver.switchTo().window(windowHandles[0])
  },

  /**
   * close the current browser window
   * @return {[type]} [description]
   */
  async close () {
    await this.driver.close()
  },

  /**
   * hover over an element
   * @param  {By} elementBy - an object created by Webdriver's By method
   */
  async hoverOver (elementBy) {
    const element = await this.find(elementBy)
    const actions = this.driver.actions({ async: true })
    await actions.move({ origin: element }).perform()
  }
}
export default basePage
