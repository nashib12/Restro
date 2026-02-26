import React from 'react'
import OverviewImg from '../../../public/Icons/file.png'
import NearbyImg from '../../../public/Icons/compass.png'
import FavouriteImg from '../../../public/Icons/chat.png'
import CheckInImg from '../../../public/Icons/wall-clock.png'
import GuestImg from '../../../public/Icons/family.png'

const RoomOverview = () => {
  return (
    <div className='flex flex-col md:text-lg tracking-wide'>
      <div className='bg-[#153E4D] flex items-center justify-center h-16 md:h-24 w-full gap-2 text-white text-2xl md:text-4xl tracking-wider'><img src={OverviewImg} alt="Overview" className='h-8 w-8 object-cover invert' /><h2>Overview</h2></div>
        <div className='bg-black/90 w-full px-6 md:px-12 py-8 md:py-12 text-white text-justify'>
            <p className='mb-3'>Step into a world where the sky meets the sea — welcome to the Deluxe Ocean View Room at Resorto. Designed for guests who crave luxury with a view, this beautifully styled retreat offers an unmatched coastal experience from the moment you arrive.</p>
            <p className='mb-3'>Wake each morning to the calming rhythm of waves and golden sunlight pouring through full-length windows. Step onto your private balcony, where sweeping ocean panoramas and the scent of salt in the air invite you to slow down and savor the moment. Whether you're sipping a handcrafted espresso or watching the sun dip into the horizon, every detail is designed for comfort and calm.</p>
            <p className='mb-3'>Inside, the room boasts a harmonious blend of coastal elegance and modern design. Soft neutral tones, natural textures, and curated décor create a warm and restful environment. The plush king-size bed promises deep, uninterrupted sleep, while the spacious layout gives you plenty of room to stretch out, work, or simply unwind.</p>
            <p className='mb-3'>The bathroom is a spa-like sanctuary, complete with a walk-in rainfall shower, soft robes, and luxurious bath essentials. Every corner of this space is curated for both indulgence and function.</p>
            <p>Whether you're planning a romantic escape, a solo retreat, or a quiet work-from-paradise getaway, the Deluxe Ocean View Room offers the perfect mix of inspiration and serenity.</p>
        </div>
      <div className='bg-[#153E4D] flex items-center justify-center h-16 md:h-24 w-full gap-2 text-white text-2xl md:text-4xl tracking-wider'><img src={NearbyImg} alt="Nearby" className='h-8 w-8 object-cover invert' /><h2>What's Nearby</h2></div>
        <div className='bg-black/90 w-full px-6 md:px-12 py-8 md:py-12 text-white text-justify'>
            <p className='mb-3'>Located in one of the resort’s most scenic wings, this room places you just steps away from:</p>
            <ul className='ml-8 list-disc'>
                <li className='mb-1'>The infinity pool & beachfront bar</li>
                <li className='mb-1'>Fine dining restaurants</li>
                <li className='mb-1'>The spa & wellness center</li>
                <li className='mb-1'>Sunset deck and yoga pavilion</li>
            </ul>
        </div>
      <div className='bg-[#153E4D] flex items-center justify-center h-16 md:h-24 w-full gap-2 text-white text-2xl md:text-4xl tracking-wider'><img src={FavouriteImg} alt="Favourite" className='h-8 w-8 object-cover invert' /><h2>Guest Favourite</h2></div>
        <div className='bg-black/90 w-full px-6 md:px-12 py-8 md:py-12 text-white text-justify'>
            <p className='mb-3'>The view from our balcony felt like a painting. We watched the sunrise every morning — it was magical."</p>
            <p>— A. Rahman, Guest from Dubai</p>
        </div>
      <div className='bg-[#153E4D] flex items-center justify-center h-16 md:h-24 w-full gap-2 text-white text-2xl md:text-4xl tracking-wider'><img src={CheckInImg} alt="CheckIn" className='h-8 w-8 object-cover invert' /><h2>Check-In / Check-Out</h2></div>
        <div className='bg-black/90 w-full px-6 md:px-12 py-8 md:py-12 text-white text-justify'>
            <ul className='list-disc ml-8'>
                <li className='mb-1'>Check-in: 2:00 PM</li>
                <li className='mb-1'>Check-out: 11:00 AM</li>
            </ul>
        </div>
      <div className='bg-[#153E4D] flex items-center justify-center h-16 md:h-24 w-full gap-2 text-white text-2xl md:text-4xl tracking-wider'><img src={GuestImg} alt="Guest" className='h-8 w-8 object-cover invert' /><h2>Ideal For</h2></div>
        <div className='bg-black/90 w-full px-6 md:px-12 py-8 md:py-12 text-white text-justify'>
            <p className='mb-3'>This room is perfect for:</p>
            <ul className='list-disc ml-8'>
                <li className='mb-1'>Couples on a romantic getaway</li>
                <li className='mb-1'>Solo travelers seeking luxury and peace</li>
                <li className='mb-1'>Business travelers wanting premium comfort</li>
            </ul>
        </div>
    </div>
  )
}

export default RoomOverview
