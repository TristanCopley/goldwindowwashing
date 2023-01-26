import React from 'react'
import Hero_Image from '../assets/images/hero_image.jpg'
import QuoteButton from '../components/quote_button';

import Footer from '../components/footer';

import Card from '../components/card.jsx'
import Detailed_Scrubbing_Image from '../assets/images/detailed_scrubbing.jpg'
import Frame_Treatment_Image from '../assets/images/frame_treatment.jpg'
import Washing_Image from '../assets/images/washing_image.jpg'
import Squeegee_Image from '../assets/images/squeegee_image.jpg'
import Screen_Cleaning_Image from '../assets/images/screen_image.jpg'

import About_Image from '../assets/images/aboutgww.png'
import Contact_Image from '../assets/images/contact.jpg'

import Carousel from '../components/carousel';

const Home = () => {

    return (
        <div className='flex flex-col'>

            {/* Hero image */}
            <div className='w-screen h-screen fixed -z-10 bg-black'> </div>
            <img src={Hero_Image} alt='GWW Temp Image' className='w-full h-full object-cover fixed -z-10 opacity-40'/>

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
            <div className='h-fit bg-black bg-opacity-70 w-full flex flex-col justify-center gap-y-14 p-14 overflow-hidden'>
                <div className='flex max-w-8xl justify-center gap-12 flex-wrap self-center'>
                    <span className='flex justify-center h-80'>
                        <div className='w-104 h-full bg-yellow-500 flex self-center justify-center p-6 rounded-md'>
                            <span className='flex flex-col self-center w-fit h-fit text-center gap-y-4 text-white'> 
                                <h1 className='text-3xl'>
                                    Services:
                                </h1>
                            </span>
                        </div>
                    </span>
                    <span className='h-80'><Card img={Washing_Image} title='Purposeful Washing' description="We take the safety and effectiveness of our cleaning solutions seriously. That's why we use only safe, ammonia-free soap solutions to properly lather and clean your windows, ensuring that they are left radiantly clean. Our high-end scrubbers are specifically designed to remove dirt and grime, leaving your windows spotless and ensuring they stay that way for a long time." /></span>
                    <span className='h-80'><Card img={Detailed_Scrubbing_Image} title='Detailed Scrubbing' description="We understand that it's the little details that make all the difference. That's why we take the extra time and care to ensure that every window is cleaned to perfection, with not a single spot or residue left on the pane. We take great pride in the quality of our work and are committed to providing you with amazing windows. Should you ever find that a window does not meet your expectations, please don't hesitate to let us know. We will happily return to fix any issues and ensure your complete satisfaction." /></span>
                    <span className='h-80'><Card img={Frame_Treatment_Image} title='Frame Treatment' description="We understand that the overall appearance of your windows is not only about the panes but also the frames. That's why we take extra care to make sure that the frames of your windows are not only free of water and visible grime, but also spotless. This complete and thorough approach to window cleaning guarantees that your windows will have an immaculate appearance." /></span>
                    <span className='h-80'><Card img={Screen_Cleaning_Image} title='Screens' description="We understand that in order to have truly amazing windows, every aspect of the window must be cleaned and maintained. That's why we take extra care to scrub down and clean every window screen, ensuring that your entire window is spotless and in top condition. We use gentle yet effective cleaning methods that do not break, bend, or stretch your screens, so they can continue to look as good as new. We take pride in our attention to detail and our commitment to ensuring that your windows are not only clean but also in perfect working order." /></span>
                    <span className='h-80'><Card img={Squeegee_Image} title='Drying' description="We understand that the way windows are dried can greatly impact their appearance. That's why we take extra care to dry your windows with care. We use top-of-the-line squeegees, combined with the right techniques, to ensure that no streaks, marks, or scratches are present on your windows after we clean them. We take pride in our ability to provide spotless windows, and we can assure you that after our service, your windows will be free of any unwanted marks. Our commitment to using the best tools and techniques guarantees that you will be completely satisfied with the final result." /></span>
                </div>
            </div>

            {/* About */}
            <div className='w-full h-fit flex justify-around flex-wrap gap-16 py-16'>
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

            {/* Testimonials */}
            <Carousel/>

            {/* Contact */}
            <div className='w-full h-fit flex justify-around py-16 flex-wrap gap-16'>
                <div className='bg-yellow-500 flex self-center justify-center p-3 rounded-md'>
                    <img src={Contact_Image} alt='GWW Temp Image' className='w-160 h-144 object-cover rounded-md'/>
                </div>
                <div className='max-w-3xl h-fit bg-yellow-500 flex flex-col self-center justify-center py-6 px-16 gap-10 rounded-md text-white'>
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

            {/* Footer */}
            <Footer/>

        </div>
    );

}

export default Home