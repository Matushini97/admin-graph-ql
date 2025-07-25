'use client'

import { Header } from '@vibe-samurai/visual-ui-kit'

import s from './main-header.module.scss'
import { useCallback, useState } from 'react'

const LOCALES = Object.freeze({
  EN: 'en',
  RU: 'ru',
})

type Locale = (typeof LOCALES)[keyof typeof LOCALES]

export const MainHeader = () => {
  const [locale, setLocale] = useState<Locale>(LOCALES.EN)

  const handleLocaleChange = useCallback((lang: Locale) => {
    setLocale(lang)
  }, [])

  return (
    <div className={s.wrapper}>
      <div className={s.headerContent}>
        <Header locale={locale} onLocaleChange={handleLocaleChange} isAuth />
      </div>
    </div>
  )
}
