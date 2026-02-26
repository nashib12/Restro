import React, { useEffect } from 'react'
import BreadCrumb from '../Components/BreadCrumb'

import Image1 from '../../public/Images/Gallery/gallery1.jpg'
import Image2 from '../../public/Images/Gallery/gallery2.jpg'
import Image3 from '../../public/Images/Gallery/gallery3.jpg'
import Image4 from '../../public/Images/Gallery/gallery4.jpg'
import Image5 from '../../public/Images/Gallery/gallery5.jpg'
import Image6 from '../../public/Images/Gallery/gallery6.jpg'
import Image7 from '../../public/Images/Gallery/gallery7.jpg'
import Image8 from '../../public/Images/Gallery/gallery8.jpg'
import Image9 from '../../public/Images/Gallery/gallery9.jpg'
import Image10 from '../../public/Images/Gallery/gallery10.jpg'
import Image11 from '../../public/Images/Gallery/gallery11.jpg'
import Image12 from '../../public/Images/Gallery/gallery12.jpg'
import Image13 from '../../public/Images/Gallery/gallery13.jpg'
import Image14 from '../../public/Images/Gallery/gallery14.jpg'
import Image15 from '../../public/Images/Gallery/gallery15.jpg'
import Image16 from '../../public/Images/Gallery/gallery16.jpg'

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const Gallery = () => {

  const gallery = [
    { id: 1, img: Image1 },
    { id: 2, img: Image2 },
    { id: 3, img: Image3 },
    { id: 4, img: Image4 },
    { id: 5, img: Image5 },
    { id: 6, img: Image6 },
    { id: 7, img: Image7 },
    { id: 8, img: Image8 },
    { id: 9, img: Image9 },
    { id: 10, img: Image10 },
    { id: 11, img: Image11 },
    { id: 12, img: Image12 },
    { id: 13, img: Image13 },
    { id: 14, img: Image14 },
    { id: 15, img: Image15 },
    { id: 16, img: Image16 },
  ];

  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
      Thumbs: {
        autoStart: true,
      },
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <div>
      <BreadCrumb setTitle={"Gallery"} />

      <div className='px-6 py-12 md:py-24 grid grid-cols-2 md:grid-cols-3 gap-2'>
        {gallery.map(item => (
          <a
            key={item.id}
            href={item.img}
            data-fancybox="gallery"
            className='relative mb-2 overflow-hidden group h-80 md:h-160 block'
          >
            <img
              src={item.img}
              alt="Gallery"
              className='w-full h-full object-cover'
            />

            <div className='absolute inset-0 scale-0 transition-transform duration-300 ease-out bg-black/40 group-hover:scale-100' />

            <div className='group-hover:flex flex-col h-full items-center justify-center absolute inset-0 hidden'>
              <p className='text-white text-4xl tracking-wider'>
                Open Lightbox
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Gallery
