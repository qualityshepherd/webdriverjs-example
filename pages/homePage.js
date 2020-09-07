import {By} from 'selenium-webdriver'
import basePage from './basePage'

// could use a class/inheritance here but I opted not to...
const homePage = {
  ...basePage, // merge in basePage

  url: '',
  posts: By.css('div.post'),
  githubLink: By.css('#github-social img'),
  nextPageLink: By.css('.next'),

  /**
   * test if a post title exists
   * @param  {string} postTitle
   * @return {bool}
   */
  async postTitleExists(postTitle) {
    const found = await this.driver.findElements(By.linkText(postTitle))
    return found.length > 0
  },

  /**
   * click it!
   * webdriverjs will _sometimes_ click WHILE it's scrolling to the
   * element. In this case, at the bottom of the page. Sadness...
   */
  async clickGithubLink() {
    // TODO: stop being lazy and do this right... :\
    await homePage.hoverOver(this.githubLink)
    await this.driver.sleep(420) // sadness
    await this.click(this.githubLink)
  },

  /**
   * find a post via pagination
   * @param  {string} postTitle
   */
  async findPostByPaging(postTitle) {
    await this.click(this.nextPageLink);
    // did we find it? If not try, try again...
    await this.postTitleExists(postTitle) ? true : await this.findPostByPaging(postTitle);
  }
}
export default homePage