import React from 'react'
import BgImage from '../../public/Images/bread-crumb-bg.jpg'
import { Link, useLocation } from 'react-router-dom'
import LocationImg from '../../public/Icons/diamond.png'

const BreadCrumb = ({setTitle}) => {
    const currentLocation = useLocation();

  return (
      <>
        <div className='relative'>
          <img src={BgImage} alt="Background Image" className='h-100 md:h-160 w-full md:w-screen object-cover' />
          <div className='absolute inset-0 bg-black/40' />
          <div className='absolute inset-0 flex items-end text-white px-6 py-12 md:py-36'>
            <div className='flex flex-col'>
                <h2 className='text-3xl md:text-7xl tracking-wider uppercase'>{setTitle}</h2>
                <ul className='flex gap-4 items-center text-lg md:text-2xl mt-2 md:mt-4'>
                    <li><Link to={'/'}>Home</Link></li>
                    <li className={`flex items-center gap-4 ${currentLocation.pathname.includes("/about-us") ? "block text-[#FFD400] tracking-wide" : "hidden"}`}><img src={LocationImg} alt="P0inter" className='w-4 h-4 md:w-6 md:h-6 object-contain shrink-0 invert' /><Link to={'/about-us'} className="cursor-pointer">{setTitle}</Link></li>
                    <li className={`flex items-center gap-4 ${currentLocation.pathname.includes("/our-rooms") ? "block text-[#FFD400] tracking-wide" : "hidden"}`}><img src={LocationImg} alt="P0inter" className='w-4 h-4 md:w-6 md:h-6 object-contain shrink-0 invert' /><Link to={'/our-rooms'} className="cursor-pointer">{setTitle}</Link></li>
                    <li className={`flex items-center gap-4 ${currentLocation.pathname.includes("/contact-us") ? "block text-[#FFD400] tracking-wide" : "hidden"}`}><img src={LocationImg} alt="P0inter" className='w-4 h-4 md:w-6 md:h-6 object-contain shrink-0 invert' /><Link to={'/our-rooms'} className="cursor-pointer">{setTitle}</Link></li>
                    <li className={`flex items-center gap-4 ${currentLocation.pathname.includes("/blogs") ? "block text-[#FFD400] tracking-wide" : "hidden"}`}><img src={LocationImg} alt="P0inter" className='w-4 h-4 md:w-6 md:h-6 object-contain shrink-0 invert' /><Link to={'/blogs'} className="cursor-pointer">{setTitle}</Link></li>
                    <li className={`flex items-center gap-4 ${currentLocation.pathname.includes("/gallery") ? "block text-[#FFD400] tracking-wide" : "hidden"}`}><img src={LocationImg} alt="P0inter" className='w-4 h-4 md:w-6 md:h-6 object-contain shrink-0 invert' /><Link to={'/gallery'} className="cursor-pointer">{setTitle}</Link></li>
                    <li className={`flex items-center gap-4 ${currentLocation.pathname.includes("/our-services") ? "block text-[#FFD400] tracking-wide" : "hidden"}`}><img src={LocationImg} alt="P0inter" className='w-4 h-4 md:w-6 md:h-6 object-contain shrink-0 invert' /><Link to={'/our-services'} className="cursor-pointer">{setTitle}</Link></li>
                    <li className={`flex items-center gap-4 ${currentLocation.pathname.includes("/book-now") ? "block text-[#FFD400] tracking-wide" : "hidden"}`}><img src={LocationImg} alt="P0inter" className='w-4 h-4 md:w-6 md:h-6 object-contain shrink-0 invert' /><Link to={'/book-now'} className="cursor-pointer">{setTitle}</Link></li>
                    <li className={`flex items-center gap-4 ${currentLocation.pathname.includes("*") ? "block text-[#FFD400] tracking-wide" : "hidden"}`}><img src={LocationImg} alt="P0inter" className='w-4 h-4 md:w-6 md:h-6 object-contain shrink-0 invert' />{setTitle}</li>
                    <li className={`flex items-center gap-2 md:gap-4 ${currentLocation.pathname.includes("/room-details") ? "block" : "hidden"}`}><img src={LocationImg} alt="P0inter" className='w-4 h-4 md:w-6 md:h-6 object-contain shrink-0 invert' /><Link to={'/our-rooms'} className="cursor-pointer">Rooms</Link><img src={LocationImg} alt="P0inter" className='w-4 h-4 md:w-6 md:h-6 object-contain shrink-0 invert' /><Link className={`cursor-pointer ${currentLocation.pathname.includes("/room-details") ? "text-[#FFD400] tracking-wide" : "text-white"} md:text-2xl`}>{setTitle}</Link></li>
                </ul>
            </div>
          </div>
        </div>
      </>
  )
}

export default BreadCrumb
