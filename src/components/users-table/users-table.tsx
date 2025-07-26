'use client'

import { useGetUsersQuery } from '@/api/queries/user-list.generated'
import { Loader, Table, TableHeader } from '@vibe-samurai/visual-ui-kit'
import React, { useState } from 'react'

import { COLUMNS } from '@/constants/table-columns'
import { TableActionButtons } from '@/components/table-action-buttons/table-action-buttons'
import BlockIcon from '@public/icons/BlockIcon'
import { SearchInput } from '../search-input.tsx/search-input'

import s from './users-table.module.scss'

export default function UsersTable() {
  const [searchTerm, setSearchTerm] = useState('')
  const { data, loading } = useGetUsersQuery({
    variables: { searchTerm },
  })

  const usersList = data?.getUsers.users

  return (
    <div className={s.wrapper}>
      {loading && <Loader />}
      <SearchInput setValue={setSearchTerm} />
      <Table.Root>
        <TableHeader columns={COLUMNS} />
        <Table.Body>
          {usersList?.map(({ id, createdAt, profile, userName, userBan }) => (
            <Table.Row key={id}>
              <Table.Cell>
                {userBan ? <BlockIcon /> : ''}
                {id}
              </Table.Cell>
              <Table.Cell>{userName}</Table.Cell>
              <Table.Cell>
                {profile.firstName} {profile.lastName}
              </Table.Cell>
              <Table.Cell>{new Date(createdAt).toUTCString()}</Table.Cell>
              <Table.Cell>
                <TableActionButtons id={id} userBan={Boolean(userBan)} userName={userName} />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}
