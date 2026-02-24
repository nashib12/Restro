import React from 'react'

import ChoiceImg1 from '../../../public/Images/About-page/aboutus6.jpg'
import ChoiceImg2 from '../../../public/Images/About-page/aboutus7.jpg'
import ChoiceImg3 from '../../../public/Images/About-page/aboutus8.jpg'
import ChoiceImg4 from '../../../public/Images/About-page/aboutus2.jpg'
import ChoiceImg5 from '../../../public/Images/About-page/aboutus9.jpg'
import ChoiceImg6 from '../../../public/Images/About-page/aboutus1.jpg'

const ChooseUs = () => {
    const choiceList = [
        {id : 3, img : ChoiceImg1, marginTop : "mt-2 md:mt-48", title : "Prime Beachfront Location" , content : "Wake up to the sound of waves and enjoy breathtaking sea views every day."},
        {id : 2, img : ChoiceImg2, marginTop : "mt-2 md:mt-24", title : "Luxury Meets Comfort" , content : "Elegantly designed rooms and suites with modern amenities and cozy vibes."},
        {id : 1, img : ChoiceImg3, marginTop : "mt-2", title : "All-in-One Experience" , content : "Spa, fine dining, pool, and excursions — all within the resort for a seamless stay."},
        {id : 4, img : ChoiceImg4, marginTop : "mt-2 md:mt-36", title : "Exceptional Guest Service" , content : "Our team is dedicated to making every guest feel at home, always."},
        {id : 5, img : ChoiceImg5, marginTop : "mt-2 md:mt-12", title : "Curated Packages & Deals" , content : "Romantic, family, or weekend getaways — we offer something for every kind of traveler."},
        {id : 6, img : ChoiceImg6, marginTop : "mt-2 md:-mt-12", title : "Close to Attractions" , content : "Explore local culture, nature, and adventure just minutes from your room."},
    ];

  return (
   <>
    <section id="choose-us">
        <div className='px-6 py-12 md:pb-36 flex flex-col gap-2 md:gap-4'>
            <span className='text-lg uppercase tracking-wide'>Why Us</span>
            <h2 className='text-3xl md:text-5xl tracking-wide uppercase'>Why Choose Us</h2>
            <div className='grid md:grid-cols-3 gap-6'>
                {choiceList.map(item => (
                    <div key={item.id} className={`relative ${item.marginTop} h-140 md:h-200`}>
                        <img src={item.img} alt={item.title} className='h-full w-full object-cover' />
                        <div className='absolute inset-0 bg-black/40' />
                        <button className='absolute top-8 right-6 text-white border-2 border-white flex items-center justify-center h-12 w-12 font-semibold text-2xl'>{item.id}</button>
                        <div className='absolute w-86 md:w-110 px-6 py-6 text-white left-1/2 -translate-x-1/2 bottom-4 md:-bottom-16 bg-[#153E4D]'>
                            <h2 className='text-xl md:text-3xl tracking-wide mb-2 uppercase'>{item.title}</h2>
                            <p className='text-justify'>{item.content}</p>
                        </div> 
                    </div>
                ))}
            </div>
        </div>
    </section>
   </>
  )
}

export default ChooseUs
