import searchPage from '../pages/searchPage'

describe('Search', () => {

  beforeEach(async () => {
    await searchPage.goto()
  })

  test('should return search results', async () =>  {
    await searchPage.searchFor('testcafe')

    expect(await searchPage.getCount(searchPage.results)).toBeGreaterThan(0)
  })

  test('unfound search term should return no results', async () =>  {
    await searchPage.searchFor('sfdslkjsfkjslkdf')

    expect(await searchPage.isPressent(searchPage.noResultsMsg)).toBeTruthy()
  })

  afterAll(async () => {
    await searchPage.quit()
  })
})

