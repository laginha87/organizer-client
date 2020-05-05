import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from '~components/App'

const client = new ApolloClient({
  cache: new InMemoryCache({
  }),
  uri: `${process.env.API_HOST}/graphql`
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
