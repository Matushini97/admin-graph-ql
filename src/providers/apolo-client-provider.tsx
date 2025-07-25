'use client'

import type { ReactNode } from 'react'

import { ApolloProvider } from '@apollo/client'
import apolloClient from '@/configs/apollo-client'

type Props = {
  children: ReactNode
}

export default function ApolloClientProvider({ children }: Props) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}
