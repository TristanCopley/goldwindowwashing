import React from 'react'
import Hero_Image from '../assets/images/hero_image.jpg'

import QuoteButton from '../components/quote_button.jsx';
import Contact_Image from '../assets/images/contact.jpg'

const Contact = () => {

    return (

        <div className='flex flex-col'>

            {/* Hero image */}
            <div className='w-screen h-screen fixed -z-10 bg-black'> </div>
            <img src={Hero_Image} alt='GWW Temp Image' className='w-full h-full object-cover fixed -z-10 opacity-40'/>

            {/* Contact */}
            <div className='w-full h-fit flex justify-around py-16 flex-wrap gap-16 pt-48'>
                <div className='bg-yellow-500 flex self-center justify-center p-3 rounded-md'>
                    <img src={Contact_Image} alt='GWW Temp Image' className='w-160 h-144 object-cover rounded-md'/>
                </div>
                <div className='max-w-3xl h-144 bg-yellow-500 flex flex-col self-center justify-center py-6 px-16 gap-10 rounded-md text-white'>
                    <h1 className='flex self-center'>
                        Contact
                    </h1>
                    <h2 className='flex self-center text-center max-w-3xl'>
                        Located in San Diego, Gold Window Washing offers window washing services to homeowners and businesses in San Diego County and surrounding areas. To learn more about our services, please contact us using the form below. A member of our dedicated window cleaning team will respond to you shortly thereafter.
                    </h2>
                    <h2 className='flex self-center text-center max-w-3xl'>
                        We pride ourselves on providing swift and affordable window cleaning services that leave homes with sparkling, radiant windows. Our comprehensive range of services includes outdoor and indoor window washing, as well as screen cleaning. Trust us to leave your windows spotless and ensure your satisfaction.
                    </h2>
                    <span className='flex self-center text-center'>
                        <QuoteButton />
                    </span>
                </div>
            </div>
        </div>

    );

}

export default Contact