import React from 'react'
import OverviewImg from '../../../public/Icons/file.png'
import NearbyImg from '../../../public/Icons/compass.png'
import FavouriteImg from '../../../public/Icons/chat.png'
import CheckInImg from '../../../public/Icons/wall-clock.png'
import GuestImg from '../../../public/Icons/family.png'

const RoomOverview = ({onDisplayData}) => {
  return (
    <div className='flex flex-col md:text-lg tracking-wide'>
      <div className='bg-[#153E4D] flex items-center justify-center h-16 md:h-24 w-full gap-2 text-white text-2xl md:text-4xl tracking-wider'><img src={OverviewImg} alt="Overview" className='h-8 w-8 object-cover invert' /><h2>Overview</h2></div>
        <div className='bg-black/90 w-full px-6 md:px-12 py-8 md:py-12 text-white text-justify'>
            <p className='mb-3'>{onDisplayData.overview.para1}</p>
            <p className='mb-3'>{onDisplayData.overview.para2}</p>
            <p className='mb-3'>{onDisplayData.overview.para3}</p>
            <p className='mb-3'>{onDisplayData.overview.para4}</p>
            <p className='mb-3'>{onDisplayData.overview.para5}</p>
            <p>{onDisplayData.overview.para6}</p>
            </div>
      <div className='bg-[#153E4D] flex items-center justify-center h-16 md:h-24 w-full gap-2 text-white text-2xl md:text-4xl tracking-wider'><img src={NearbyImg} alt="Nearby" className='h-8 w-8 object-cover invert' /><h2>What's Nearby</h2></div>
        <div className='bg-black/90 w-full px-6 md:px-12 py-8 md:py-12 text-white text-justify'>
            <p className='mb-3'>{onDisplayData.nearbyAttr.para1}</p>
            <ul className='ml-8 list-disc'>
                <li className='mb-1'>{onDisplayData.nearbyAttr.listItem1}</li>
                <li className='mb-1'>{onDisplayData.nearbyAttr.listItem2}</li>
                <li className='mb-1'>{onDisplayData.nearbyAttr.listItem3}</li>
                <li className='mb-1'>{onDisplayData.nearbyAttr.listItem4}</li>
            </ul>
        </div>
      <div className='bg-[#153E4D] flex items-center justify-center h-16 md:h-24 w-full gap-2 text-white text-2xl md:text-4xl tracking-wider'><img src={FavouriteImg} alt="Favourite" className='h-8 w-8 object-cover invert' /><h2>Guest Favourite</h2></div>
        <div className='bg-black/90 w-full px-6 md:px-12 py-8 md:py-12 text-white text-justify'>
            <p className='mb-3'>"{onDisplayData.guestMsg.message}"</p>
            <p>{onDisplayData.guestMsg.author}</p>
        </div>
      <div className='bg-[#153E4D] flex items-center justify-center h-16 md:h-24 w-full gap-2 text-white text-2xl md:text-4xl tracking-wider'><img src={CheckInImg} alt="CheckIn" className='h-8 w-8 object-cover invert' /><h2>Check-In / Check-Out</h2></div>
        <div className='bg-black/90 w-full px-6 md:px-12 py-8 md:py-12 text-white text-justify'>
            <ul className='list-disc ml-8'>
                <li className='mb-1'>{onDisplayData.time.checkIn}</li>
                <li className='mb-1'>{onDisplayData.time.checkOut}</li>
            </ul>
        </div>
      <div className='bg-[#153E4D] flex items-center justify-center h-16 md:h-24 w-full gap-2 text-white text-2xl md:text-4xl tracking-wider'><img src={GuestImg} alt="Guest" className='h-8 w-8 object-cover invert' /><h2>Ideal For</h2></div>
        <div className='bg-black/90 w-full px-6 md:px-12 py-8 md:py-12 text-white text-justify'>
            <p className='mb-3'>{onDisplayData.idealFor.para1}</p>
            <ul className='list-disc ml-8'>
                <li className='mb-1'>{onDisplayData.idealFor.listItem1}</li>
                <li className='mb-1'>{onDisplayData.idealFor.listItem2}</li>
                <li className='mb-1'>{onDisplayData.idealFor.listItem3}</li>
            </ul>
        </div>
    </div>
  )
}

export default RoomOverview
