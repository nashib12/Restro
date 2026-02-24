import React from 'react'
import LogoImg from '../../public/Images/Logo.svg'
import FacebookImg from '../../public//Icons/facebook.png'
import InstagramImg from '../../public//Icons/instagram.png'
import LinkdeinImg from '../../public//Icons/linkedin.png'
import TikTokImg from '../../public//Icons/tik-tok.png'
import PhoneImg from '../../public/Icons/phone.png'
import HomeImg from '../../public/Icons/home.png'
import EnvelopeImg from '../../public/Icons/envelope.png'

const Footer = () => {
  return (
   <>
   <footer className='bg-black border-t border-gray-500'>
      <div className='grid md:grid-cols-3 gap-8 px-6 py-12 md:py-24 text-white'>
        <div className='flex flex-col gap-4'>
          <img src={LogoImg} alt="Logo Image" className='h-16 w-auto object-contain shrink-0' />
          <p className='tracking-wide text-lg'>Be the first to know about exclusive offers, seasonal discounts, and expert laundry tips. Sign up today for a fresher tomorrow!</p>

          <div className='mt-12 flex gap-4'>
            <button className='rounded-full bg-white h-14 w-14 flex items-center justify-center cursor-pointer hover:bg-[#153E4D] group'><img src={FacebookImg} alt="Facebook Image" className='h-4 w-4 object-contain shrink-0 group-hover:invert' /></button>
            <button className='rounded-full bg-white h-14 w-14 flex items-center justify-center cursor-pointer hover:bg-[#153E4D] group'><img src={InstagramImg} alt="Facebook Image" className='h-4 w-4 object-contain shrink-0 group-hover:invert' /></button>
            <button className='rounded-full bg-white h-14 w-14 flex items-center justify-center cursor-pointer hover:bg-[#153E4D] group'><img src={LinkdeinImg} alt="Facebook Image" className='h-4 w-4 object-contain shrink-0 group-hover:invert' /></button>
            <button className='rounded-full bg-white h-14 w-14 flex items-center justify-center cursor-pointer hover:bg-[#153E4D] group'><img src={TikTokImg  } alt="Facebook Image" className='h-4 w-4 object-contain shrink-0 group-hover:invert' /></button>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-6 border-b border-white md:border-0 py-12'>
          <div>
              <h3 className='uppercase text-xl md:text-3xl mb-6'>Quick Links</h3>
              <ul className='flex flex-col gap-4 px-2 md:text-lg'>
                <li>Home</li>
                <li>About us</li>
                <li>Our Rooms</li>
                <li>Blogs</li>
              </ul>
          </div>
          <div>
              <h3 className='uppercase text-xl md:text-3xl mb-6'>Our Service</h3>
              <ul className='flex flex-col gap-4 px-2 md:text-lg'>
                <li>Contact us</li>
                <li>Gallery</li>
                <li>Hotel Amenities</li>
                <li>Licensing</li>
              </ul>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
              <h3 className='uppercase text-3xl mb-6'>Contact Us</h3>
              <div className='flex items-center gap-4'>
                <button className='flex items-center justify-center bg-[#153E4D] rounded-full h-12 w-12'><img src={HomeImg} alt="Home Image" className='h-4 w-4 object-contain shrink-0 invert' /></button>
                <p className='tracking-wide md:text-lg'>4517 Washington Ave. Manchester, Kentucky 39495.</p>
              </div>
              <div className='flex items-center gap-4'>
                <button className='flex items-center justify-center bg-[#153E4D] rounded-full h-12 w-12'><img src={PhoneImg} alt="Home Image" className='h-4 w-4 object-contain shrink-0 invert' /></button>
                <p className='tracking-wide md:text-lg'>(406) 555-0120</p>
              </div>
              <div className='flex items-center gap-4'>
                <button className='flex items-center justify-center bg-[#153E4D] rounded-full h-12 w-12'><img src={EnvelopeImg} alt="Home Image" className='h-4 w-4 object-contain shrink-0 invert' /></button>
                <p className='tracking-wide md:text-lg'>support@nexoy.com</p>
              </div>
        </div>
      </div>
   </footer>
   </>
  )
}

export default Footer
