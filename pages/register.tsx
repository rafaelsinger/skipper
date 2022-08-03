import React from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/config'
import Field from '../components/auth/Field';
import Header from '../components/auth/Header';
import ThirdParty from '../components/auth/ThirdParty';
import Link from 'next/link';


const register = () => {

    const email = 'test123@gmail.com';
    const password = 'pass123'

    const registerUser = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
        } catch (error: any) {
            const errorCode = error.code;
            const errorMessage = error.message;
        }
    }

    return (
        <div className='bg-background h-screen'>
            <Header text='Create Your Account' />
            <div className='h-[calc(100vh)] pt-20 flex flex-col justify-center'>
                <div className='peer-focus:hidden'>
                    <ThirdParty platform="Apple" action='SignUp' href='#' />
                    <ThirdParty platform="Google" action='SignUp' href='#' />
                </div>
                <div className='text-3xl text-white text-center'> or </div>
                <div className='my-8'>
                    <Link href='/createaccount'>
                        <ThirdParty platform='Email/Password' action='SignUp' href='createaccount' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default register