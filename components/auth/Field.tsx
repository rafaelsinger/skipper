import React, { ChangeEventHandler, FormEvent, ReactText, useEffect } from 'react'
import { IoIosCheckmarkCircle } from 'react-icons/Io'
import { FcCheckmark } from 'react-icons/Fc'
import { MdError } from 'react-icons/Md'

interface FieldProps {
    text: string,
    type: string,
    setter: Function
}

const Field = ({text, type, setter}: FieldProps) => {

  const handleChange: ChangeEventHandler = (e: React.SyntheticEvent) => {
    const target = (e.target as HTMLInputElement);
    const valid = target.checkValidity();
    const obj = {
      input: target.value,
      valid: valid
    };
    setter(obj)
  } 

  return (

    <div className='w-4/6 mx-auto flex flex-col relative'>
        <input id={`${type}-input`} type={type} required placeholder={text === 'Email Address' ? 'Email' : 'Password'} className='bg-white rounded-md h-14 border-4 border-white-300 w-full pl-3 focus:outline-none focus:border-focus invalid:border-error peer
        valid:border-success' 
        onChange={handleChange}
        />
        <div className='peer-invalid:hidden peer-focus:hidden peer-valid:visible absolute bottom-3.5 -right-10 text-success rounded-full z-10'><IoIosCheckmarkCircle size={25} /></div>
        <div className='peer-invalid:hidden peer-focus:hidden peer-valid:visible w-4 h-4 absolute rounded-full bottom-5 -right-[2.2rem] bg-white'></div>
        <div className='peer-valid:hidden peer-focus:hidden peer-invalid:visible absolute bottom-3.5 -right-10 text-error rounded-full z-10'><MdError size={25} /></div>
        {type === 'email' ? <div className='peer-valid:hidden peer-focus:hidden peer-invalid:visible absolute -bottom-7 left-0 text-error rounded-full z-10'>Enter a valid email.</div> :
        <div className='absolute -bottom-12 md:-bottom-8 left-0 text-white-80 text-sm peer-invalid:text-error peer-valid:text-success peer-focus:text-white-80'>Must be at least 8 characters and contain at least 1 number and 1 special character.</div>}
        <div className='peer-valid:hidden peer-focus:hidden peer-invalid:visible w-4 h-4 absolute rounded-full bottom-5 -right-[2.2rem] bg-white'></div>
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