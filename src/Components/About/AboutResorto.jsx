import React from 'react'
import Image1 from '../../../public/Images/About-page/aboutus4.jpg'
import Image2 from '../../../public/Images/About-page/aboutus5.jpg'

const AboutResorto = () => {
  return (
   <>
    <section id="about-resorto">
        <div className='px-6 grid md:grid-cols-2 gap-6 md:gap-36'>
            <div className='flex flex-col gap-2 md:py-12'>
                <span className='uppercase textlg md:text-xl tracking-wide'>Resorto</span>
                <h2 className='uppercase text-2xl md:text-4xl tracking-wide md:leading-8 mb-2'>Where Every Stay Feels Special</h2>
                <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                <button className='mt-8 h-12 w-36 flex items-center justify-center bg-[#153E4D] cursor-pointer text-white'>View Rooms</button>
                <img src={Image1} alt="About Image" className='mt-12 w-full h-80 hidden md:block object-cover' />
            </div>
            <div className='flex flex-col gap-4'>
                <img src={Image2} alt="About Image" className='w-full h-100 md:h-160 object-cover' />
                <div className='flex md:gap-24'>
                    <div className='flex items-center'>
                        <h2 className='text-[#153E4D] text-6xl'>9</h2>
                        <h2 className='text-[#153E4D] text-6xl'>7</h2>
                        <p className='tracking-wide'>Employees Employed</p>
                    </div>
                    <div className='flex items-center'>
                        <h2 className='text-[#153E4D] text-6xl'>1</h2>
                        <h2 className='text-[#153E4D] text-6xl'>6</h2>
                        <p className='tracking-wide'>Total Floors</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
   </>
  )
}

export default AboutResorto
