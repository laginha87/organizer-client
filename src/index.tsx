import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from '~components/App'
import { BrowserRouter } from 'react-router-dom'

window.React = React

const client = new ApolloClient({
  cache: new InMemoryCache({
  }),
  uri: `${process.env.API_HOST}/graphql`
})

ReactDOM.render(
  <App ApolloProvider={({ children }) => <ApolloProvider client={client}>{children}</ApolloProvider>} RouterProvider={BrowserRouter} />,
  document.getElementById('root')
)
