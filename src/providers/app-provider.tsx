'use client'

import React from 'react'

import s from './app-provider.module.scss'
import ApolloClientProvider from './apolo-client-provider'
import StoreProvider from './store-provider'
import { AuthProvider } from './auth-provider'

export default function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <div className={s.container}>
      <ApolloClientProvider>
        <StoreProvider>
          <AuthProvider>{children}</AuthProvider>
        </StoreProvider>
      </ApolloClientProvider>
    </div>
  )
}
