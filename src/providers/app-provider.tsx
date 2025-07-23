'use client'

import React from 'react'

import s from './app-provider.module.scss'
import ApolloClientProvider from './apolo-client-provider'
import StoreProvider from './store-provider'

export default function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <div className={s.container}>
      <ApolloClientProvider>
        <StoreProvider>{children}</StoreProvider>
      </ApolloClientProvider>
    </div>
  )
}
