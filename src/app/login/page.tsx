import { LoginForm } from '@/components'
import React from 'react'
import styles from '@/styles'

const LoginPage = () => {
  return (
    <div className='form__container'>
      <h1 className='page-title'>Log in to your account</h1>
      <LoginForm />
    </div>
  )
}

export default LoginPage