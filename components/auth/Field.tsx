import React, { ChangeEventHandler, FormEvent, ReactText, useEffect, useState } from 'react'
import { IoIosCheckmarkCircle } from 'react-icons/Io'
import { FcCheckmark } from 'react-icons/Fc'
import { MdError } from 'react-icons/Md'
import axios from 'axios';

interface FieldProps {
    text: string,
    type: string,
    setter: Function
}

const Field = ({text, type, setter}: FieldProps) => {

  const [emailError, setEmailError] = useState({error: false, errorMsg: ''});
  const [passError, setPassError] = useState({error: false, errorMsg: 'Must be at least 8 characters and contain at least 1 digit, 1 uppercase letter, and 1 special character.'});
  
  const handleChange: ChangeEventHandler = (e: React.SyntheticEvent) => {
    const target = (e.target as HTMLInputElement);
    if (type === 'email'){
      if (target.value.length === 0){
        setEmailError({error: true, errorMsg: 'Email field cannot be empty.'})
      } else if (!target.checkValidity()) {
        setEmailError({error: true, errorMsg: 'Please enter a valid email.'})
      } else {
        setEmailError({error: false, errorMsg: ''});
      }
    } else if (type = 'password'){
        if (target.value.length === 0){
          setPassError({error: true, errorMsg: 'Password field cannot be empty.'})
        } else if (!target.checkValidity()) {
          setPassError({error: true, errorMsg: 'Must be at least 8 characters and contain at least 1 digit, 1 uppercase letter, and 1 special character.'})
        } else {
          setPassError({error: false, errorMsg: ''});
        }
    } 
    const valid = target.checkValidity();
    const obj = {
      input: target.value,
      valid: valid
    };
    setter(obj)
  }

  return (

    <div className='w-4/6 mx-auto flex flex-col relative'>
        <input id={`${type}-input`} required type={type} placeholder={text === 'Email Address' ? 'Email' : 'Password'} className=
        {(type === 'email' && !emailError.error) || (type ==='password' && !passError.error) ?
        'bg-white rounded-md h-14 border-4 border-white-300 w-full pl-3 focus:outline-none focus:border-focus peer valid:border-success' :
        'bg-white rounded-md h-14 border-4 border-white-300 w-full pl-3 focus:outline-none focus:border-focus invalid:border-error'} 
        {...(type === 'password' ? {pattern: "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"} : {})}
        onChange={handleChange}
        />
        
        <div className={(type === 'email' && !emailError.error && emailError.errorMsg === '') || (type ==='password' && !passError.error && passError.errorMsg === '') ? 'peer-focus:hidden peer-invalid:hidden peer-valid:visible absolute bottom-3.5 -right-10 text-success rounded-full z-10' : 'hidden'}><IoIosCheckmarkCircle size={25} /></div>
        {/* <div className={'peer-invalid:hidden peer-focus:hidden peer-valid:visible absolute bottom-3.5 -right-10 text-success rounded-full z-10'}><IoIosCheckmarkCircle size={25} /></div> */}
        <div className={(type === 'email' && !emailError.error && emailError.errorMsg === '') || (type ==='password' && !passError.error && passError.errorMsg === '') ? 'peer-invalid:hidden peer-focus:hidden peer-valid:visible w-4 h-4 absolute rounded-full bottom-5 -right-[2.2rem] bg-white' : 'hidden'}></div>
        <div className={(type === 'email' && emailError.error) || (type ==='password' && passError.error) ? 'peer-valid:hidden peer-focus:hidden peer-invalid:visible absolute bottom-3.5 -right-10 text-error rounded-full z-10' : 'hidden'}><MdError size={25} /></div>
        {type === 'email' ? <div className={emailError.error ? 'peer-focus:hidden absolute -bottom-7 left-0 text-error rounded-full z-10' : ' '}>{emailError.errorMsg}</div> :
        <div className={passError.error ? 'absolute md:-bottom-6 -bottom-10 left-0 text-xs text-error' : 'absolute md:-bottom-6 text-xs -bottom-10 left-0 text-white-80 peer-focus:text-white-80 peer-valid:text-success'}>{passError.errorMsg}</div>}
        <div className={(type === 'email' && emailError.error || type ==='password' && passError.error) ? 'peer-valid:hidden peer-invalid:visible peer-focus:hidden w-4 h-4 absolute rounded-full bottom-5 -right-[2.2rem] bg-white' : 'hidden'}></div>
        <h3 className='text-center mb-2 relative text-white text-lg font-normal before:content-[""] before:absolute before:w-1/4 before:h-[0.1px] before:rounded-md before:top-3.5 before:left-3 
        after:content-[""] after:absolute after:w-1/4 after:h-[0.1px] after:rounded-md after:top-3.5 after:right-3 after:bg-white peer-focus:text-focus peer-focus:before:bg-focus peer-focus:after:bg-focus
        before:bg-white order-first peer-invalid:text-error peer-invalid:before:bg-error peer-invalid:after:bg-error 
        peer-valid:text-success peer-valid:before:bg-success peer-valid:after:bg-success md:after:w-2/6 md:before:w-2/6'>
            {text}
        </h3>
    </div>
  )
}

export default Field