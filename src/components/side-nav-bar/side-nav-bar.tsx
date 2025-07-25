'use client'

import { LogOutIcon, Sidebar, SidebarItem } from '@vibe-samurai/visual-ui-kit'
import Link from 'next/link'

import s from './side-nav-bar.module.scss'
import { sidebarOptions } from '@/constants/sidebar-options'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { isAuthenticatedSelector, setAuth } from '@/redux/slices/auth-slice'
import { BASIC_TOKEN } from '@/constants/token'
import { useCallback } from 'react'

export const SideNavBar = () => {
  const dispatch = useAppDispatch()
  const isAuthenticated = useAppSelector(isAuthenticatedSelector)

  const logoutHandler = useCallback(() => {
    localStorage.removeItem(BASIC_TOKEN)
    dispatch(setAuth(false))
  }, [dispatch])

  if (!isAuthenticated) {
    return null
  }

  return (
    <>
      <aside className={s.wrapper}>
        <nav>
          <Sidebar style={{ backgroundColor: '#000000FF' }}>
            {sidebarOptions.map((option, index) => (
              <SidebarItem
                key={index}
                {...option}
                LinkComponent={({ href, className, children }) => (
                  <Link
                    href={href || '#'}
                    className={className}
                    onClick={() => {
                      console.log(option)
                    }}
                  >
                    {children}
                  </Link>
                )}
              />
            ))}
            <SidebarItem
              icon={LogOutIcon}
              title={'Log Out'}
              url=""
              LinkComponent={({ className, children }) => (
                <Link href={''} className={className} onClick={logoutHandler}>
                  {children}
                </Link>
              )}
            />
          </Sidebar>
        </nav>
      </aside>
    </>
  )
}
