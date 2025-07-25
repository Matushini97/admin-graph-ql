'use client'

import { useGetUsersQuery } from '@/api/queries/user-list.generated'
import { Loader, Typography } from '@vibe-samurai/visual-ui-kit'
import React from 'react'

import s from './users-page.module.scss'

export default function Users() {
  const { data, loading } = useGetUsersQuery()

  const usersList = data?.getUsers.users

  if (loading) {
    return <Loader />
  }

  return (
    <ul>
      {usersList?.map(({ userName, id, email }) => {
        return (
          <li key={id}>
            <div className={s.userListItem}>
              <Typography>{id}</Typography>
              <Typography>{userName}</Typography>
              <Typography>{email}</Typography>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
