import BlockIcon from '@public/icons/BlockIcon'
import PersonRemoveIcon from '@public/icons/PersonRemoveIcon'
import UnBlockIcon from '@public/icons/UnBlockIcon'
import { Button } from '@vibe-samurai/visual-ui-kit'
import React from 'react'

import s from './table-action-buttons.module.scss'
import {
  useBanUserMutation,
  useRemoveUserMutation,
  useUnbanUserMutation,
} from '@/api/mutations/user-list-actions.generated'

type Props = {
  id: number
  userBan: boolean
  userName: string
}

const BAN_REASON = 'Bad behaviour'
const REFETCH_DATA = ['GetUsers']

export const TableActionButtons = ({ id, userBan }: Props) => {
  const [banUser] = useBanUserMutation()
  const [unbanUser] = useUnbanUserMutation()
  const [removeUser] = useRemoveUserMutation()

  const defaultVars = { userId: id }
  const defaultMutationOptions = { variables: defaultVars, refetchQueries: REFETCH_DATA }

  const banHandler = () => {
    banUser({ variables: { ...defaultVars, banReason: BAN_REASON }, refetchQueries: REFETCH_DATA })
  }
  const unbanHandler = () => {
    unbanUser(defaultMutationOptions)
  }
  const removeHandler = () => {
    removeUser(defaultMutationOptions)
  }

  return (
    <div className={s.buttons}>
      <Button variant="secondary" onClick={removeHandler} title={'Удалить пользователя'}>
        <PersonRemoveIcon />
      </Button>
      {userBan ? (
        <Button variant="secondary" onClick={unbanHandler} title={'Разблокировать'}>
          <UnBlockIcon />
        </Button>
      ) : (
        <Button variant="secondary" onClick={banHandler} title={'Заблокировать'}>
          <BlockIcon />
        </Button>
      )}
    </div>
  )
}
