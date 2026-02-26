import React, { useState } from 'react'
import FaqImg1 from '../../../public/Images/About-page/aboutus6.jpg'
import FaqImg2 from '../../../public/Images/About-page/aboutus5.jpg'
import FaqImg3 from '../../../public/Images/About-page/aboutus9.jpg'
import AddImg from '../../../public/Icons/add.png'
import MinusImg from '../../../public/Icons/minus.png'

const Faq = () => {

const faqs = [
  {
    id: 1,
    question: "What are the check-in and check-out times?",
    content:
      "Check-in starts at 2:00 PM and check-out is until 12:00 PM. Early check-in and late check-out requests are subject to availability and may incur additional charges."
  },
  {
    id: 2,
    question: "Does the hotel offer free Wi-Fi?",
    content:
      "Yes, complimentary high-speed Wi-Fi is available in all guest rooms and public areas of the hotel. Guests can connect multiple devices without additional fees."
  },
  {
    id: 3,
    question: "Is breakfast included in the room rate?",
    content:
      "Breakfast inclusion depends on the selected booking package. Guests can choose room-only or bed-and-breakfast options during reservation. Our breakfast buffet includes continental and local dishes."
  },
  {
    id: 4,
    question: "Does the hotel provide airport pickup and drop-off services?",
    content:
      "Yes, we offer airport transfer services upon request. Guests are advised to share their flight details at least 24 hours before arrival to arrange the service smoothly."
  },
  {
    id: 5,
    question: "Are pets allowed in the hotel?",
    content:
      "Pets are allowed in selected rooms only. Prior notification is required, and additional cleaning fees may apply. Service animals are always welcome."
  },
  {
    id: 6,
    question: "What amenities are available at the hotel?",
    content:
      "The hotel features a fitness center, swimming pool, spa services, on-site restaurant, conference halls, and 24-hour front desk support to ensure a comfortable and convenient stay."
  }
];

const [selectedId, setSelectedId] = useState(null);

const toggleAccordin = (id) => {
    setSelectedId(selectedId === id ? null : id);
}

  return (
   <>
    <section id='faq'>
        <div className='px-6 py-12 md:py-24 grid md:grid-cols-2 gap-6 md:gap-12'>
            <div className='relative flex'>
                <img src={FaqImg1} alt="Faq Image" className='h-60 md:h-100 w-80 object-cover z-0 shadow-lg rounded-md'  />
                <img src={FaqImg2} alt="Faq Image" className='h-60 md:h-100 w-120 object-cover z-10 -ml-48 mt-24 shadow-lg rounded-md'  />
                <img src={FaqImg3} alt="Faq Image" className='h-60 md:h-100 w-80 object-cover z-20 -ml-36 mt-48 shadow-lg rounded-md'  />
            </div>
            <div className='flex flex-col gap-2'>
                <span className='text-lg uppercase tracking-wide'>Faq</span>
                <h2 className='text-2xl md:text-4xl leading-10 md:leading-12 tracking-wide uppercase'>Everything you need to know before you stay</h2>
                <div  className='mt-4'>
                {faqs.map(item => (
                    <div key={item.id} className='flex flex-col bg-black text-white text-lg md:text-xl mt-1 rounded-lg'>
                        <div className='flex justify-between gap-2 px-4 md:px-6 py-4'>
                            <p>{item.question}</p>
                            <button onClick={() => toggleAccordin(item.id)}><img src={selectedId === item.id ? MinusImg : AddImg} alt="Show Accordin" className='h-6 w-6 object-cover invert' /></button>
                        </div>
                        <div className={`transition-all duration-300 ease-out grid ${selectedId === item.id ? "grid-rows-[1fr] opacity-100 px-6 py-4" : "grid-rows-[0fr] opacity-0"}`}>
                            <p className='text-justify overflow-hidden'>{item.content}</p>
                        </div>
                    </div>
                ))}
                </div>               
            </div>
        </div>
   </section>
   </>
  )
}

export default Faq
