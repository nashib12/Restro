import React from 'react'
import BlogBgImage from '../../public/Images/Blogs/blog1.avif'
import BlogImage from '../../public/Images/Blogs/blog5.avif'
import ProfileImage from '../../public/Images/Blogs/profile1.avif'

const BlogDetail = () => {
  return (
   <>
    <div className='relative'>
        <img src={BlogBgImage} alt="Blog Bg" className='h-100 md:h-160 w-full md:w-screen object-cover' />
        <div className='absolute inset-0 bg-black/60' />
        <div className='w-90 rounded-md md:w-230 bg-black border-black/20 absolute -bottom-24 left-1/2 -translate-x-1/2'>
            <div className='flex flex-col items-center justify-center px-4 py-6 md:px-6 md:py-12 text-white'>
                <button className='bg-[#153E4D] text-center h-8 md:h-12 w-24 md:text-lg'>Corporate</button>
                <h1 className='mt-3 text-2xl md:text-7xl tracking-wide md:tracking-wider md:leading-18 text-center'>How to build a strong brand identity</h1>
                <div className='flex flex-col md:flex-row items-center justify-center gap-2 mt-3'>
                    <div className='flex flex-col md:flex-col items-center justify-center gap-2'>
                        <img src={ProfileImage} alt="Profile Image" className='h-8 w-8 md:h-14 md:w-14 rounded-full object-cover' />
                        <h2>Sara Lee </h2>
                    </div>
                    <div className='md:border-l border-white px-3 flex gap-1'>
                         <span className='uppercase text-lg'>Last Updated:</span>
                         <span>June 23, 2025</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='md:max-w-5xl mx-auto px-6 pt-32 pb-12 md:pt-36 md:pb-24 md:px-24'>
        <h2 className='uppercase text-3xl md:text-5xl tracking-wider '>Introduction</h2>
        <p className='mb-3'>We specialize in delivering exceptional services that elevate your business to new heights. Our team is dedicated to providing top-notch solutions tailored to meet your unique needs.</p>
        <p className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non magna sed purus interdum vestibulum. Phasellus ultricies erat sit amet orci accumsan bibendum.</p>
        <h2 className='uppercase text-2xl md:text-4xl tracking-wider mt-6 md:mt-12'>About our Blog</h2>
        <p className='mb-3'>Our approach is rooted in creativity, innovation, and strategic thinking. We work closely with you to ensure every project aligns with your goals.</p>
        <p className='mb-3'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean euismod libero ut lacus fermentum, nec hendrerit orci accumsan.</p>
        <div className='my-6 bg-[#153E4D] px-3 py-6 md:px-6 '>
            <p className='text-2xl md:text-3xl text-white'>"Success is not just about having great ideas; it's about turning those ideas into reality with passion and persistence."</p>
        </div>
        <h2 className='uppercase text-2xl md:text-4xl tracking-wider mt-3 md:mt-6'>Why Choose Us</h2>
        <p className='mb-3'>We follow a streamlined process to ensure timely and high-quality delivery. From concept to completion, we keep you involved every step of the way.</p>
        <ul className='list-disc ml-8 mb-3'>
            <li className='mb-2'>Initial consultation and project planning.</li>
            <li className='mb-2'>Design and development phase.</li>
            <li className='mb-2'>Testing, feedback, and finalization.</li>
        </ul>
        <p>Nullam consectetur lacus in tortor vestibulum, sit amet consectetur nisi accumsan. Fusce dapibus cursus velit.</p>
        <img src={BlogImage} alt="Blog POst" className='w-full h-50 md:h-80 object-cover my-6' />
        <h2 className='uppercase text-2xl md:text-4xl tracking-wider mt-3 md:mt-6'>Popular Updates</h2>
        <p className='mb-3'>We offer a range of features to ensure your project stands out from the competition, combining functionality with aesthetics for the best results.</p>
        <ul className='list-disc ml-8 mb-3'>
            <li className='mb-2'>Customizable solutions tailored to your business.</li>
            <li className='mb-2'>User-friendly interfaces and experiences.</li>
            <li className='mb-2'>Responsive and mobile-ready designs.</li>
        </ul>
        <p className='mb-3'>Cras sit amet libero enim. Integer mollis dui vel odio vehicula, ac tincidunt purus volutpat.</p>
        <h2 className='uppercase text-2xl md:text-4xl tracking-wider mt-3 md:mt-6'>Conclusion</h2>
        <p className='mb-3'>We are committed to delivering excellence in every project. Your success is our priority, and we strive to exceed expectations with each service we provide.</p>
        <p>Mauris convallis lectus non diam volutpat, et consequat risus aliquam. In hac habitasse platea dictumst.</p>
    </div>  
   </>
  )
}

export default BlogDetail
