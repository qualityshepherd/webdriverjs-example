import homePage from '../pages/homePage'
import githubPage from '../pages/githubPage'

describe('QualityShepherd.com', () => {

  beforeAll(async () => {
    await homePage.goto()
  })

  test('should display 7 posts per page', async () => {
    expect(await homePage.getCount(homePage.posts)).toBe(7)
  })

  test('should open social media link in new window', async () =>  {
    await homePage.clickGithubLink()
    await homePage.switchToNewWindow()

    expect(await githubPage.elementPressent(githubPage.username)).toBeTruthy()

    await githubPage.close()
    await homePage.switchToFirstWindow()
  })

  test('should find an older post by paging', async () =>  {
    const postTitle = 'Protractor: How To Page Object'
    await homePage.hoverOver(homePage.nextPageLink) // because wedriver bug
    await homePage.findPostByPaging(postTitle)

    expect(await homePage.postTitleExists(postTitle)).toBeTruthy()
  })

  afterAll(async () => {
    await homePage.quit()
  })
})

