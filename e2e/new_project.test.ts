
import { Pages } from './pages'

describe('New Project', () => {
  beforeAll(async () => {
    await Pages.NewProject.visit()
  })

  it('can create a project', async () => {
    await Pages.NewProject.nameInput('New Project')
    await Pages.NewProject.descriptionInput('Description')

    await Pages.NewProject.dificultySelect('hard')
    await Pages.NewProject.durationSelect('long')
    await Pages.NewProject.ickynessSelect('tepid')
    await Pages.NewProject.prioritySelect('high')

    await (global as any).snapshot('New Project')
  })
})
