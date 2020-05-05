import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from '~components/App/Routes'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}
