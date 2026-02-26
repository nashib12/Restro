import React from 'react'
import ButtonImg from '../../public/Icons/up-arrow.png'

const BackToTop = () => {
  return (
  <>
    <div className='fixed bottom-10 right-6  z-100'>
      <button onClick={() => window.scrollTo({top : 0, left : 0, behavior : "smooth"})} className='flex items-center justify-center cursor-pointer h-12 w-12 opacity-80 rounded-md bg-[#153E4D]'>
        <img src={ButtonImg} alt="Scroll Button" className='h-6 w-6 object-contain shrink-0 invert' />
      </button>
    </div>
  </>
  )
}

export default BackToTop
