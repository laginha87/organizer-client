
import { Pages } from './pages'

describe('Inbox', () => {
  beforeAll(async () => {
    await Pages.Inbox.visit()
  })

  it('should display "inbox" text on page', async () => {
    await expect(page).toMatch('Inbox')
    await (global as any).snapshot('Inbox')
  })
})
