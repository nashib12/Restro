import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import Faq from '../Components/About/Faq'
import DiamondImg from '../../public/Icons/diamond.png'
import MailImg from '../../public/Icons/envelope.png'
import PhoneImg from '../../public/Icons/phone.png'
import LocationImg from '../../public/Icons/office-building.png'
import ContactImg1 from '../../public/Images/Contact/contact1.avif'
import ContactImg2 from '../../public/Images/Contact/contact2.avif'
import ContactImg3 from '../../public/Images/Contact/contact3.avif'
import ContactImg4 from '../../public/Images/Contact/contact4.avif'

const Contact = () => {

    const conatctList = [
        {id : 1, img : ContactImg1, title : "Mail Us", contactImg : MailImg, contact1 : "nxbusiness@gmail.com", contact2 : "nexoyXX@gmail.com"},
        {id : 2, img : ContactImg2, title : "Visit Our Office", contactImg : LocationImg, contact1 : "9261 Candice Trail,", contact2 : "North Carolina"},
        {id : 3, img : ContactImg3, title : "Visit OUr Office", contactImg : LocationImg, contact1 : "100 Oxford Street,", contact2 : "London W1D 1LL UK"},
        {id : 4, img : ContactImg4, title : "Call Us", contactImg : PhoneImg, contact1 : "(800) 555‑0XX5", contact2 : "(415) 555‑0XX2"},
    ];

  return (
    <div>
      <BreadCrumb setTitle={"Contact Us"} />
      <div className='px-6 py-12 md:py-24 flex flex-col gap-2'>
        <div className='flex gap-2'>
            <img src={DiamondImg} alt="Diamond Image" className='animate-spin h-6 w-6 object-cover' />
            <span className='text-lg md:text-xl'>Contact Us</span>
        </div>
        <h2 className='text-3xl md:text-5xl tracking-wide uppercase'>Get in Touch With us</h2>
        <div className='mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8'>
            {conatctList.map(item => (
            <div key={item.id} className='relative w-full h-60 md:h-70 overflow-hidden rounded-md group'>
                <img src={item.img} alt="Contact Image" className='h-full w-full object-cover scale-110 group-hover:scale-100 transition-transform transform duration-300 ease-in rounded-md' />
                <div className='bg-black/90 absolute inset-0 group-hover:bg-black/40 transition-colors duration-300 ease-in rounded-md ' />
                <div className='absolute inset-0'>
                    <div className='h-full flex items-center justify-center gap-2 flex-col text-white'>
                        <img src={item.contactImg} alt="Mail Image" className='h-12 w-12 object-cover invert' />
                        <h2 className='uppercase text-2xl tracking-wider mb-3'>{item.title}</h2>
                        <p className='leading-2'>{item.contact1}</p>
                        <p>{item.contact2}</p>
                    </div>
                </div>

            </div>
            ))}
           
        </div>

      </div>
      <div className='md:max-w-3xl mx-auto px-6 md:px-24 flex flex-col items-center justify-center'>
        <h2 className='text-3xl md:text-5xl tracking-wide mb-6 md:mb-12 uppercase'>Let's Get in Touch</h2>
        <form >
            <input type="email" placeholder='example@example.com' className='outline-none p-2 border-b border-black text-2xl w-full mb-6' />
            <input type="text" placeholder='Full name' className='outline-none p-2 border-b border-black text-2xl w-full mb-6' />
            <textarea placeholder='write your message...' className='outline-none p-2 border-b border-black text-2xl w-full mb-6' rows="6"></textarea>
            <button className='w-full h-14 md:h-16 flex items-center justify-center text-xl md:text-2xl border border-black hover:bg-black hover:text-white cursor-pointer transition-colors duration-500 ease-in-out '>Send Message</button>
        </form>

      </div>
        <Faq />
    </div>
  )
}

export default Contact
