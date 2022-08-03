import React, { useEffect, useState } from 'react'

type FormInput = {
    input: string,
    valid: boolean
}

interface ButtonProps {
    text: string
    email: FormInput,
    password: FormInput
}

const Button = ({text, email, password}: ButtonProps) => {
  return (
    <button className={`${(email.valid && password.valid) ? "bg-primary w-1/3 h-14 mx-auto text-xl rounded-md text-white shadow-sm shadow-primary-shadow focus:outline-primary-dark" : 
    "bg-primary-disabled w-1/3 h-14 mx-auto text-xl rounded-md text-white-80 shadow-sm shadow-primary-disabled-shadow"}`} disabled={!email.valid || !password.valid}
    >
        {text}
    </button>
  )
}

export default Button