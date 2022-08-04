import React, { useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase/config';
import { useRouter } from 'next/router'
import User from '../../models/User'
import { FormInput } from '../../types';
import axios from 'axios';

interface ButtonProps {
    text: string
    email: FormInput,
    password: FormInput
}

const registerUser = async (email: string, password: string) => {
    try {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        console.log(user);
    } catch (error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
    }
}

const addUser = async (user: any) => {
    const res = await axios.post('http://localhost:3000/api/users/handler', {data: {email: user.email, uid: user.uid} })
    console.log(res.data);
}

const Button = ({text, email, password}: ButtonProps) => {
    const router = useRouter();
    const handleClick = () => {
        //if user is creating an account
        registerUser(email.input, password.input)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('before adding user' + user)
                addUser(user);
            } else {
                //user is signed out
            }
        })
        router.push('/');
        //if user is logging in (seperate logic)
    }

  return (
    <button className={`${(email.valid && password.valid) ? "bg-primary w-1/3 h-14 mx-auto text-xl rounded-md text-white shadow-sm shadow-primary-shadow focus:outline-primary-dark" : 
    "bg-primary-disabled opacity-50 w-1/3 h-14 mx-auto text-xl rounded-md text-white-80 shadow-sm shadow-primary-disabled-shadow"}`} disabled={!email.valid || !password.valid}
    onClick={handleClick}>
        {text}
    </button>
  )
}

export default Button