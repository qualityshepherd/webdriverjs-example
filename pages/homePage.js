import { By, Key } from 'selenium-webdriver'
import basePage from './basePage'

const homePage = {
  url: '',
  posts: By.css('.post'),
  githubLink: By.css('#github-social img'),
  loadMoreBtn: By.css('#load-more'),
  searchBox: By.css('#search'),

  /**
   * test if a post title exists
   * @param  {string} postTitle
   * @return {bool}
   */
  async postTitleExists (postTitle) {
    const found = await this.driver.findElements(By.linkText(postTitle))
    return found.length > 0
  },

  /**
   * find a post via the "Load more..." button
   * @param  {string} postTitle
   */
  async findPostByLoadingMore (postTitle) {
    await this.waitAndClick(this.loadMoreBtn)
    // did we find it? If not try, try again...
    await this.postTitleExists(postTitle) ? false : await this.findPostByLoadingMore(postTitle)
  },

  async searchFor (text) {
    const searchBox = await this.find(this.searchBox)
    await searchBox.sendKeys(text, Key.ENTER)
  }
}
export default { ...basePage, ...homePage }
