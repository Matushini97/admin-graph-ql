import { AuthPage } from '@/components/auth-page/auth-page'

export type FormType = { email: string; password: string }

export default function Auth() {
  return <AuthPage />
}
