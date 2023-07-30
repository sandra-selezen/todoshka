import { SignUpForm } from '@/components'
import React from 'react'
import styles from '@/styles'

const SignupPage = () => {
  return (
    <div className={`${styles.formContainer}`}>
      <h1 className={`${styles.pageTitle}`}>Create your account</h1>
      <SignUpForm />
    </div>
  )
}

export default SignupPage