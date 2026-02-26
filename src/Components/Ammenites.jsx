import React from 'react'
import ServiceImg1 from '../../public/Icons/Services/air-conditioner.png'
import ServiceImg2 from '../../public/Icons/Services/bar-counter.png'
import ServiceImg3 from '../../public/Icons/Services/bathrobe.png'
import ServiceImg4 from '../../public/Icons/Services/cleaning.png'
import ServiceImg5 from '../../public/Icons/Services/coffee-machine.png'
import ServiceImg6 from '../../public/Icons/Services/coffee.png'
import ServiceImg7 from '../../public/Icons/Services/hair-dryer.png'
import ServiceImg8 from '../../public/Icons/Services/iron-board.png'
import ServiceImg9 from '../../public/Icons/Services/room-service.png'
import ServiceImg10 from '../../public/Icons/Services/safety-box.png'
import ServiceImg11 from '../../public/Icons/Services/smart-tv.png'
import ServiceImg12 from '../../public/Icons/wifi-router.png'

import SeviceBgImg1 from '../../public/Images/Services/air-con.jpg'
import SeviceBgImg2 from '../../public/Images/Services/breakfast.jpg'
import SeviceBgImg3 from '../../public/Images/Services/coffe.jpg'
import SeviceBgImg4 from '../../public/Images/Services/dryer.jpg'
import SeviceBgImg5 from '../../public/Images/Services/free-wifi.jpg'
import SeviceBgImg6 from '../../public/Images/Services/houseke.jpg'
import SeviceBgImg7 from '../../public/Images/Services/iron.jpg'
import SeviceBgImg8 from '../../public/Images/Services/lcker.jpg'
import SeviceBgImg9 from '../../public/Images/Services/mini-bar.jpg'
import SeviceBgImg10 from '../../public/Images/Services/room-ser.jpg'
import SeviceBgImg11 from '../../public/Images/Services/slipper.jpg'
import SeviceBgImg12 from '../../public/Images/Services/smart-tv.jpg'


const Ammenites = ({setCol, setHeight}) => {
    const serviceList = [
        {id: 1, img : ServiceImg3, title : "Bathrobes & Slippers", bgImg : SeviceBgImg11},
        {id: 2, img : ServiceImg4, title : "Daily Housekeeping", bgImg : SeviceBgImg6},
        {id: 3, img : ServiceImg8, title : "Iron And Ironing Board", bgImg : SeviceBgImg7},
        {id: 4, img : ServiceImg7, title : "Hair Dryer", bgImg : SeviceBgImg4},
        {id: 5, img : ServiceImg10, title : "Safe Deposit Box", bgImg : SeviceBgImg8},
        {id: 6, img : ServiceImg6, title : "Complimentary Box", bgImg : SeviceBgImg2},
        {id: 7, img : ServiceImg9, title : "Room Service", bgImg : SeviceBgImg10},
        {id: 8, img : ServiceImg5, title : "Coffee Maker", bgImg : SeviceBgImg3},
        {id: 9, img : ServiceImg2, title : "Mini Bar", bgImg : SeviceBgImg9},
        {id: 10, img : ServiceImg11, title : "Smart TV", bgImg : SeviceBgImg12},
        {id: 11, img : ServiceImg1, title : "Air Conditioning", bgImg : SeviceBgImg1},
        {id: 12, img : ServiceImg12, title : "Free WiFi", bgImg : SeviceBgImg5},
    ];

  return (
    <div className="px-6 py-12 md:py-24 flex flex-col items-center justify-center gap-2">
        <p className='text-xl md:text-2xl tracking-wide uppercase'>Amenities</p>
        <h2 className='text-3xl text-center md:text-6xl md:tracking-wider uppercase'>Our Hotel Amenities</h2>
        <div className={`${setCol}`}>
            {serviceList.map(item => (
            <div key={item.id} className={`relative ${setHeight} overflow-hidden cursor-pointer group mt-4 md:mt-6 `}>
                <img src={item.bgImg} alt={item.title} className='h-full w-full object-cover' />
                <div className='bg-[#153E4D] absolute inset-0 translate-x-0 group-hover:-translate-x-full transition-transform duration-300 ease-out' />
                <div className='absolute inset-0 h-full flex items-center justify-center gap-4 flex-col'>
                    <img src={item.img} alt={item.title} className='h-12 w-12 object-cover invert group-hover:invert-0' />
                    <h2 className='tracking-wide text-3xl text-white text-center'>{item.title}</h2>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Ammenites
