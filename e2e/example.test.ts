import 'expect-puppeteer'
const pti = require('puppeteer-to-istanbul')

describe('Google', () => {
  beforeAll(async () => {
    page.coverage.startJSCoverage()
    await page.goto((global as any).URL)
  })

  it('should display "inbox" text on page', async () => {
    await expect(page).toMatch('Inbox')
    await (global as any).snapshot('Inbox')
    const jsCoverage = await page.coverage.stopJSCoverage()
    pti.write(jsCoverage)
  })
})
