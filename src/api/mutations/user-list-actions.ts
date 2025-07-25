import { gql } from '@apollo/client'

export const BAN_USER = gql`
  mutation BanUser($userId: Int!, $banReason: String!) {
    banUser(userId: $userId, banReason: $banReason)
  }
`

export const UNBAN_USER = gql`
  mutation UnbanUser($userId: Int!) {
    unbanUser(userId: $userId)
  }
`

export const REMOVE_USER = gql`
  mutation RemoveUser($userId: Int!) {
    removeUser(userId: $userId)
  }
`
