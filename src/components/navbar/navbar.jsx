import React from 'react';
import NavButton from './nav_button.jsx';
import QuoteButton from '../quote_button.jsx';
import Company_Logo from '../../assets/images/company_logo.png'

const NavigationBar = () => {

    React.useEffect(() => {


    
    });

    return (

        <nav id='navbar' className='navbar bg-yellow-500 flex justify-between fixed w-full z-10'>
            <div className='w-96 flex flex-row justify-center gap-x-4'>
                <span className='flex self-center w-12 p-2 bg-black rounded-md '>
                    <img src={Company_Logo} alt='GWW Temp Image'/>
                </span>
                <span className='flex self-center'>
                    <h1 className='text-2xl'>GWW</h1>
                </span>
            </div>
            <div className='w-full flex flex-row justify-center gap-x-6 p-2'>
                    <NavButton title={"Homepage"} link='/about'></NavButton>
                    <NavButton title={"About Us"} link='/about'></NavButton>
                    <NavButton title={"Services"} link='/services'></NavButton>
                    <NavButton title={"Contact"} link='/contact'></NavButton>
            </div>
            <div className='w-96 flex flex-row justify-center'>
                <span className='flex self-center'>
                    <QuoteButton/>
                </span>
            </div>
        </nav>
    );
    
}

export default NavigationBar;