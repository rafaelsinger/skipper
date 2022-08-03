import React from 'react'
import { BsApple } from 'react-icons/Bs' 
import { FcGoogle } from 'react-icons/Fc'
import { useRouter } from 'next/router'

interface ThirdPartyProps {
    platform: string,
    action: string,
    href: string,
}

const ThirdParty = ({platform, action, href}: ThirdPartyProps) => {

    const router = useRouter();

    const renderIcon = () => {
        switch(platform){
            case 'Apple':
                return <BsApple size={25} />
            case 'Google':
                return <FcGoogle size={25} />
            default:
                return null
        }
    }

    const loginOrSignUp = () => {
        switch(action){
            case 'SignUp':
                return 'up'
            case 'Login':
                return 'in'
        }
    }

    const handleClick = () => {
        router.push(href);
    }

    return (
        <button className='w-4/6 mx-auto my-8 flex relative' onClick={handleClick}>
            <div className='absolute left-8 top-3.5'>
                {renderIcon()}
                {/* {platform === 'Apple' ? <BsApple size={25} /> : <FcGoogle size={25} />} */}
            </div>
            <div className='bg-white hover:bg-white-80 hover:border-gray-300 rounded-md h-14 border-4 border-white-300 w-full flex items-center text-xl justify-center' > Sign {loginOrSignUp()} with {platform} </div>
        </button>
      )
}


export default ThirdParty