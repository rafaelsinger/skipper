import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../firebase/config';

const logout = () => {
    const handleClick = () => {
        signOut(auth).then(() => {
        // Sign-out successful.
        alert('Signed out successfully');
        }).catch((error) => {
        // An error happened.
        });
    }
  return (
    <div>
        <button onClick={handleClick}>Sign Out</button>
    </div>
  )
}

export default logout