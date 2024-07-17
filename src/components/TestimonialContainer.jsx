import React from 'react'
import { Testimonial } from './Testimonial'
import emilyPhoto from '../assets/image-emily.jpg'
import thomas from '../assets/image-thomas.jpg'
import jennie from '../assets/image-jennie.jpg'

export const TestimonialContainer = () => {
  return (
    <section className='bg-white pt-16 text-Grayish-blue'>
        <h2 className='text-center uppercase font-Fraunces mb-16'>Client testimonials</h2>
        <div className='lg:flex lg:place-content-center lg:w-[900px] lg:mx-auto xl:w-[1110px]'>
            <Testimonial img={emilyPhoto} testimonial='We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.' name='Emily R.' posititon='Marketing Director'/>
        
            <Testimonial img={thomas} testimonial='Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.' name='Thomas S.' posititon='Chief Operating Officer'/>
        
            <Testimonial img={jennie} testimonial='Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!' name='Jennie F.' posititon='Business Owner'/>
        </div>
    </section>
  )
}
