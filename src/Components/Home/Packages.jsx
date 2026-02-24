import React from 'react'
import WeekendImg from '../../../public/Images/Home-page/weekend.jpg'
import FamilyImg from '../../../public/Images/Home-page/family.jpg'
import HoneymoonImg from '../../../public/Images/Home-page/honeymoon.jpg'

const Packages = () => {
  return (
   <>
   <section id="packages">
    <div className='px-6'>
        <div className='md:max-w-3xl mx-auto flex flex-col gap-4 items-center'>
            <p className='text-xl tracking-wide uppercase'>Our Packages</p>
            <h2 className='text-3xl md:text-5xl tracking-wider uppercase'>Packages We Offer</h2>
        </div>
        <div className='md:grid grid-cols-3 gap-8 text-white'>
            <div className='relative h-160 md:h-220 overflow-hidden cursor-pointer group mt-6 md:mt-16'>
                <img src={WeekendImg} alt="Weekend Image" className='h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105'  />
                <div className='absolute inset-0 bg-black/40 ' />
                <h2 className='hidden md:block absolute bottom-94 -left-84 uppercase transform -rotate-90 text-5xl tracking-wider group-hover:hidden'>Weekend Retreat Package</h2>
                <div className='block md:hidden group-hover:block absolute inset-0 m-6 border-2 border-white px-4 md:px-6 py-6 md:py-12'>
                    <div className='grid grid-rows-[auto_1fr_auto] gap-6 text-center h-full'>
                        <h2 className='uppercase text-3xl md:text-4xl tracking-wide md:leading-12'>Weekend Retreat Package</h2>
                        <p>Celebrate love in paradise with our romantic escape made just for two. Enjoy a dreamy stay with ocean views, spa indulgence, and candlelit dinners.</p>
                        <p className='text-3xl tracking-wide font-semibold'>$999.00</p>
                    </div>
                </div>
            </div>
            <div className='relative h-160 md:h-220 overflow-hidden cursor-pointer group mt-6 md:mt-24'>
                <img src={FamilyImg} alt="Weekend Image" className='h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105'  />
                <div className='absolute inset-0 bg-black/40 ' />
                <h2 className='hidden md:block absolute bottom-94 -left-84 uppercase transform -rotate-90 text-5xl tracking-wider group-hover:hidden'>Weekend Retreat Package</h2>
                <div className='block md:hidden group-hover:block absolute inset-0 m-6 border-2 border-white px-4 md:px-6 py-6 md:py-12'>
                    <div className='grid grid-rows-[auto_1fr_auto] gap-6 text-center h-full'>
                        <h2 className='uppercase text-3xl md:text-4xl tracking-wide md:leading-12'>Family Fun Gateway</h2>
                        <p>Celebrate love in paradise with our romantic escape made just for two. Enjoy a dreamy stay with ocean views, spa indulgence, and candlelit dinners.</p>
                        <p className='text-3xl tracking-wide font-semibold'>$999.00</p>
                    </div>
                </div>
            </div>
            <div className='relative h-160 md:h-220 overflow-hidden cursor-pointer group mt-6 md:mt-36'>
                <img src={HoneymoonImg} alt="Weekend Image" className='h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105'  />
                <div className='absolute inset-0 bg-black/40' />
                <h2 className='hidden md:block absolute bottom-94 -left-84 uppercase transform -rotate-90 text-5xl tracking-wider group-hover:hidden'>Weekend Retreat Package</h2>
                <div className='block md:hidden group-hover:block absolute inset-0 m-6 border-2 border-white px-4 md:px-6 py-6 md:py-12'>
                    <div className='grid grid-rows-[auto_1fr_auto] gap-6 text-center h-full'>
                        <h2 className='uppercase text-3xl md:text-4xl tracking-wide md:leading-12'>Honeymoon Package</h2>
                        <p>Celebrate love in paradise with our romantic escape made just for two. Enjoy a dreamy stay with ocean views, spa indulgence, and candlelit dinners.</p>
                        <p className='text-3xl tracking-wide font-semibold'>$999.00</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </section>
   </>
  )
}

export default Packages
