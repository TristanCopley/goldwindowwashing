import React from 'react'
import Hero_Image from '../assets/images/hero_image.jpg'

import QuoteButton from '../components/quote_button.jsx';
import About_Image from '../assets/images/aboutgww.png'

const Home = () => {

    return (

        <div className='flex flex-col'>

            {/* Hero image */}
            <div className='w-screen h-screen fixed -z-10 bg-black'> </div>
            <img src={Hero_Image} alt='GWW Temp Image' className='w-full h-full object-cover fixed -z-10 opacity-40'/>

            {/* About */}
            <div className='w-full h-fit flex justify-around flex-wrap gap-16 py-16 pt-48'>
                <div className='max-w-3xl h-144 bg-yellow-500 flex flex-col self-center justify-center py-6 px-16 gap-10 rounded-md text-white'>
                        <h1 className='flex self-center'>
                            About
                        </h1>
                        <h2 className='flex self-center text-center max-w-3xl'>
                            Gold Window Washing is a team of young entrepreneurs dedicated to providing professional window cleaning services to the community. 
                            Our swift and affordable services ensure that homes are left with sparkling, radiant windows. 
                            We offer a comprehensive range of services, including outdoor and indoor window washing, as well as screen cleaning. 
                            Our team is highly efficient and dedicated to ensuring customer satisfaction.
                        </h2>
                        <span className='flex self-center text-center'>
                            <QuoteButton />
                        </span>
                </div>
                <div className='h-144 bg-yellow-500 flex self-center justify-center p-3 rounded-md'>
                    <img src={About_Image} alt='GWW Temp Image' className='w-160 object-cover rounded-md'/>
                </div>
            </div>

        </div>

    );

}

export default Home