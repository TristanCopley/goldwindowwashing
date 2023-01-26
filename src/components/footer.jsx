import React from 'react';

import Company_Logo from '../assets/images/company_logo.png'

const Footer = () => {

    return (

        <div className='h-fit w-full bg-black text-yellow-500 flex justify-center p-4 gap-x-16 gap-y-4 flex-wrap'>
            <div className='flex self-center gap-x-2 max-w'>
                <span className='flex self-center w-12 p-2 bg-black rounded-md '>
                    <img src={Company_Logo} alt='GWW Temp Image'/>
                </span>
                <span className='flex self-center font-light'>
                    © 2023 Gold Window Washing, Inc.
                </span>
            </div>
            <a href='/contact' className='flex self-center'>
                <span className='text-yellow-500 hover:underline'>
                    Contact
                </span>
            </a>
            <a href='/about' className='flex self-center'>
                <span className='text-yellow-500 hover:underline'>
                    About
                </span>
            </a>
        </div>

    );

}

export default Footer