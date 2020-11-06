import homePage from '../pages/homePage'
import searchPage from '../pages/searchPage'

describe('Search', () => {

  beforeEach(async () => {
    await homePage.goto()
  })

  test('should return search results', async () =>  {
    await homePage.searchFor('testcafe')

    expect(await searchPage.getCount(searchPage.results)).toBeGreaterThan(0)
  })

  test('unfound search term should return no results', async () =>  {
    await homePage.searchFor('sfdslkjsfkjslkdf')

    expect(await searchPage.isPressent(searchPage.noResultsMsg)).toBeTruthy()
  })

  afterAll(async () => {
    await searchPage.quit()
  })
})

