import React from 'react'

import ErroImg from '../../public/Images/404.svg'
import LocationImg from '../../public/Icons/diamond.png'
import { Link } from 'react-router-dom'
import InkImgae from '../../public/Images/ink.png'

const Error = () => {
  return (
    <>
 
      <img src={InkImgae} alt="Ink drop" className='fixed -top-28 -left-20 h-100 w-auto object-cover' />
      <img src={InkImgae} alt="Ink drop" className='fixed -top-28 -right-20 h-100 w-auto object-cover hidden md:block' />

     <div className='relative'>
      <img src={ErroImg} alt="Error Image" className='h-100 md:h-140 w-full md:w-screen object-contain' />
      <div className='absolute inset-0 bg-black/40' />
        <div className='absolute inset-0 flex items-end px-6 py-12 md:py-36'>
            <div className='flex flex-col'>
                <h2 className='text-3xl md:text-7xl tracking-wider uppercase'>Home</h2>
                <ul className='flex gap-4 items-center text-lg md:text-2xl mt-2 md:mt-4'>
                    <li><Link to={'/'}>Home</Link></li>
                    <li className="flex items-center gap-4 text-red-700 tracking-wide"><img src={LocationImg} alt="P0inter" className='w-4 h-4 md:w-6 md:h-6 object-contain shrink-0' />404 Page</li>
                    </ul>
            </div>
          </div>
    </div>
    </>
   
  )
}

export default Error
