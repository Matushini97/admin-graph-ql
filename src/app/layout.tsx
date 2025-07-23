import { Metadata } from 'next'

import './globals.scss'

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
      <body>{children}</body>
    </html>
  )
}
