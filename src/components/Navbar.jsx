import React, { useState } from 'react'
import iconHam from '../assets/icon-hamburger.svg'

export const Navbar = () => {

    const [click, setClick] = useState(false)

    const clicked = () => {
        setClick(!click)
    } 

  return (
    <nav  className=''>
        <ul className={`bg-white w-[329px] h-[305px] absolute left-0 right-0 mx-auto top-[106px] flex-col items-center place-content-around after:content-[""] after:absolute after:top-[-24px] after:right-0 after:border-[12px] after:border-t-transparent after:border-l-transparent after:border-b-white after:border-r-white text-Dark-grayish-blue text-xl ${click===false ? 'hidden': 'flex'} sm:flex sm:after:hidden sm:bg-transparent sm:flex-row sm:top-0 sm:w-[400px] sm:h-full sm:relative sm:right-0 z-10`}>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Services</li>
            <li className='cursor-pointer'>Projects</li>
            <li className='cursor-pointer bg-Yellow w-[140px] h-[56px] grid place-content-center rounded-full font-Fraunces text-Very-dark-desaturated-blue uppercase sm:bg-white sm:hover:bg-opacity-25 sm:hover:text-white'>Contact</li>
        </ul>
        <div className='cursor-pointer sm:hidden' onClick={clicked}>
            <img src={iconHam} alt="Hamburguer Icon" />
        </div>
    </nav>
  )
}


  
  
  