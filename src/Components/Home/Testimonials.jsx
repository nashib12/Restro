import React from 'react'
import QuoteImg from '../../../public/Icons/quote.png';
import RatingImg from '../../../public/Icons/rating.png'
import ProfileImg from '../../../public/Images/profile.jpg'

const Testimonials = () => {
  return (
  <>
  <section id="testimonials">
    <div className='flex px-6 md:px-12 flex-col'>
         <div className='flex flex-col items-center justify-center mb-4 md:mb-8'>
            <span className='text-xl tracking-wide'>Testimonials</span>
            <h3 className='text-3xl md:text-6xl tracking-wider uppercase mt-4 text-center'>Review From our Customers</h3>
         </div>
        <div className='grid md:grid-cols-3 gap-4 md:gap-8'>
            <div className='bg-black/90 text-white border border-black/70 flex flex-col px-8 py-4 shadow-xs rounded-xl'>
                <div className='flex justify-between'>
                    <img src={QuoteImg} alt="Quote Img" className='invert h-12 w-12 object-contain shrink-0'  />
                    <img src={RatingImg} alt="Rating Img" className='invert h-12 w-12 object-contain shrink-0'  />
                </div>
                <p className='py-4 text-justify'>"Dolor sunt ullamco cupidatat ut adipisicing ex ad reprehenderit quis deserunt.Elit et excepteur ad voluptate dolor magna veniam quis.Tempor aliquip irure sunt Lorem esse sit fugiat laborum ex aute veniam deserunt sit."</p>
                <div className='flex items-center gap-4'>
                    <img src={ProfileImg} alt="Profile Img" className=' h-16 w-16 rounded-full object-cover' />
                    <div className='flex flex-col '>
                        <p>Jhon Doe</p>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            <div className='bg-black/90 text-white border border-black/70 flex flex-col px-8 py-4 shadow-xs rounded-xl'>
                <div className='flex justify-between'>
                    <img src={QuoteImg} alt="Quote Img" className='invert h-12 w-12 object-contain shrink-0'  />
                    <img src={RatingImg} alt="Rating Img" className='invert h-12 w-12 object-contain shrink-0'  />
                </div>
                <p className='py-4 text-justify'>"Dolor sunt ullamco cupidatat ut adipisicing ex ad reprehenderit quis deserunt.Elit et excepteur ad voluptate dolor magna veniam quis.Tempor aliquip irure sunt Lorem esse sit fugiat laborum ex aute veniam deserunt sit."</p>
                <div className='flex items-center gap-4'>
                    <img src={ProfileImg} alt="Profile Img" className=' h-16 w-16 rounded-full object-cover' />
                    <div className='flex flex-col '>
                        <p>Jhon Doe</p>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            <div className='bg-black/90 text-white border border-black/70 flex flex-col px-8 py-4 shadow-xs rounded-xl'>
                <div className='flex justify-between'>
                    <img src={QuoteImg} alt="Quote Img" className='invert h-12 w-12 object-contain shrink-0'  />
                    <img src={RatingImg} alt="Rating Img" className='invert h-12 w-12 object-contain shrink-0'  />
                </div>
                <p className='py-4 text-justify'>"Dolor sunt ullamco cupidatat ut adipisicing ex ad reprehenderit quis deserunt.Elit et excepteur ad voluptate dolor magna veniam quis.Tempor aliquip irure sunt Lorem esse sit fugiat laborum ex aute veniam deserunt sit."</p>
                <div className='flex items-center gap-4'>
                    <img src={ProfileImg} alt="Profile Img" className=' h-16 w-16 rounded-full object-cover' />
                    <div className='flex flex-col '>
                        <p>Jhon Doe</p>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            <div className='hidden bg-black/90 text-white border border-black/70 md:flex flex-col px-8 py-4 shadow-xs rounded-xl'>
                <div className='flex justify-between'>
                    <img src={QuoteImg} alt="Quote Img" className='invert h-12 w-12 object-contain shrink-0'  />
                    <img src={RatingImg} alt="Rating Img" className='invert h-12 w-12 object-contain shrink-0'  />
                </div>
                <p className='py-4 text-justify'>"Dolor sunt ullamco cupidatat ut adipisicing ex ad reprehenderit quis deserunt.Elit et excepteur ad voluptate dolor magna veniam quis.Tempor aliquip irure sunt Lorem esse sit fugiat laborum ex aute veniam deserunt sit."</p>
                <div className='flex items-center gap-4'>
                    <img src={ProfileImg} alt="Profile Img" className=' h-16 w-16 rounded-full object-cover' />
                    <div className='flex flex-col '>
                        <p>Jhon Doe</p>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            <div className='hidden bg-black/90 text-white border border-black/70 md:flex flex-col px-8 py-4 shadow-xs rounded-xl'>
                <div className='flex justify-between'>
                    <img src={QuoteImg} alt="Quote Img" className='invert h-12 w-12 object-contain shrink-0'  />
                    <img src={RatingImg} alt="Rating Img" className='invert h-12 w-12 object-contain shrink-0'  />
                </div>
                <p className='py-4 text-justify'>"Dolor sunt ullamco cupidatat ut adipisicing ex ad reprehenderit quis deserunt.Elit et excepteur ad voluptate dolor magna veniam quis.Tempor aliquip irure sunt Lorem esse sit fugiat laborum ex aute veniam deserunt sit."</p>
                <div className='flex items-center gap-4'>
                    <img src={ProfileImg} alt="Profile Img" className=' h-16 w-16 rounded-full object-cover' />
                    <div className='flex flex-col '>
                        <p>Jhon Doe</p>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            <div className='hidden bg-black/90 text-white border border-black/70 md:flex flex-col px-8 py-4 shadow-xs rounded-xl'>
                <div className='flex justify-between'>
                    <img src={QuoteImg} alt="Quote Img" className='invert h-12 w-12 object-contain shrink-0'  />
                    <img src={RatingImg} alt="Rating Img" className='invert h-12 w-12 object-contain shrink-0'  />
                </div>
                <p className='py-4 text-justify'>"Dolor sunt ullamco cupidatat ut adipisicing ex ad reprehenderit quis deserunt.Elit et excepteur ad voluptate dolor magna veniam quis.Tempor aliquip irure sunt Lorem esse sit fugiat laborum ex aute veniam deserunt sit."</p>
                <div className='flex items-center gap-4'>
                    <img src={ProfileImg} alt="Profile Img" className=' h-16 w-16 rounded-full object-cover' />
                    <div className='flex flex-col '>
                        <p>Jhon Doe</p>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  </section>
  </>
  )
}

export default Testimonials
