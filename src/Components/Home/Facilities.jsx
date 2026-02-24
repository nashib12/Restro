import React, { useState } from 'react'
import BgImage from '../../../public/Images/Home-page/hero.jpg'
import GymImg from '../../../public/Images/Home-page/Facilities/gym.jpg';
import SpaImg from '../../../public/Images/Home-page/Facilities/spa.jpg';
import PoolImg from '../../../public/Images/Home-page/Facilities/swimmingpool.jpg';
import DinerImg from '../../../public/Images/Home-page/Facilities/dinner.jpg';

const Facilities = () => {

    const [backgroundImg, setBackgroundImg] = useState(BgImage);
    const [title, setTitle] = useState("Our Facilities")

    const facilitiesList = [
        {id : 1, img : GymImg, title : "Fitness Center", border : "", content : "Develop content that drives traffic and conversions, with engaging blog posts, web copy, and email campaigns."},
        {id : 2, img : SpaImg, title : "Spa Center", border : "border-l border-white", content : "Engage your audience with professional videos and animations, from explainer videos to motion graphics."},
        {id : 3, img : PoolImg, title : "Swimming Pool", border : "border-l border-white", content : "Create a unique brand identity with logo design and visuals that connect with your target audience."},
        {id : 4, img : DinerImg, title : "Restaurant & Dine in", border : "border-l border-white", content : "Boost your website's visibility with tailored SEO strategies, from keyword research to technical optimization."},
    ];

    const changeBackground = ({img, text}) => {
        setBackgroundImg(img);
        setTitle(text);
    
    };

  return (
   <>
    <section id="facilities">
        <div className='py-12 md:py-24'>
            <div className='hidden md:block relative'>
                <img src={backgroundImg} alt="Bg Image" className='h-160 w-full object-cover' />
                <div className='absolute inset-0 bg-black/60' />
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white'>
                    <h2 className='text-7xl tracking-wider uppercase text-center'>{title}</h2>
                </div>
                <div className='absolute inset-0 md:grid grid-cols-4 px-2 text-white'>
                    {facilitiesList.map(item => (
                    <div key={item.id} className={`flex flex-col py-24 justify-end px-4 group ${item.border}`} onMouseEnter={() => changeBackground({img:item.img, text:item.title})} onMouseLeave={() => changeBackground({img:BgImage, text:"Our Facilities"})}>
                        <h3 className='text-2xl md:text-4xl tracking-wide uppercase'>{item.title}</h3>
                        <div className='border border-[#153E4D] my-3'/>
                        <p className='text-justify hidden group-hover:block'>{item.content}</p>
                    </div>
                    ))}
                </div>
            </div>
            <div className='md:hidden flex flex-col'>
                <h2 className='text-center text-3xl mb-4 uppercase tracking-wide'>Our Facilities</h2>
                    {facilitiesList.map(item => (
                        <div key={item.id} className='relative text-white'>
                        <img src={item.img} alt="Facilities Imgae" className='h-90 w-full object-cover' />
                        <div className='absolute inset-0 bg-black/40 w-full'/>
                        <div className='absolute inset-0 flex flex-col justify-end py-6 px-6'>
                             <h3 className='text-2xl uppercase'>{item.title}</h3>
                             <div className='border border-[#153E4D] my-2' />
                        </div>
                    </div>
                    ))}
            </div>
        </div>
    </section>
   </>
  )
}

export default Facilities
