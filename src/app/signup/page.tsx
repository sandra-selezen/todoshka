import { SignUpForm } from '@/components'
import React from 'react'

const SignupPage = () => {
  return (
    <div className='form__container'>
      <h1 className='page-title'>Create your account</h1>
      <SignUpForm />
    </div>
  )
}

export default SignupPage