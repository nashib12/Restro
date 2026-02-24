import React from "react";

import GalleryImg1 from "../../../public/Images/Gallery/gallery1.jpg";
import GalleryImg2 from "../../../public/Images/Gallery/gallery2.jpg";
import GalleryImg3 from "../../../public/Images/Gallery/gallery3.jpg";
import GalleryImg4 from "../../../public/Images/Gallery/gallery4.jpg";
import GalleryImg5 from "../../../public/Images/Gallery/gallery5.jpg";
import GalleryImg6 from "../../../public/Images/Gallery/gallery6.jpg";
import GalleryImg7 from "../../../public/Images/Gallery/gallery7.jpg";
import GalleryImg8 from "../../../public/Images/Gallery/gallery8.jpg";
import GalleryImg9 from "../../../public/Images/Gallery/gallery9.jpg";
import GalleryImg10 from "../../../public/Images/Gallery/gallery10.jpg";
import GalleryImg11 from "../../../public/Images/Gallery/gallery11.jpg";
import GalleryImg12 from "../../../public/Images/Gallery/gallery12.jpg";
import GalleryImg13 from "../../../public/Images/Gallery/gallery13.jpg";
import GalleryImg14 from "../../../public/Images/Gallery/gallery14.jpg";
import GalleryImg15 from "../../../public/Images/Gallery/gallery15.jpg";
import GalleryImg16 from "../../../public/Images/Gallery/gallery16.jpg";

const Gallery = () => {
  const imageList = [
    { id: 1, img: GalleryImg1 },
    { id: 2, img: GalleryImg2 },
    { id: 3, img: GalleryImg3 },
    { id: 4, img: GalleryImg4 },
    { id: 5, img: GalleryImg5 },
    { id: 6, img: GalleryImg6 },
    { id: 7, img: GalleryImg7 },
    { id: 8, img: GalleryImg8 },
    { id: 9, img: GalleryImg9 },
    { id: 10, img: GalleryImg10 },
    { id: 11, img: GalleryImg11 },
    { id: 12, img: GalleryImg12 },
    { id: 13, img: GalleryImg13 },
    { id: 14, img: GalleryImg14 },
    { id: 15, img: GalleryImg15 },
    { id: 16, img: GalleryImg16 },
  ];
  return (
    <>
      <section id="gallery">
        <div className="grid grid-cols-2 md:grid-cols-8 px-6 py-12 md:py-24 overflow-hidden">
          
            {imageList.map(item => (
                <div key={item.id} className="min-w-0 flex-[0_0_100%] px-2">
              <div className="relative cursor-pointer group">
                <img
                  src={item.img}
                  alt="Gallery Image"
                  className="h-40 md:h-80 w-full object-cover"
                />
                <div className="bg-black/80 absolute inset-0 scale-0 group-hover:scale-96 origin-center transition-transform duration-300 ease-out" />
                <div className="hidden group-hover:flex items-center justify-center absolute inset-0">
                  <h2 className="uppercase text-2xl tracking-wide text-white">
                    Gallery
                  </h2>
                </div>
              </div>
            </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
