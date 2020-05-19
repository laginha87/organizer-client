/* eslint-env jest */
import React from 'react'
import { App } from './index'
import renderer from 'react-test-renderer'

describe('App', () => {
  it('renders', () => {
    renderer.create(<App />)
  })
})
