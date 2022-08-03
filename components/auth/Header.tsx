import React from 'react'
import { BsArrowLeftShort } from 'react-icons/Bs'
import { useRouter } from 'next/router';

interface HeaderProps{
    text: string
}

const Header = ({text}: HeaderProps) => {
    const router = useRouter();

  return (
    <header className='w-screen bg-background py-6 fixed'>
        <div className='relative'>
            <i className='absolute text-white ml-3 cursor-pointer z-10 hover:text-white-80'><BsArrowLeftShort size='32' onClick={() => router.back()}/></i>
            <div className='text-white text-2xl text-center relative after:content-[""] after:absolute after:bg-primary after:-bottom-3 after:left-0 after:right-0 after:mx-auto after:w-14 after:h-1.5 after:rounded-md'>
                {text}
            </div>
        </div>
    </header>
  )
}

export default Header