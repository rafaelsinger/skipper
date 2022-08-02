import React from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/config'
import Field from '../components/auth/Field';
import Header from '../components/auth/Header';
import ThirdParty from '../components/auth/ThirdParty';

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
        <>
            <Header text='Create Your Account' />
            <div className='container'>
                <ThirdParty />
                <ThirdParty />
                <Field />
            </div>
        </>
    )
}

export default register