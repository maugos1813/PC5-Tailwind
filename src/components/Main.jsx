import React from 'react'
import imgMobile from '../assets/mobile/image-header.jpg'
import imgDesktop from '../assets/desktop/image-header.jpg'
import arrow from '../assets/icon-arrow-down.svg'

export const Main = () => {
  return (
    <section>
        <picture>
            <source media='(max-width:640px)' srcSet={imgMobile} />
            <source media='(min-width:641px)' srcSet={imgDesktop}/>
            <img src={imgMobile} alt="background header" />
        </picture>
        <p className='absolute font-Fraunces uppercase tracking-[6.25px] text-white text-center text-[40px] w-[327px] top-[144px] left-0 right-0 mx-auto sm:w-[600px]'>We are creatives</p>
        <img className='absolute top-[294px] left-0 right-0 mx-auto sm:top-[220px]' src={arrow} alt="down arrow" />
    </section>
  )
}
