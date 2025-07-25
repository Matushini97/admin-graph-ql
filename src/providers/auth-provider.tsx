'use client'

import { usePathname, useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'

import { useAppDispatch } from '@/store/store'
import { BASIC_TOKEN } from '@/constants/token'
import { ROUTES } from '@/constants/sidebar-options'
import { setAuth } from '@/redux/slices/auth-slice'

type Props = {
  children: ReactNode
}

export function AuthProvider({ children }: Props) {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const token = localStorage.getItem(BASIC_TOKEN)

    if (token) {
      dispatch(setAuth(true))
    } else {
      dispatch(setAuth(false))
      if (pathname !== ROUTES.auth) {
        router.push(ROUTES.auth)
      }
    }
  }, [router, pathname, dispatch])

  return children
}
