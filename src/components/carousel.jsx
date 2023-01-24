import React from 'react';

import Service_Image from '../assets/images/services.jpeg';
import Testimonial from './testimonial';

const Carousel = () => {

    let [testimonials, setTestimonials] = React.useState([
        {
            name: 'John Doe 0',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl euismod nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl euismod nisl.'
        },
        {
            name: 'John Doe 1',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl euismod nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl euismod nisl.'
        },
        {
            name: 'John Doe 2',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl euismod nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl euismod nisl.'
        },
        {
            name: 'John Doe 3',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl euismod nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl euismod nisl.'
        },
        {
            name: 'John Doe 4',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl euismod nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl euismod nisl.'
        },
        {
            name: 'John Doe 5',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl euismod nisl. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel aliquam nunc nisl euismod nisl.'
        },
    ]);

    React.useEffect(() => {

        const timer = setInterval(() => {

            const carousel = document.getElementById('carousel');

            carousel.classList.remove('active-carousel');
            setTestimonials(testimonials => [...testimonials.slice(1), testimonials[0]]);

            setTimeout(() => {

                carousel.classList.add('active-carousel');

            }, 500);

        }, 5500);

        return () => clearInterval(timer);

    }), [testimonials];

    return (
    <div className='h-fit bg-black bg-opacity-70 w-full flex flex-col justify-center overflow-hidden py-16'>
        <div id='carousel' className='bg-red-500 h-fit w-fit flex self-center active-carousel'>
            <Testimonial img={Service_Image} name={testimonials[0].name} text={testimonials[0].text}/>
            <Testimonial img={Service_Image} name={testimonials[1].name} text={testimonials[1].text}/>
            <Testimonial img={Service_Image} name={testimonials[2].name} text={testimonials[2].text}/>
            <Testimonial img={Service_Image} name={testimonials[3].name} text={testimonials[3].text}/>
            <Testimonial img={Service_Image} name={testimonials[4].name} text={testimonials[4].text}/>
        </div>
    </div>
    );

}

export default Carousel;