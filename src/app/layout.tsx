import { Metadata } from 'next'

import './globals.scss'
import AppProvider from '@/providers/app-provider'
import { MainHeader } from '@/components/main-header/main-header'
import { SideNavBar } from '@/components/side-nav-bar/side-nav-bar'

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
        <AppProvider>
          <MainHeader />
          <SideNavBar />
          <div className="content">{children}</div>
        </AppProvider>
      </body>
    </html>
  )
}
