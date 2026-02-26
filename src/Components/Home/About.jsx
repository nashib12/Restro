import React from 'react'
import AboutImg1 from '../../../public/Images/Home-page/about1.jpg';
import AboutImg2 from '../../../public/Images/Home-page/about2.jpg';
import { Link } from 'react-router-dom';

const About = () => {
  return (
   <>
    <section id='about' className='px-6 py-12 md:py-24'>
        <div className='md:grid grid-cols-[auto_1fr]  gap-8'>
            <img src={AboutImg1} alt="About Image" className='h-100 w-full md:h-180 md:w-auto object-cover ' />
            <div className='flex flex-col gap-6 md:gap-12'>
                <div className='pt-6 md:pt-0'>
                    <p className='uppercase text-lg mb-3'>About Us</p>
                    <h2 className='text-3xl leading-12 tracking-wide md:text-5xl md:leading-16 md:tracking-wider uppercase'>Welcome to Resorto Your Home by the Sea and Hill</h2>   
                </div>
                <div className='md:grid grid-cols-2 gap-6'>
                    <div >
                        <p className='mb-6 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                        <ul className='list-disc flex flex-col gap-3 md:mb-8 pl-6'>
                            <li>Sed ut perspiciatis unde omnis iste .</li>
                            <li> natus error sit voluptatem accusantium doloremque.</li>
                            <li>laudantium totam rem aperiam, eaque ipsa quae.</li>
                            <li>ab illo inventore veritatis et quasi architecto beatae .</li>
                        </ul>
                        <Link to={'/about-us'}><button className='uppercase border border-black hover:bg-black hover:text-white cursor-pointer text-center w-60 h-12'>Read More</button></Link>
                    </div>
                        <img src={AboutImg2} alt="About Image" className='h-100 w-full md:h-126 md:w-auto mt-8 md:mt-0 object-cover' />
                </div>
            </div>
        </div>
        <div className='text-center flex flex-col px-6 pt-12'>
           <div className='mb-8 md:mb-14'>
             <p className='text-lg md:text-2xl tracking-wide uppercase'>Resorto at Glance</p>
            <h2 className='uppercase text-2xl leading-10 md:text-5xl tracking-wide md:tracking-wider mt-2 md:mt-4'>Delivering Excellence, One Stay at a time</h2>
           </div>
           <div className='grid md:grid-cols-4 gap-6'>
                <div className='flex border-b border-b-gray-600 md:border-0 py-2'>
                    <h3 className='text-[#14242A] text-5xl md:text-8xl'>8</h3>
                    <h3 className='text-[#14242A] text-5xl md:text-8xl'>3</h3>
                    <h3 className='text-lg uppercase tracking-wider text-start pl-4 md:pl-0'>Total <br className='hidden md:block' />Reviews</h3>
                </div>
                <div className='flex border-b border-b-gray-600 md:border-b-0 md:border-l md:border-l-gray-600 py-2 md:pl-6'>
                    <h3 className='text-[#14242A] text-5xl md:text-8xl'>4</h3>
                    <h3 className='text-[#14242A] text-5xl md:text-8xl'>2</h3>
                    <h3 className='text-lg uppercase tracking-wider text-start pl-4 md:pl-0'>Years Of <br className='hidden md:block' />Experience</h3>
                </div>
                <div className='flex border-b border-b-gray-600 md:border-b-0 md:border-l md:border-l-gray-600 py-2 md:pl-6'>
                    <h3 className='text-[#14242A] text-5xl md:text-8xl'>6</h3>
                    <h3 className='text-[#14242A] text-5xl md:text-8xl'>7</h3>
                    <h3 className='text-lg uppercase tracking-wider text-start pl-4 md:pl-0'>Luxury <br className='hidden md:block' />Rooms</h3>
                </div>
                <div className='flex border-b border-b-gray-600 md:border-b-0 md:border-l md:border-l-gray-60 py-2 md:pl-6'>
                    <h3 className='text-[#14242A] text-5xl md:text-8xl'>9</h3>
                    <h3 className='text-[#14242A] text-5xl md:text-8xl'>8</h3>
                    <h3 className='text-lg uppercase tracking-wider text-start pl-4 md:pl-0'>Satisfaction <br className='hidden md:block' />Rate</h3>
                </div>
           </div>
        </div>
    </section>
   </>
  )
}

export default About
