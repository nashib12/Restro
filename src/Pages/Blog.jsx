import React, { useState } from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import DiamondImg from '../../public/Icons/diamond.png'
import PostIImg1 from '../../public/Images/Blogs/blog1.avif'
import PostIImg2 from '../../public/Images/Blogs/blog2.avif'
import PostIImg3 from '../../public/Images/Blogs/blog3.avif'
import PostIImg4 from '../../public/Images/Blogs/blog4.avif'
import PostIImg5 from '../../public/Images/Blogs/blog5.avif'
import PostIImg6 from '../../public/Images/Blogs/blog6.avif'
import PostIImg7 from '../../public/Images/Blogs/blog7.jpg'
import NextImg from '../../public/Icons/next.png'
import SearchImg from '../../public/Icons/search.png'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import CloseImg from '../../public/Icons/close.png'

const Blog = () => {
    const tags = ["Agency", "Corporate", "Media", "Design"];
    
    const blogLists = [
        {id : 1, tag : "Corporate", title : "How to Build a Strong Brand Identity", date : "February 25, 2026", img : PostIImg1},
        {id : 2, tag : "Media", title : "Top Networking Agencies In The World", date : "February 25, 2026", img : PostIImg2},
        {id : 3, tag : "Corporate", title : "Understanding SEO for Agencies", date : "February 25, 2026", img : PostIImg3},
        {id : 4, tag : "Agency", title : "Effective Client Communication Strategies", date : "February 25, 2026", img : PostIImg4},
        {id : 5, tag : "Media", title : "Measuring Success in Agency Marketing", date : "February 25, 2026", img : PostIImg5},
        {id : 6, tag : "Design", title : "Content Marketing Tips for Agencies", date : "February 25, 2026", img : PostIImg6},
    ];


    const featuredPosts = [
        {id : 1, tag : "Corporate", title : "Understanding SEO for Agencies", date : "February 25, 2026", img : PostIImg3},
        {id : 2, tag : "Agency", title : "Effective Client Communication", date : "February 25, 2026", img : PostIImg4},
        {id : 3, tag : "Agency", title : "The Benefits of Email Marketing", date : "February 25, 2026", img : PostIImg7},

    ];

    const [activeTag, setActiveTag] = useState(null);
    const filteredPost = activeTag === null ? blogLists : blogLists.filter(post => post.tag === activeTag);

  return (
    <>
        <div>
            <BreadCrumb setTitle={"Blogs"} />
            <div className='px-6 py-8 md:py-20 md:grid grid-cols-3 gap-12'>
                <div className='col-span-2'>
                    <div className='grid md:grid-cols-2 md:gap-8'>
                        {filteredPost.map(post => (
                        <div key={post.id} className='pt-4 md:relative group'>
                            <img src={post.img} alt={post.title} className='h-80 md:h-120 object-cover w-full md:w-90 group-hover:scale-105 transition-transform duration-300 ease-out overflow-hidden' />
                            <div className='md:absolute -bottom-3 -right-4 px-4 py-4 md:px-6 md:py-6 w-full md:w-100 mt-2 flex flex-col gap-2 bg-black text-white'>
                                <div className='flex gap-4'>
                                    <span>{post.tag}</span>
                                    <img src={DiamondImg} alt="Diamond Image" className='h-4 w-4 obkect-cover invert' />
                                    <span>{post.date}</span>
                                </div>
                                <h2 className='text-2xl md:text-3xl tracking-wide uppeercase leading-10'>{post.title}</h2>
                                <div className='my-2 md:my-4 border border-white' />
                                <a href="#" className=' text-xl border-b border-white w-27 py-1 cursor-pointer'>View Details</a>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className='flex items-center justify-center mt-4 md:mt-12 mb-8'>
                        <button className='rounded-md flex items-center justify-center bg-white border-2 border-black gap-1 hover:bg-[#153E4D] hover:text-white group text-xl h-12 w-36 cursor-pointer'>Next <img src={NextImg} alt="Next Button" className='h-5 w-5 object-cover group-hover:invert' /> </button> 
                    </div>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <div className='border border-black rounded-md flex gap-2 items-center w-full'>
                        <input type="text" placeholder='Search...' className='outline-none text-xl px-2 py-2 border-r w-full' />
                        <img src={SearchImg} alt="Search Image" className='h-5 w-5 object-cover ml-2 mr-3' />
                    </div>
                    <div className='bg-[#153E4D] text-white uppercase mt-4 md:mt-6 px-4 py-2 text-2xl tracking-wider w-full h-14 rounded-md flex items-center'> Featured Posts</div>
                    {featuredPosts.map(post => (
                    <div key={post.id} className='md:grid grid-cols-2 gap-2 md:h-50'>
                        <div className='relative'>
                            <img src={post.img} alt={post.title} className='w-full md:h-full object-cover' />
                            <button className='flex items-center justify-center absolute top-2 left-2 h-8 w-24 bg-black text-white'>Corporate</button>
                        </div>
                        <div className='flex flex-col gap-2 px-2 w-full py-4 justify-end bg-black text-white mt-2 md:mt-0'>
                            <span>{post.date}</span>
                            <h2 className='text-2xl leading-8 tracking-wide hover:text-[#153E4D]'>{post.title}</h2>
                            <div className='my-2 border border-white' />
                            <button className='py-2 border-b border-white text-xl cursor-pointer w-26'>Read More</button>
                        </div>

                    </div>
                    ))}
                    <div className='bg-[#153E4D] text-white uppercase mt-4 md:mt-6 px-4 py-2 text-2xl tracking-wider w-full h-14 rounded-md flex items-center justify-between'> Categories <button className={`${activeTag !== null ? "block" : "hidden"} flex items-center justify-center gap-2 bg-black cursor-pointer h-10 w-36 rounded-md text-sm shsdow-sm`} onClick={() => setActiveTag(null)}> <img src={CloseImg} alt="Close Button" className='h-4 w-4 object-contain shrink-0 invert' /> Clear Filter</button></div>
                    <ul className='w-full px-2'>
                        {tags.map((tag, index) => (
                            <li onClick={() => setActiveTag(tag)} key={index} className='mb-3 flex gap-1 items-center border-b transition-all duration-300 ease-in hover:scale-95  hover:translate-x-1 hover:text-[#153E4D] cursor-pointer text-xl pb-2'><MdOutlineKeyboardArrowRight size={32} />{tag}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Blog
