import React from 'react'
import Hero_Image from '../assets/images/hero_image.jpg'
import QuoteButton from '../components/quote_button';

import Footer from '../components/footer';

import Card from '../components/card.jsx'
import Service_Image from '../assets/images/services.jpeg'
import Detailed_Scrubbing_Image from '../assets/images/detailed_scrubbing.jpg'
import Frame_Treatment_Image from '../assets/images/frame_treatment.jpg'
import Washing_Image from '../assets/images/washing_image.jpg'
import Squeegee_Image from '../assets/images/squeegee_image.jpg'

import Carousel from '../components/carousel';

const Home = () => {

    return (
        <div className='flex flex-col'>

            {/* Hero image */}
            <div className='w-screen h-screen fixed -z-10 bg-black'> </div>
            <img src={Hero_Image} alt='GWW Temp Image' className='w-full h-full object-cover fixed -z-10 opacity-40'/>

            {/* <div className='w-screen h-screen fixed -z-10 bg-black'> </div>*/}

            {/* Hero Text */}
            <div className='max-w-7xl flex justify-center my-48 p-16 bg-yellow-500 rounded-md self-center bg-opacity-100 text-white'>
                <div className='flex flex-col gap-y-8 content-center'>
                    <h1 className='text-6xl text-center w-fit flex self-center'>Gold Window Washing</h1>
                    <h2 className='text-3xl text-center max-w-7xl flex self-center'>A team of young entrepreneurs serving the community with professional window cleaning services.</h2>
                    <span className='flex self-center'>
                        <QuoteButton />
                    </span>
                </div>
            </div>

            {/* Services */}
            <div className='h-fit bg-black bg-opacity-70 w-full flex flex-col justify-center gap-y-14 p-14'>
                <div className='flex max-w-7xl justify-center gap-12 flex-wrap self-center'>
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
                    <span className='h-64'><Card img={Frame_Treatment_Image} title='Frame Treatment' description='We offer a variety of services' /></span>
                    <span className='h-64'><Card img={Service_Image} title='Screens' description='We offer a variety of services' /></span>
                    <span className='h-64'><Card img={Squeegee_Image} title='Drying' description='We offer a variety of services' /></span>
                </div>
            </div>

            {/* About */}
            <div className='w-full h-fit flex justify-around flex-wrap gap-16 py-16'>
                <div className='max-w-3xl h-full bg-yellow-500 flex flex-col self-center justify-center p-6 gap-5 rounded-md text-white'>
                        <h1 className='flex self-center'>
                            About
                        </h1>
                        <h2 className='flex self-center text-center max-w-3xl'>
                            San Diego Super Window Ninjas is a team of young entrepreneurs dedicated to providing professional window cleaning services to the community. 
                            Our swift and affordable services ensure that homes are left with sparkling, radiant windows. 
                            We offer a comprehensive range of services, including outdoor and indoor window washing, as well as screen cleaning. 
                            Our team is highly efficient and dedicated to ensuring customer satisfaction.
                        </h2>
                        <span className='flex self-center text-center'>
                            <QuoteButton />
                        </span>
                </div>
                <div className='h-full bg-yellow-500 flex self-center justify-center p-3 rounded-md'>
                    <img src={Service_Image} alt='GWW Temp Image' className='w-full h-full object-cover rounded-md'/>
                </div>
            </div>

            {/* Testimonials */}
            <Carousel/>

            {/* Contact */}
            <div className='w-full h-fit flex justify-around py-16 flex-wrap gap-16'>
                <div className='h-full bg-yellow-500 flex self-center justify-center p-3 rounded-md'>
                    <img src={Service_Image} alt='GWW Temp Image' className='w-full h-full object-cover rounded-md'/>
                </div>
                <div className='max-w-3xl h-full bg-yellow-500 flex flex-col self-center justify-center p-6 gap-5 rounded-md text-white'>
                    <h1 className='flex self-center'>
                        Contact
                    </h1>
                    <h2 className='flex self-center text-center max-w-3xl'>
                        San Diego Super Window Ninjas is a team of young entrepreneurs dedicated to providing professional window cleaning services to the community. 
                        Our swift and affordable services ensure that homes are left with sparkling, radiant windows. 
                        We offer a comprehensive range of services, including outdoor and indoor window washing, as well as screen cleaning. 
                        Our team is highly efficient and dedicated to ensuring customer satisfaction.
                    </h2>
                    <span className='flex self-center text-center'>
                        <QuoteButton />
                    </span>
                </div>
            </div>

            {/* Footer */}
            <Footer/>

        </div>
    );

}

export default Home