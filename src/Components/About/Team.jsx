import React from 'react'
import TeamImg1 from '../../../public/Images/About-page/team1.avif'
import TeamImg2 from '../../../public/Images/About-page/team2.avif'
import TeamImg3 from '../../../public/Images/About-page/team3.avif'

import FacebookImg from '../../../public/Icons/facebook.png'
import InstagramImg from '../../../public/Icons/instagram.png'
import TwitterImg from '../../../public/Icons/twitter.png'

const Team = () => {
    const teamList = [
        {id : 1, img: TeamImg1, fName : "Sarah Leah"},
        {id : 2, img: TeamImg2, fName : "Emily Davis"},
        {id : 3, img: TeamImg3, fName : "Mark Jhonson"},
    ];

  return (
    <>
        <section id="team">
            <div className='px-6 md:px-12 flex flex-col items-center justify-center gap-4'>
                <span className='text-lg uppercase tracking-wide'>Team</span>
                <h2 className='text-3xl md:text-5xl tracking-wide uppercase'>Meet Our Team</h2>
                <div className='grid md:grid-cols-3 gap-12 mt-6'>
                {teamList.map(member => (
                    <div key={member.id} className='mt-8 md:mt-24 text-white bg-black w-80 md:w-104 h-100 md:h-120 relative group'>
                        <span className='absolute inset-0 bg-[#153E4D] scale-0 origin-bottom transition-transform duration-300 ease-out group-hover:scale-100 z-0 ' />
                        <img src={member.img} alt={member.fName} className='absolute -top-12 md:-top-24 left-1/2 -translate-x-1/2 h-90 md:h-120 w-70 md:w-90 object-cover' />
                        <div className='absolute bottom-28 left-1/2 -translate-x-1/2 flex items-center gap-6 '>
                            <button className='transition-transform duration-300 origin-center ease-out scale-0 group-hover:scale-100 flex items-center justify-center rounded-full h-12 w-12 border-3 border-white hover:bg-blue-600 cursor-pointer'><img src={FacebookImg} alt="Button Img" className='h-6 w-6 object-contain shrink-0 invert' /></button>
                            <button className='transition-transform duration-300 origin-center ease-out scale-0 group-hover:scale-100 flex items-center justify-center rounded-full h-12 w-12 border-3 border-white hover:bg-blue-600 cursor-pointer'><img src={InstagramImg} alt="Button Img" className='h-6 w-6 object-contain shrink-0 invert' /></button>
                            <button className='transition-transform duration-300 origin-center ease-out scale-0 group-hover:scale-100 flex items-center justify-center rounded-full h-12 w-12 border-3 border-white hover:bg-blue-600 cursor-pointer'><img src={TwitterImg} alt="Button Img" className='h-6 w-6 object-contain shrink-0 invert' /></button>
                        </div>
                        <h2 className='text-3xl md:text-5xl absolute bottom-6 md:bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap uppercase tracking-wide'>{member.fName}</h2>
                    </div>
                ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default Team

