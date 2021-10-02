import { By } from 'selenium-webdriver'
import basePage from './basePage'

const githubPage = {
  username: By.css('.vcard-fullname')
}
export default { ...basePage, ...githubPage }
