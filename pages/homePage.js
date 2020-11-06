import {By} from 'selenium-webdriver'
import basePage from './basePage'

// could use a class/inheritance here but I opted not to...
const homePage = {
  ...basePage, // merge in basePage

  url: '',
  posts: By.css('div.post'),
  githubLink: By.css('#github-social img'),
  loadMoreBtn: By.css('#load-more'),

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
   * find a post via the "Load more..." button
   * @param  {string} postTitle
   */
  async findPostByLoadingMore(postTitle) {
    await this.waitAndClick(this.loadMoreBtn);
    await this.waitAndClick(this.loadMoreBtn);
    // did we find it? If not try, try again...
    await this.postTitleExists(postTitle) ? true : await this.findPostByLoadingMore(postTitle);
  }
}
export default homePage