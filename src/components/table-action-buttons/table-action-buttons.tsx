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

  const banHandler = () => {
    banUser({ variables: { userId: id, banReason: BAN_REASON }, refetchQueries: REFETCH_DATA })
  }
  const unbanHandler = () => {
    unbanUser({ variables: { userId: id }, refetchQueries: REFETCH_DATA })
  }
  const removeHandler = () => {
    removeUser({ variables: { userId: id }, refetchQueries: REFETCH_DATA })
  }

  return (
    <div className={s.buttons}>
      <Button variant="secondary" onClick={removeHandler}>
        <PersonRemoveIcon />
      </Button>
      {userBan ? (
        <Button variant="secondary" onClick={unbanHandler}>
          <UnBlockIcon />
        </Button>
      ) : (
        <Button variant="secondary" onClick={banHandler}>
          <BlockIcon />
        </Button>
      )}
    </div>
  )
}
