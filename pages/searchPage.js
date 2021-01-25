import basePage from './basePage'
import { By } from 'selenium-webdriver'

const searchPage = {
  ...basePage,

  results: By.css('.post'),
  noResultsMsg: By.css('#no-results')
}
export default searchPage
