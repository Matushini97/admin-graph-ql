import { Input, SearchIcon } from '@vibe-samurai/visual-ui-kit'
import React, { useEffect, useState } from 'react'

import { useDebounceCallback } from '@siberiacancode/reactuse'
import s from './search-input.module.scss'

type Props = {
  setValue: (value: string) => void
}

export const SearchInput = ({ setValue }: Props) => {
  const [searchInput, setSearchInput] = useState('')
  const debouncedCallback = useDebounceCallback((input: string) => setValue(input), 500)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

  useEffect(() => {
    debouncedCallback(searchInput)
  }, [debouncedCallback, searchInput])

  return (
    <div className={`${s.wrapper}`}>
      <SearchIcon className={s.icon} />
      <Input
        type={'text'}
        placeholder={'Search'}
        className={s.input}
        value={searchInput}
        onChange={e => onChange(e)}
      />
    </div>
  )
}
