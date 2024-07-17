import React from 'react'

export const Testimonial = ({img, testimonial, name, posititon}) => {
  return (
    <div className='flex flex-col items-center text-center mb-16'>
        <img src={img} alt="photo" className='rounded-full w-[72px]'/>
        <p className='my-8 font-Barlow text-Very-dark-grayish-blue px-4 max-w-[400px]'>{testimonial}</p>
        <h3 className='font-Fraunces text-[18px] text-Very-dark-desaturated-blue'>{name}</h3>
        <p className='text-Grayish-blue font-Barlow text-[14px]'>{posititon}</p>
    </div>
  )
}
