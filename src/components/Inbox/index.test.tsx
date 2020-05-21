/* eslint-env jest */
import '@testing-library/jest-dom'

import React from 'react'

import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { MockedProvider } from '@apollo/react-testing'
import { InboxPage, GET_INBOX_QUERY } from '~components/Inbox'
import { FACTORIES } from '~test/factories'
import { QueryMock } from '~test/factories/QueryMock'

describe('InboxPage', () => {
  it('renders', async () => {
    const inboxMock = QueryMock(GET_INBOX_QUERY, {
      inbox: [
        FACTORIES.Task(),
        FACTORIES.Task({ title: 'Task 2' })
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
})
