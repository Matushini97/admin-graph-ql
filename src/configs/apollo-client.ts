import { BASIC_TOKEN } from '@/constants/token'
import { ApolloClient, createHttpLink, InMemoryCache, split } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from '@apollo/client/utilities'
import { createClient } from 'graphql-ws'

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_BASE_URL,
})

const authLink = setContext((_, { headers }) => {
  const basicToken = localStorage.getItem(BASIC_TOKEN)

  return {
    headers: {
      ...headers,
      Authorization: `Basic ${basicToken}`,
    },
  }
})

const wsLink = new GraphQLWsLink(
  createClient({
    url: 'wss://inctagram.work/api/v1/graphql',
    connectionParams: () => {
      const basicToken = localStorage.getItem(BASIC_TOKEN)

      return {
        Authorization: `Basic ${basicToken}`,
      }
    },
  })
)

const splitLink = split(
  ({ query }) => {
    const def = getMainDefinition(query)

    return def.kind === 'OperationDefinition' && def.operation === 'subscription'
  },
  wsLink,
  authLink.concat(httpLink)
)

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
})

export default client
