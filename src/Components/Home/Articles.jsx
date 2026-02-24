import React from 'react'
import ArticleImg1 from '../../../public/Images/Home-page/article1.avif'
import ArticleImg2 from '../../../public/Images/Home-page/article2.avif'

const Articles = () => {
  return (
    <>
    <section id="articles">
        <div className='px-6 py-12 md:py-24 flex flex-col'>
            <div className='flex flex-col gap-4 items-center justify-center mb-4 md:mb-8'>
                <p className='text-xl tracking-wide uppercase'>Articles</p>
                <h2 className='text-3xl md:text-5xl tracking-wider uppercase'>Articles to Read</h2>
            </div>
            <div className='grid md:grid-cols-2 gap-8'>
                <div className='md:relative text-white'>
                    <img src={ArticleImg1} alt="Article Image" className='w-full h-60 md:w-120 md:h-100 object-cover rounded-lg' />
                    <div className='md:absolute mt-2 bg-black/90 border border-black/90 bottom-2 -right-2 flex flex-col gap-4 rounded-lg px-4 py-4 w-full md:w-90'>
                        <p>Corporate - September 30, 2024</p>
                        <h2 className='text-2xl tracking-wide leading-10'>How to build a strong brand identity</h2>
                        <div className='border border-white' />
                        <button className='cursor-pointer h-8 w-24 py-2'>View Details</button>
                    </div>
                </div>
                <div className='md:relative text-white'>
                    <img src={ArticleImg2} alt="Article Image" className='w-full h-60 md:w-120 md:h-100 object-cover rounded-lg' />
                    <div className='md:absolute mt-2 bg-black/90 border border-black/90 bottom-2 -right-2 flex flex-col gap-4 rounded-lg px-4 py-4 w-full md:w-90'>
                        <p>Media - September 30, 2024</p>
                        <h2 className='text-2xl tracking-wide leading-10'>Top networking agencies in the world</h2>
                        <div className='border border-white' />
                        <button className='cursor-pointer h-8 w-24 py-2'>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Articles
