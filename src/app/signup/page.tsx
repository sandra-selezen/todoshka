import { SignUpForm } from '@/components'
import React from 'react'
import styles from '@/styles'

const SignupPage = () => {
  return (
    <div className='flex flex-col py-20 items-center'>
      <h1 className='mb-6 font-bold text-3xl'>Create your account</h1>
      <SignUpForm />
    </div>
  )
}

export default SignupPage