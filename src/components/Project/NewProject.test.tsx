
import NewProject from '~components/Project/NewProject'
import { screen, render, act } from '@testing-library/react'
import { FACTORIES } from '~test/factories'
import { MockedProvider } from '@apollo/react-testing'

const getInputElement = (name) => screen.getByTestId(`input-${name}`)

const mocks = [
  FACTORIES.Enums.Dificulty,
  FACTORIES.Enums.Duration,
  FACTORIES.Enums.Ickyness,
  FACTORIES.Enums.Priority
]

describe(NewProject, () => {
  it('renders the form fields', async () => {
    await act(async () => {
      render(
        <MockedProvider mocks={mocks}>
          <NewProject />
        </MockedProvider>
      )
      await new Promise(resolve => setTimeout(resolve))
    }
    )

    const title = await screen.findByText('New Project')
    expect(title).toBeInTheDocument()

    expect(getInputElement('name')).toBeInTheDocument()
    expect(getInputElement('description')).toBeInTheDocument()
    expect(getInputElement('ickyness')).toBeInTheDocument()
    expect(getInputElement('dificulty')).toBeInTheDocument()
    expect(getInputElement('priority')).toBeInTheDocument()
    expect(getInputElement('duration')).toBeInTheDocument()
  })
})
