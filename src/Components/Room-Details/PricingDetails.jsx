import React from 'react'
import BathroomImg from '../../../public/Icons/bathroom.png'
import AreaImg from '../../../public/Icons/navigator.png'
import BedImg from '../../../public/Icons/bed.png'
import PeopleImg from '../../../public/Icons/people.png'
import PriceTagImg from '../../../public/Icons/price-tag.png'
import ParkingImg from '../../../public/Icons/parking.png'
import LuaggageImg from '../../../public/Icons/suitcase.png'
import WifiImg from '../../../public/Icons/wifi-router.png'
import LaundaryImg from '../../../public/Icons/washing-machine.png'
import SwimImg from '../../../public/Icons/swim.png'
import { Link } from 'react-router-dom'

const PricingDetails = ({onDisplayData}) => {
  return (
    <div className='md:sticky top-8 bg-[#153E4D] text-white px-6 md:px-10 py-8 flex flex-col gap-2 h-230'>
      <h2 className='text-3xl tracking-wider uppercase'>Room Details</h2>
      <div className='border border-white w-40 mt-1 mb-6' />
      <div className='flex flex-col w-full'>
        <div className='flex justify-between'>
            <div className='flex items-center justify-center gap-2'>
                <img src={BedImg} alt="Bed Image" className='h-5 w-5 object-cover invert' />
                <span>{onDisplayData.roomDetails.noOfBeds}</span>
            </div>
            <div className='flex items-center justify-center gap-2'>
                <img src={BathroomImg} alt="Bathroom Image" className='h-5 w-5 object-cover invert' />
                <span>{onDisplayData.roomDetails.noOfBaths}</span>
            </div>
        </div>
        <div className='flex justify-between mt-4'>
            <div className='flex items-center justify-center gap-2'>
                <img src={PeopleImg} alt="People Image" className='h-5 w-5 object-cover invert' />
                <span>{onDisplayData.roomDetails.noOfPeople}</span>
            </div>
            <div className='flex items-center justify-center gap-2'>
                <img src={AreaImg} alt="Area Image" className='h-5 w-5 object-cover invert' />
                <span>{onDisplayData.roomDetails.area}</span>
            </div>
        </div>
      </div>
      <div className='flex items-center justify-center gap-2 border-y border-white py-4 my-12'>
            <img src={PriceTagImg} alt="Proce Tag" className='h-16 w-16 object-cover invert' />
            <p className='tracking-wider text-5xl'>{onDisplayData.roomDetails.price}</p>
            <p>/ Per Night</p>
      </div>
       <h2 className='text-xl md:text-2xl tracking-wider uppercase'>Complementary Services</h2>
      <div className='border border-white w-40 mt-1 mb-6' />
      <div className='flex items-center gap-2 text-lg mb-4'>
        <img src={ParkingImg} alt="Parking Image" className='h-12 w-12 object-cover invert' />
        <p>Free On-Site Parking</p>
      </div>
      <div className='flex items-center gap-2 text-lg mb-4'>
        <img src={WifiImg} alt="Wifi Image" className='h-12 w-12 object-cover invert' />
        <p>Free WiFi Access</p>
      </div>
      <div className='flex items-center gap-2 text-lg mb-4'>
        <img src={LaundaryImg} alt="Laundary Image" className='h-12 w-12 object-cover invert' />
        <p>Daily Laundary & Cleaning</p>
      </div>
      <div className='flex items-center gap-2 text-lg mb-4'>
        <img src={SwimImg} alt="Swimming Image" className='h-12 w-12 object-cover invert' />
        <p>Daily 1 Hour Swimming Access</p>
      </div>
      <div className='flex items-center gap-2 text-lg mb-4'>
        <img src={LuaggageImg} alt="Luggage Image" className='h-12 w-12 object-cover invert' />
        <p>Luggage Storage</p>
      </div>
      <Link to={'/book-now'}><button className='mt-3 flex items-center justify-center w-full h-16 cursor-pointer border-black bg-white text-3xl uppercase text-black'>Book Now</button></Link>
    </div>
  )
}

export default PricingDetails
