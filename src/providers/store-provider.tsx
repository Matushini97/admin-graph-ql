'use client'

import { store } from '@/store/store'
import type { ReactNode } from 'react'
import { Provider } from 'react-redux'

type Props = {
  children: ReactNode
}

export default function StoreProvider({ children }: Props) {
  return <Provider store={store}>{children}</Provider>
}
