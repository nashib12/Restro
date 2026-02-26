import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import RoomImg1 from '../../public/Images/Home-page/Rooms/beachfront-bungalow.jpg'
import RoomImg2 from '../../public/Images/Room Details/detail1.jpg'
import RoomImg3 from '../../public/Images/Room Details/detail2.jpg'
import RoomImg4 from '../../public/Images/Room Details/detail3.jpg'
import RoomImg5 from '../../public/Images/Room Details/detail4.jpg'
import RoomOverview from '../Components/Room-Details/RoomOverview'
import PricingDetails from '../Components/Room-Details/PricingDetails'
import Ammenites from '../Components/Ammenites'
import ExploreRooms from '../Components/Room-Details/ExploreRooms'

const RoomDetails = () => {
  return (
    <>
    <div>
        <BreadCrumb setTitle={"Our Rooms"} />
        <div className='flex flex-col px-6 pt-12 md:pt-24'>
            <h2 className='text-center text-3xl md:text-6xl tracking-wider uppercase'>Beachfront Bungalow</h2>
            <div className='mt-4 md:mt-8 md:grid grid-cols-2 gap-4 md:h-160'>
                <img src={RoomImg1} alt="Room Image" className='h-80 md:h-full w-full object-cover mb-4' />
                <div className='grid grid-cols-2 gap-4 '>
                    <img src={RoomImg2} alt="Room Image" className='h-40 md:h-80 w-full object-cover' />
                    <img src={RoomImg3} alt="Room Image" className='h-40 md:h-80 w-full object-cover' />
                    <img src={RoomImg4} alt="Room Image" className='h-40 md:h-80 w-full object-cover' />
                    <img src={RoomImg5} alt="Room Image" className='h-40 md:h-80 w-full object-cover' />
                </div>
            </div>
            <div className='flex flex-col-reverse md:grid grid-cols-3 gap-4 mt-6 md:mt-12'>
               <div className='col-span-2'>
                 <RoomOverview />
               </div>
               <PricingDetails />
            </div>
        </div>
        <Ammenites  setCol={"md:grid grid-cols-5 gap-4"} setHeight={"md:h-60"} />
        <ExploreRooms />
    </div>
    </>
  )
}

export default RoomDetails
