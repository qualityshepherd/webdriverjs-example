import basePage from './basePage'
import { By } from 'selenium-webdriver'

const searchPage = {
  results: By.css('.post'),
  noResultsMsg: By.css('#no-results')
}
export default { ...basePage, ...searchPage }
