/* eslint-env jest */
import React from 'react'
import renderer, { act } from 'react-test-renderer'
import { MockedProvider } from '@apollo/react-testing'
import { MemoryRouter } from 'react-router-dom'
import { App } from '~components/App'

describe('App', () => {
  it('renders', () => {
    act(() => {
      renderer.create(<App RouterProvider={MemoryRouter} ApolloProvider={MockedProvider} />)
    }
    )
  })
})
