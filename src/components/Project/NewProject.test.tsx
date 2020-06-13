
import NewProject from '~components/Project/NewProject'
import { screen, render, act, fireEvent } from '@testing-library/react'
import { FACTORIES } from '~test/factories'
import { MockedProvider } from '@apollo/react-testing'
import CREATE_PROJECT_MUTATION from './CreateProjectMutation.graphql'

const getInputElement = (name) => screen.getByTestId(`input-${name}`)

const ALL_MOCKS = [
  FACTORIES.Enums.Dificulty,
  FACTORIES.Enums.Duration,
  FACTORIES.Enums.Ickyness,
  FACTORIES.Enums.Priority
]

describe(NewProject, () => {
  it('renders the form fields', async () => {
    await act(async () => {
      render(
        <MockedProvider mocks={ALL_MOCKS}>
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

  it('Submits the form', async () => {
    const project = {
      id: 1,
      name: 'New Project',
      description: 'Project description',
      defaultIckyness: 'chicken',
      defaultDificulty: 'hard',
      defaultPriority: 'high',
      defaultDuration: 'long'
    }
    let called = false

    const mocks = [
      {
        request: {
          query: CREATE_PROJECT_MUTATION,
          variables: {
            input: {
              project: {
                name: 'New Project',
                description: 'Project description',
                ickyness: 'chicken',
                dificulty: 'hard',
                priority: 'high',
                duration: 'long'
              }
            }
          }
        },
        result: () => {
          called = true
          return { data: { project } }
        }
      },
      ...ALL_MOCKS
    ]

    await act(async () => {
      render(
        <MockedProvider mocks={mocks}>
          <NewProject />
        </MockedProvider>
      )
      await new Promise(resolve => setTimeout(resolve))

      fireEvent.change(getInputElement('name'), { target: { value: 'New Project' } })
      fireEvent.change(getInputElement('description'), { target: { value: 'Project description' } })
      fireEvent.change(getInputElement('ickyness'), { target: { value: 'chicken' } })
      fireEvent.change(getInputElement('dificulty'), { target: { value: 'hard' } })
      fireEvent.change(getInputElement('priority'), { target: { value: 'high' } })
      fireEvent.change(getInputElement('duration'), { target: { value: 'long' } })

      screen.getByTestId('submit').click()
    })

    expect(called).toBe(true)
  })
})
