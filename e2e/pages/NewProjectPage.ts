import { Page } from './Page'
import { SelectInput, TextInput } from '../inputs'

class NewProject extends Page {
  ickynessSelect = SelectInput('ickyness')
  dificultySelect = SelectInput('dificulty')
  durationSelect = SelectInput('duration')
  prioritySelect = SelectInput('priority')
  nameInput = TextInput('name')
  descriptionInput = TextInput('description')
}

export const NewProjectPage = new NewProject('/projects/new')
