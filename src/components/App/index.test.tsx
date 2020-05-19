/* eslint-env jest */
import React from 'react'
import { MockedProvider } from '@apollo/react-testing'

import renderer from 'react-test-renderer'
import { Routes } from '~components/App/Routes'
import { BrowserRouter } from 'react-router-dom'

describe('App', () => {
  it('renders', () => {
    renderer.create(
      <MockedProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </MockedProvider>)
  })
})
