/* eslint-env jest */
import '@testing-library/jest-dom'

import React from 'react'

import { render, screen, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { MockedProvider } from '@apollo/react-testing'
import { InboxPage, GET_INBOX_QUERY } from '~components/Inbox'
import { FACTORIES } from '~test/factories'
import { QueryMock } from '~test/factories/QueryMock'

describe('InboxPage', () => {
  const inboxMock = QueryMock(GET_INBOX_QUERY, {
    inbox: [
      FACTORIES.Task({ ickyness: 'chicken' }),
      FACTORIES.Task({ title: 'Task 2', dificulty: 'hard', ickyness: 'chicken' })
    ],
    projects: [
    ]
  })

  const mocks = [
    inboxMock,
    FACTORIES.Enums.Dificulty,
    FACTORIES.Enums.Duration,
    FACTORIES.Enums.Ickyness,
    FACTORIES.Enums.Priority
  ]

  it('renders', async () => {
    await act(async () => {
      render(
        <MockedProvider mocks={mocks}>
          <InboxPage />
        </MockedProvider>)
      await new Promise(resolve => setTimeout(resolve))
    })

    expect(screen.queryByText('Title')).toBeInTheDocument()
    expect(screen.queryByText('Task 2')).toBeInTheDocument()
  })

  it('shows up same dificulty in bottom bar when 2 tasks are selected', async () => {
    await act(async () => {
      render(
        <MockedProvider mocks={mocks}>
          <InboxPage />
        </MockedProvider>)
      await new Promise(resolve => setTimeout(resolve))
    })

    const tasks = screen.queryAllByTestId('task-details')
    fireEvent.mouseDown(tasks[0])
    fireEvent.mouseDown(tasks[1], { metaKey: true })

    const ickynessSelect = screen.queryByTestId('select-ickyness')
    const dificultySelect = screen.queryByTestId('select-dificulty')
    expect(ickynessSelect!.querySelector('select')!.value).toBe('chicken')
    expect(dificultySelect!.querySelector('select')!.value).toBe('')
  })
})
