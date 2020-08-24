import basePage from './basePage'
import {Key} from 'selenium-webdriver'

const searchPage = {
  ...basePage,

  url: '?search/',
  searchBox: '#search_input',
  results: '.search-result',
  noResultsMsg: '#no-results',

  async searchFor(text) {
    let searchBox = await this.find(this.searchBox)
    await searchBox.sendKeys(text, Key.ENTER);
  }
}
export default searchPage