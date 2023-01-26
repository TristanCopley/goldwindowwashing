import React from 'react';

import Service_Image from '../assets/images/services.jpeg';
import Testimonial from './testimonial';

// Image testimonials
import Testimonial_Image_1 from '../assets/images/testimonials/testimonial1.jpg';
import Testimonial_Image_2 from '../assets/images/testimonials/testimonial2.jpg';
import Testimonial_Image_3 from '../assets/images/testimonials/testimonial3.jpg';
import Testimonial_Image_4 from '../assets/images/testimonials/testimonial4.jpeg';
import Testimonial_Image_5 from '../assets/images/testimonials/testimonial5.jpg';

const Carousel = () => {

    let [testimonials, setTestimonials] = React.useState([
        {
            name: 'John C.',
            text: "I recently had the pleasure of using Gold Window Washing's services and I couldn't be happier with the results. The team was professional, punctual, and efficient. They were able to clean all of the windows in my home, both inside and out, as well as my screens, in a timely manner. The difference in the brightness and clarity of my windows was astounding.",
            image: Testimonial_Image_4,
        },
        {
            name: 'Maria S.',
            text: "Gold Window Washing exceeded my expectations. They cleaned my windows and screens with great care, attention to detail and professionalism. Their service was outstanding and my windows are crystal clear now. Highly recommend them.",
            image: Testimonial_Image_1,
        },
        {
            name: 'Edward B.',
            text: "Gold Window Washing did an amazing job on my windows, they scheduled my appointment at my convenience and their team was professional and efficient. My windows are so clean now and it's amazing the difference it makes in the amount of natural light that comes into my home, my reading nook is now much more pleasant. I highly recommend them.",
            image: Testimonial_Image_5,
        },
        {
            name: 'Natalie S.',
            text: 'I recently had Gold Window Washing come and clean my windows and I have to say, I am beyond impressed with their work. The team was so hardworking and efficient, they got the job done in no time. I would highly recommend their services to anyone looking to brighten up their home.',
            image: Testimonial_Image_2,
        },
        {
            name: 'Matthew H.',
            text: 'Gold Window Washing performed excellently. My windows are spotless and the team did a great job. I would definitely recommend their services to anyone.',
            image: Testimonial_Image_4,
        },
        {
            name: 'Amanda S.',
            text: 'Gold Window Washing did an exceptional job on my windows, both inside and out. I highly recommend them for their professional, thorough service.',
            image: Testimonial_Image_3,
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
            <Testimonial img={testimonials[0].image} name={testimonials[0].name} text={testimonials[0].text}/>
            <Testimonial img={testimonials[1].image} name={testimonials[1].name} text={testimonials[1].text}/>
            <Testimonial img={testimonials[2].image} name={testimonials[2].name} text={testimonials[2].text}/>
            <Testimonial img={testimonials[3].image} name={testimonials[3].name} text={testimonials[3].text}/>
            <Testimonial img={testimonials[4].image} name={testimonials[4].name} text={testimonials[4].text}/>
        </div>
    </div>
    );

}

export default Carousel;