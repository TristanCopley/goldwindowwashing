import React from 'react';
import './testimonial.css';

const Testimonial = ({img, name, text}) => {

    return (
        <div className='w-176 h-80 relative flex'>
            <img src={img} alt='GWW Temp Image' className='w-96 h-full absolute object-cover'/>
            <div className='w-96 absolute h-full bg-gradient-to-r from-transparent to-yellow-500 z-10 bg-opacity-50 left-0'></div>
            <div className='w-80 absolute h-full bg-yellow-500 right-0 flex flex-col justify-center text-white'>
                <div className='flex flex-col justify-center gap-4 w-5/6 self-center'>
                    <h1 className='text-3xl text-center'>{name}</h1>
                    <h2 className='text-l text-center'>{text}</h2>
                    </div>
            </div>
            <div className='absolute w-full h-full z-10 testimonial '>

            </div>
        </div>
    );

}

export default Testimonial