import {By} from 'selenium-webdriver'
import basePage from './basePage'

// could use a class/inheritance here but I opted not to...
const homePage = {
  ...basePage, // merge in basePage

  url: '',
  posts: By.css('div.post'),
  githubLink: By.css('#github-social img'),
  nextPageLink: By.css('.next'),

  async postTitleExists(postTitle) {
    const found = await this.driver.findElements(By.linkText(postTitle))
    return found.length > 0
  },

  async findPostByPaging(postTitle) {
    await this.click(this.nextPageLink);
    await this.postTitleExists(postTitle) ? true : await this.findPostByPaging(postTitle);
  }
}
export default homePage