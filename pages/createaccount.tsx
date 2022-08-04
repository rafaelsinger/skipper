import React, { useState } from 'react'
import Header from '../components/auth/Header'
import { Formik, Form, Field, ErrorMessage, FormikProps } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import { MdError } from 'react-icons/Md'
import { IoIosCheckmarkCircle } from 'react-icons/Io'

const createaccount = () => {

    YupPassword(Yup);

  return (
    <div className='bg-background h-screen'>
        <Header text='Create Your Account' />
        <div className='h-[calc(100vh)] pt-12 flex flex-col justify-center'>
            <Formik 
                initialValues={{email: '', password: ''}}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email('Invalid email address.')
                        .required('Required.'),
                    password: Yup.string()
                        .required('Required.')    
                        .min(8, 'Password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special character.')
                        .minLowercase(1, 'Password must contain at least 1 lower case letter.')
                        .minUppercase(1, 'Password must contain at least 1 upper case letter.')
                        .minNumbers(1, 'Password must contain at least 1 number.')
                        .minSymbols(1, 'Password must contain at least 1 special character.')
                        
                })}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                    }, 1000)
                }}
            >
                {(props: FormikProps<any>) => (
                <Form>
                    <div className='flex flex-col justify-center'>
                        <div className='w-4/6 mx-auto flex flex-col relative mb-10'>
                            <label htmlFor='email' className='text-center mb-2 relative text-white text-lg font-normal before:content-[""] before:absolute before:w-1/4 before:h-[0.1px] before:rounded-md before:top-3.5 before:left-3 
                            after:content-[""] after:absolute after:w-1/4 after:h-[0.1px] after:rounded-md after:top-3.5 after:right-3 after:bg-white before:bg-white'>Email Address</label>
                            <Field name='email' type='email' placeholder='Email' className='bg-white rounded-md h-14 border-4 border-white-300 w-full pl-3 focus:outline-none focus:border-focus'/>
                            <ErrorMessage name='email' component='div'>
                                {(msg) => 
                                    <div className='relative'>
                                        <div className='mt-1 text-left text-sm text-error'>{msg}</div>
                                        <div className='absolute -top-10 -right-10 text-error rounded-full z-10'>
                                            <MdError size={25} />
                                        </div>
                                    </div>
                                }
                            </ErrorMessage>
                            <div className={(!props.errors && props.touched.email) ? 'absolute bottom-3.5 -right-10 text-success rounded-full z-10' : 'hidden'}></div>
                                {/* <IoIosCheckmarkCircle size={25} />
                            </div> */}
                        </div>

                        <div className='w-4/6 mx-auto flex flex-col relative mb-10'>
                            <label htmlFor='password' className='text-center mb-2 relative text-white text-lg font-normal before:content-[""] before:absolute before:w-1/4 before:h-[0.1px] before:rounded-md before:top-3.5 before:left-3 
                            after:content-[""] after:absolute after:w-1/4 after:h-[0.1px] after:rounded-md after:top-3.5 after:right-3 after:bg-white before:bg-white'>Password</label>
                            <Field name='password' type='password' placeholder='Password' className='bg-white rounded-md h-14 border-4 border-white-300 w-full pl-3 focus:outline-none focus:border-focus' />
                            <ErrorMessage name='password' component='div'>
                                {(msg) => 
                                    <div className='relative'>
                                        <div className='mt-1 text-left text-sm text-error'>{msg}</div>
                                        <div className='absolute -top-10 -right-10 text-error rounded-full z-10'>
                                            <MdError size={25} />
                                        </div>
                                    </div>
                                }
                            </ErrorMessage>
                        </div>

                        <button type='submit' className={props.dirty && props.isValid ? 'bg-primary w-1/3 h-14 mx-auto text-xl rounded-md text-white shadow-sm shadow-primary-shadow focus:outline-primary-dark' : 
                        'bg-primary-disabled opacity-50 w-1/3 h-14 mx-auto text-xl rounded-md text-white-80 shadow-sm shadow-primary-disabled-shadow'}>Submit</button>                      
                    </div>
                </Form>
                )}
            </Formik>
        </div>
    </div>
  )
}

export default createaccount