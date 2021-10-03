import homePage from '../pages/homePage'
import githubPage from '../pages/githubPage'

describe('QualityShepherd.com', () => {
  beforeAll(async () => {
    await homePage.goto()
  })

  test('should display 7 posts per page', async () => {
    await expect(await homePage.getCount(homePage.posts)).toBe(7)
  })

  test('should find an older post by loading more posts', async () => {
    const postTitle = 'Protractor - How To Page Object'
    await homePage.findPostByLoadingMore(postTitle)

    await expect(await homePage.postTitleExists(postTitle)).toBeTruthy()
  })

  test('should open social media link in new window', async () => {
    await homePage.cmdCtrlClick(homePage.githubLink)
    await homePage.switchToNewWindow()

    await expect(await githubPage.isPressent(githubPage.username)).toBeTruthy()

    await githubPage.close()
    await homePage.switchToFirstWindow()
  })

  afterAll(async () => {
    await homePage.quit()
  })
})
