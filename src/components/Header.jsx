import React from 'react'
import logo from '../assets/logo.svg'
import { Navbar } from './Navbar'

export const Header = () => {
  return (
    <header className='absolute w-full px-6 pt-8 flex place-content-between font-Barlow h-[3%]'>
        <img src={logo} alt="Imagen del logo" className='w-[20%] h-[52%]'/>
        <Navbar/>
    </header>
  )
}
