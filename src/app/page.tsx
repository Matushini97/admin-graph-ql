import UsersTable from '@/components/users-table/users-table'

export type FormType = { email: string; password: string }

export default function Users() {
  return <UsersTable />
}
