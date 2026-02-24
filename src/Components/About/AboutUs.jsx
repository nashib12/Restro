import React from 'react'
import AboutImg1 from '../../../public/Images/About-page/aboutus1.jpg'
import AboutImg2 from '../../../public/Images/About-page/aboutus3.jpg'
import AboutImg3 from '../../../public/Images/About-page/aboutus2.jpg'
import IslandImg from '../../../public/Icons/island.png'

const AboutUs = () => {
  return (
    <>
    <section id='about-us'>
        <div className='px-6 flex flex-col items-center justify-center gap-4 py-12 md:py-24 text-center'>
            <p className='text-xl md:text-2xl tracking-wide uppercase'>About Us</p>
            <h2 className='uppercase text-3xl md:text-6xl tracking-wide'>A Resort Experience Like No Other</h2>
            <div className='mt-4 md:mt-8 grid md:grid-cols-3'>
                <div className='relative'>
                    <img src={AboutImg1} alt="About Image" className='w-full h-80 md:h-screen object-cover' />
                    <div className='absolute inset-0 bg-black/40' />
                </div>
                <div className='relative'>
                    <img src={AboutImg2} alt="About Image" className='w-full h-80 md:h-screen object-cover' />
                    <div className='absolute inset-0 bg-black/60' />
                    <div className='absolute inset-0 m-4 md:m-6 border-2 border-white px-6'>
                        <div className='flex flex-col items-center justify-center gap-4 text-white h-full'>
                            <div className='flex items-center gap-2'>
                                <img src={IslandImg} alt="" className='h-8 w-8 object-contain shrink-0' />
                                <p className='text-lg tracking-wide uppercase'>About Resorto</p>
                            </div>
                            <h2 className='text-xl md:text-3xl md:leading-10 tracking-wide uppercase'>Where Comfort Meets Coastal Charm</h2>
                            <button className='flex items-center justify-center text-xl cursor-pointer bg-[#153E4D] w-42 h-16'>View Details</button>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img src={AboutImg3} alt="About Image" className='w-full h-80 md:h-screen object-cover' />
                    <div className='absolute inset-0 bg-black/40' />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default AboutUs
