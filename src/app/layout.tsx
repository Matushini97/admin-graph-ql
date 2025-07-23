import { Metadata } from 'next'

import './globals.scss'
import AppProvider from '@/providers/app-provider'

export const metadata: Metadata = {
  title: 'Admin Panel GraphQL',
  description: 'Admin Panel Next App',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
