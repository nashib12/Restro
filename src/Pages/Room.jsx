import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import RoomImg1 from '../../public/Images/Home-page/Rooms/beachfront-bungalow.jpg'
import RoomImg2 from '../../public/Images/Home-page/Rooms/deluxe-ocean.jpg'
import RoomImg3 from '../../public/Images/Home-page/Rooms/garden-suite.jpg'
import RoomImg4 from '../../public/Images/Home-page/Rooms/honeymoon-pool.jpg'
import RoomImg5 from '../../public/Images/Home-page/Rooms/luxury-king.jpg'
import RoomImg6 from '../../public/Images/Home-page/Rooms/mountainview.jpg'
import RoomImg7 from '../../public/Images/Home-page/Rooms/presidental-sea.jpg'
import RoomImg8 from '../../public/Images/Home-page/Rooms/standard-double.jpg'
import BedImg from '../../public/Icons/bed.png'
import GuestImg from '../../public/Icons/people.png'
import { Link } from 'react-router-dom'

const Room = () => {
    const roomList = [
        {id : 1, img : RoomImg1, marginTop : "mt-4 ", title : "Beachfront Bungalow", slug : "beachfront-bungalow", price : "$1000", originalPrice : "", beds : "2 Beds", people : "4 People"},
        {id : 2, img : RoomImg6, marginTop : "mt-4 md:mt-168", title : "Mountain View Queen Room", slug : "mountain-view-queen-room", price : "$550", originalPrice : "", beds : "2 Beds", people : "4 People"},
        {id : 3, img : RoomImg4, marginTop : "mt-4 ", title : "Honeymoon Pool Villa", slug : "honeymoon-pool-villa", price : "$400", originalPrice : "$440", beds : "1 Bed", people : "2 People"},
        {id : 4, img : RoomImg5, marginTop : "mt-4 md:mt-168", title : "Luxury King Room", slug : "luxury-king-room", price : "$600", originalPrice : "", beds : "2 Beds", people : "4 People"},
        {id : 5, img : RoomImg8, marginTop : "mt-4 ", title : "Standard Double Room", slug : "standard-double-room", price : "$500", originalPrice : "$550", beds : "2 Beds", people : "4 People"},
        {id : 6, img : RoomImg7, marginTop : "mt-4 md:mt-168", title : "Presidential Sea View Suite", slug : "presidental-sea-view-suite", price : "$900", originalPrice : "$999", beds : "2 Beds", people : "4 People"},
        {id : 7, img : RoomImg3, marginTop : "mt-4 ", title : "Garden Suite with Balcony", slug : "garden-suite-with-balcony", price : "$280", originalPrice : "$330", beds : "1 Bed", people : "2 People"},
        {id : 8, img : RoomImg2, marginTop : "mt-4 md:mt-168", title : "Deluxe Ocean View Room", slug : "deluxe-ocean-view-room", price : "$320", originalPrice : "$370", beds : "1 Bed", people : "2 People"},
    ];

  return (
    <>
        <div>
            <BreadCrumb setTitle={"Our Rooms"} />
            <div className='md:max-w-6xl mx-auto px-6 py-12 md:py-24 flex flex-col items-center justify-center gap-4'>
                 <p className='text-xl md:text-2xl tracking-wide uppercase'>Rooms</p>
                <h2 className='uppercase text-3xl md:text-6xl tracking-wider text-center'>View Our Beautiful Rooms</h2>
                <div className='mt-4 md:mt-8 md:grid grid-cols-2 gap-4'>
                        {roomList.map(room => (
                            <div key={room.id} className={`${room.marginTop} h-80 md:h-160 w-full  relative group`}>
                                <img src={room.img} alt={room.title} className="h-full w-full object-cover rounded-md shadow-md" />
                                <div className='bg-black/40 absolute inset-0' />
                                <div className='absolute inset-0 transition-color duration-300 ease-in-out group-hover:bg-white/10' />
                                <div className='absolute bottom-2 my-2 mx-4 md:m-6 text-white '>
                                    <div className='flex flex-col overflow-hidden transform transition-transform duration-700 ease-in-out translate-y-10 md:translate-y-40 group-hover:translate-y-0'>
                                    <h2 className='md:tracking-wide text-lg md:text-4xl md:whitespace-nowrap'>{room.title}</h2>
                                    <p className='md:text-lg'>{room.price} <span className='line-through'>{room.originalPrice}</span> / Night</p>
                                    <div className='border-t border-white py-2 md:py-4 md:mt-4'>
                                        <Link to={`/room-details/${room.slug}`} className='cursor-pointer border border-white h-8 md:h-12 w-36 flex items-center justify-center md:text-lg'>View Details</Link>
                                        <div className='flex gap-2 md:gap-12 mt-2 md:mt-4'>
                                            <div className='flex gap-1 md:gap-2 items-center justify-center text-sm md:text-lg'><img src={BedImg} alt={room.title} className='h-4 w-4 md:h-6 md:w-6 invert object-cover' />{room.beds}</div>
                                            <div className='flex gap-1 md:gap-2 items-center justify-center text-sm md:text-lg'><img src={GuestImg} alt={room.title} className='h-4 w-4 md:h-6 md:w-6 invert object-cover' />{room.people}</div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Room
