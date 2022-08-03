import React, { useState } from 'react'
import Header from '../components/auth/Header'
import Field from '../components/auth/Field'
import Button from '../components/auth/Button'

const createaccount = () => {

    type FormInput = {
        input: string,
        valid: boolean
    }

    const [email, setEmail] = useState<FormInput>({input: '', valid: false});
    const [password, setPassword] = useState<FormInput>({input: '', valid: false});

  return (
    <div className='bg-background h-screen'>
        <Header text='Create Your Account' />
        <div className='h-[calc(100vh)] pt-12 flex flex-col justify-center'>
            <div className='mb-10'>
                <Field text='Email Address' type='email' setter={setEmail} />
            </div>
            <div className='mb-14'>
                <Field text='Password' type='password' setter={setPassword} />\
            </div>
            <Button text='Sign Up' email={email} password={password} />
        </div>
    </div>
  )
}

export default createaccount