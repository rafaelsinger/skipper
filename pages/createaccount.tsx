import React, { useState } from 'react'
import Header from '../components/auth/Header'
import { Formik, Form, Field, ErrorMessage, FormikProps } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import { MdError } from 'react-icons/Md'
import { IoIosCheckmarkCircle } from 'react-icons/Io'
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/config';
import axios from 'axios';
import dbConnect from '../lib/dbConnect';
import User from '../models/User';

const createaccount = () => {

    const registerUser = async (email: string, password: string) => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
        } catch (error: any) {
            const errorCode = error.code;
            const errorMessage = error.message;
        }
    }

    const addUserToDb = async (user: any) => {
        try {
            
        } catch (error) {
            
        }
        const res = await axios.post('http://localhost:3000/api/users/handler', {email: user.email, uid: user.uid})
        console.log(res.data);
    }

    YupPassword(Yup);

  return (
    <div className='h-screen bg-background'>
        <Header text='Create Your Account' />
        <div className='h-[calc(100vh)] pt-12 flex flex-col justify-center'>
            <Formik 
                initialValues={{email: '', password: ''}}
                validationSchema={Yup.object({
                    checkEmail: Yup.boolean(),
                    email: Yup.string()
                        .email('Invalid email address.')
                        .required('Required.')
                        .when("checkEmail", {
                            is: true,
                            then: Yup.string()
                            .test(
                                'checkEmail',
                                () => 'Account associated with this email already exists' as any,
                                    async (value: any, context: any): Promise<boolean | any> => {
                                        if (value) {
                                            try {
                                                // return value === 'deez123@gmail.com'
                                                await dbConnect();
                                                const userExist = await User.findOne({email: value});
                                                if (userExist){
                                                    return true;
                                                } else {
                                                    return false;
                                                }
                                            } catch (error) {
                                                console.log(error);
                                            }
                                    }
                                }
                            )
                        }),
                    password: Yup.string()
                        .required('Required.')    
                        .min(8, 'Password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special character.')
                        .minLowercase(1, 'Password must contain at least 1 lower case letter.')
                        .minUppercase(1, 'Password must contain at least 1 upper case letter.')
                        .minNumbers(1, 'Password must contain at least 1 number.')
                        .minSymbols(1, 'Password must contain at least 1 special character.')
                        
                })}
                onSubmit={(values, actions) => {
                    const { email, password } = values;
                    console.log(auth);
                    try{
                        registerUser(email, password);
                        onAuthStateChanged(auth, (user) => {
                            if (user) {
                                addUserToDb(user);
                            } else {
                                //user is signed out
                            }
                        })
                    } catch (error: any) {
                        console.log(error)
                    }
                }}
            >
                {(props: FormikProps<any>) => (
                <Form>
                    <div className='flex flex-col justify-center'>
                        <div className='relative flex flex-col w-4/6 mx-auto mb-10'>
                            <label htmlFor='email' className='text-center mb-2 relative text-white text-lg font-normal before:content-[""] before:absolute before:w-1/4 before:h-[0.1px] before:rounded-md before:top-3.5 before:left-3 
                            after:content-[""] after:absolute after:w-1/4 after:h-[0.1px] after:rounded-md after:top-3.5 after:right-3 after:bg-white before:bg-white'>Email Address</label>
                            <Field name='email' type='email' placeholder='Email' className='w-full pl-3 bg-white border-4 rounded-md h-14 border-white-300 focus:outline-none focus:border-focus'
                                onBlur={(e: any) => {
                                    props.handleBlur(e);
                                    if (!props.errors.email) {
                                      props.setValues({
                                        ...props.values,
                                        checkEmail: true,
                                       })
                                      }
                                    }
                                }/>
                            <ErrorMessage name='email' component='div'>
                                {(msg) => 
                                    <div className='relative'>
                                        <div className='mt-1 text-sm text-left text-error'>{msg}</div>
                                        <div className='absolute z-10 rounded-full -top-10 -right-10 text-error'>
                                            <MdError size={25} />
                                        </div>
                                    </div>
                                }
                            </ErrorMessage>
                            <div className={props.touched.email ? 'w-4 h-4 absolute rounded-full top-14 -right-[2.2rem] bg-white' : 'hidden'}></div>
                            <div className={(!props.errors.email && props.touched.email) ? 'absolute bottom-3.5 -right-10 text-success rounded-full z-10' : 'hidden'}><IoIosCheckmarkCircle size={25} /></div>
                        </div>

                        <div className='relative flex flex-col w-4/6 mx-auto mb-10'>
                            <label htmlFor='password' className='text-center mb-2 relative text-white text-lg font-normal before:content-[""] before:absolute before:w-1/4 before:h-[0.1px] before:rounded-md before:top-3.5 before:left-3 
                            after:content-[""] after:absolute after:w-1/4 after:h-[0.1px] after:rounded-md after:top-3.5 after:right-3 after:bg-white before:bg-white'>Password</label>
                            <Field name='password' type='password' placeholder='Password' className='w-full pl-3 bg-white border-4 rounded-md h-14 border-white-300 focus:outline-none focus:border-focus' />
                            <ErrorMessage name='password' component='div'>
                                {(msg) => 
                                    <div className='relative'>
                                        <div className='mt-1 text-sm text-left text-error'>{msg}</div>
                                        <div className='absolute z-10 rounded-full -top-10 -right-10 text-error'>
                                            <MdError size={25} />
                                        </div>
                                    </div>
                                }
                            </ErrorMessage>
                            <div className={props.touched.password ? 'w-4 h-4 absolute rounded-full top-14 -right-[2.2rem] bg-white' : 'hidden'}></div>
                            <div className={(!props.errors.password && props.touched.password) ? 'absolute bottom-3.5 -right-10 text-success rounded-full z-10' : 'hidden'}><IoIosCheckmarkCircle size={25} /></div>
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