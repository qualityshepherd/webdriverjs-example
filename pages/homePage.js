import {By} from 'selenium-webdriver'
import basePage from './basePage'

const homePage = {
  ...basePage, // merge basePage

  // I went CSS but could also do a `By` strategy
  url: '',
  posts: 'div.post',
  postTitleLinks: 'h2 a',
  siteTitle: 'h1',
  githubLink: '#github-social img',
  nextPageLink: '.next',

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