import React from 'react';

import Company_Logo from '../assets/images/company_logo.png'
import { Link } from "react-router-dom";

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
            <div className='flex self-center'>
                <Link to={'/contact'}>
                    <span className='text-yellow-500 hover:underline'>
                        Contact
                    </span>
                </Link>
            </div>
            <div className='flex self-center'>
                <Link to={'/about'}>
                    <span className='text-yellow-500 hover:underline'>
                        About
                    </span>
                </Link>
            </div>
        </div>

    );

}

export default Footer