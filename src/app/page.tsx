'use client'

import { useLoginAdminMutation } from '@/api/mutations/login-admin.generated'
import { Input, Button } from '@vibe-samurai/visual-ui-kit'
import { useForm } from 'react-hook-form'

export type FormType = { email: string; password: string }

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { isValid },
    trigger,
  } = useForm<FormType>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onTouched',
  })

  const [loginAdmin, { loading: isLoading }] = useLoginAdminMutation()

  const onSubmit = async (formData: FormType) => {
    try {
      const res = await loginAdmin({
        variables: {
          email: formData.email,
          password: formData.password,
        },
      })

      if (res.data?.loginAdmin.logged) {
        const basicToken = btoa(`${formData.email}:${formData.password}`)

        localStorage.setItem('basicToken', basicToken)
      } else {
        console.warn('not logged in')
      }
    } catch (err) {
      console.error(err)
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type={'email'}
        label={'Email'}
        placeholder={'Email'}
        {...register('email')}
        onBlur={async () => {
          await trigger('email')
        }}
      />

      <Input
        type={'password'}
        label={'Password'}
        placeholder={'********'}
        {...register('password')}
        onBlur={async () => {
          await trigger('password')
        }}
      />

      <Button variant={'primary'} fullWidth type={'submit'} disabled={!isValid}>
        Sign In
      </Button>
    </form>
  )
}
