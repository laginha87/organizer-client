import React from 'react'
import { Routes } from '~components/App/Routes'

export const App = ({ ApolloProvider, RouterProvider }) => {
  return (
    <ApolloProvider>
      <RouterProvider>
        <Routes />
      </RouterProvider>
    </ApolloProvider>
  )
}
