import { By } from 'selenium-webdriver'
import basePage from './basePage'

const githubPage = {
  ...basePage,

  username: By.css('.vcard-fullname')
}
export default githubPage
