import React from 'react'
import Hero_Image from '../assets/images/hero_image.jpg'
import QuoteButton from '../components/quote_button';

import Card from '../components/card.jsx'
import Service_Image from '../assets/images/services.jpeg'

const Home = () => {

    return (
        <div className='flex flex-col'>

            {/* Hero image */}
            <img src={Hero_Image} alt='GWW Temp Image' className='w-full h-full object-cover fixed -z-10'/>

            {/* Hero Text */}
            <div className='w-6/12 flex justify-center my-48 p-16 bg-black rounded-md self-center bg-opacity-70 text-white'>
                <div className='flex flex-col gap-y-8 content-center'>
                    <h1 className='text-6xl text-center w-fit flex self-center'>Gold Window Washing</h1>
                    <h2 className='text-3xl text-center w-3/4 flex self-center'>A team of young entrepreneurs serving the community with professional window cleaning services.</h2>
                    <span className='flex self-center'>
                        <QuoteButton />
                    </span>
                </div>
            </div>

            {/* Services */}
            <div className='h-144 bg-black w-full flex flex-col justify-center p-16 bg-opacity-70'>
                <div className='flex justify-around h-full gap-x-4'>
                    <div className='w-96 h-full bg-yellow-500 flex self-center justify-center p-6'>
                       <span className='flex flex-col self-center w-fit h-fit text-center gap-y-8 text-white'> 
                            <h1 className='text-4xl'>
                                Services:
                            </h1>
                            <h2 className='text-2xl'>
                                We offer a variety of services. We offer a variety of services. We offer a variety of services. 
                                We offer a variety of services. We offer a variety of services. We offer a variety of services.
                            </h2>
                        </span>
                    </div>
                    <Card img={Service_Image} title='Deep Washing' description='We offer a variety of services' />
                    <Card img={Service_Image} title='Perfect Squeegeeing' description='We offer a variety of services' />
                    <Card img={Service_Image} title='Amazing Finish' description='We offer a variety of services' />
                </div>

            </div>

            {/* About */}
            <div className='h-144 bg-green-500 w-full flex justify-around p-16'>
                <div className='w-1/2 h-full bg-yellow-500 flex flex-col self-center justify-center p-6'>
                    <span className='flex self-center'>
                        About
                    </span>
                    <span className='flex self-center'>
                        <QuoteButton />
                    </span>
                </div>
                <div className='w-144 h-full bg-yellow-500 flex self-center justify-center p-6'>
                    Img
                </div>
            </div>

            {/* Testimonials */}
            <div className='h-96 bg-gray-500 w-full'>
                Testimonials
            </div>

            {/* Get a free estimate */}
            <div className='h-96 bg-gray-500 w-full flex justify-center'>
                <QuoteButton />
            </div>

        </div>
    );

}

export default Home