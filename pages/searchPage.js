import basePage from './basePage'
import {Key, By} from 'selenium-webdriver'

const searchPage = {
  ...basePage,

  url: '?search/',
  searchBox: By.css('#search_input'),
  results: By.css('.search-result'),
  noResultsMsg: By.css('#no-results'),

  async searchFor(text) {
    let searchBox = await this.find(this.searchBox)
    await searchBox.sendKeys(text, Key.ENTER);
  }
}
export default searchPage