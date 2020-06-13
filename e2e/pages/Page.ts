
export class Page {
  path: string
  constructor (path) {
    this.path = path
  }

  async visit () {
    await page.goto((global as any).URL + this.path)
  }
}
