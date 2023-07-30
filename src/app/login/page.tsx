import { LoginForm } from '@/components'
import React from 'react'
import styles from '@/styles'

const LoginPage = () => {
  return (
    <div className={`${styles.formContainer}`}>
      <h1 className={`${styles.pageTitle}`}>Log in to your account</h1>
      <LoginForm />
    </div>
  )
}

export default LoginPage