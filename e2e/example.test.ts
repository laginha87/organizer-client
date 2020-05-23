import 'expect-puppeteer'

describe('Google', () => {
  beforeAll(async () => {
    await page.goto((global as any).URL)
  })

  it('should display "inbox" text on page', async () => {
    await expect(page).toMatch('Inbox')
    await (global as any).snapshot('Inbox')
  })
})
