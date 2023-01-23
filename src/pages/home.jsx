import React from 'react'
import Hero_Image from '../assets/images/hero_image.jpg'
import QuoteButton from '../components/quote_button';

import Card from '../components/card.jsx'
import Service_Image from '../assets/images/services.jpeg'
import Detailed_Scrubbing_Image from '../assets/images/detailed_scrubbing.jpg'
import Frame_Treatment_Image from '../assets/images/frame_treatment.jpg'
import Washing_Image from '../assets/images/washing_image.jpg'
import Squeegee_Image from '../assets/images/squeegee_image.jpg'

const Home = () => {

    return (
        <div className='flex flex-col'>

            {/* Hero image */}
            <div className='w-screen h-screen fixed -z-10 bg-black'> </div>
            <img src={Hero_Image} alt='GWW Temp Image' className='w-full h-full object-cover fixed -z-10 opacity-10'/>

            {/* <div className='w-screen h-screen fixed -z-10 bg-black'> </div>*/}

            {/* Hero Text */}
            <div className='w-6/12 flex justify-center my-48 p-16 bg-yellow-500 rounded-md self-center bg-opacity-100 text-white'>
                <div className='flex flex-col gap-y-8 content-center'>
                    <h1 className='text-6xl text-center w-fit flex self-center'>Gold Window Washing</h1>
                    <h2 className='text-3xl text-center w-3/4 flex self-center'>A team of young entrepreneurs serving the community with professional window cleaning services.</h2>
                    <span className='flex self-center'>
                        <QuoteButton />
                    </span>
                </div>
            </div>

            {/* Services */}
            <div className='h-192 bg-black w-full p-16 bg-opacity-70 flex flex-col gap-y-14'>
                <div className='flex w-full justify-center gap-12'>
                    <span className='flex justify-center h-64'>
                        <div className='w-96 h-full bg-yellow-500 flex self-center justify-center p-6 rounded-md'>
                            <span className='flex flex-col self-center w-fit h-fit text-center gap-y-4 text-white'> 
                                <h1 className='text-3xl'>
                                    Services:
                                </h1>
                                <h2 className='text-xl'>
                                    We offer a variety of services. We offer a variety of services. We offer a variety of services. 
                                    We offer a variety of services. We offer a variety of services. We offer a variety of services.
                                </h2>
                            </span>
                        </div>
                    </span>
                    <span className='h-64'><Card img={Washing_Image} title='Purposeful Washing' description='We offer a variety of services' /></span>
                    <span className='h-64'><Card img={Detailed_Scrubbing_Image} title='Detailed Scrubbing' description='We offer a variety of services' /></span>
                </div>
                <div className='flex w-full justify-center gap-12'>
                    <span className='h-64'><Card img={Frame_Treatment_Image} title='Frame Treatment' description='We offer a variety of services' /></span>
                    <span className='h-64'><Card img={Service_Image} title='Screens' description='We offer a variety of services' /></span>
                    <span className='h-64'><Card img={Squeegee_Image} title='Drying' description='We offer a variety of services' /></span>
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