import React, { useCallback, useEffect, useState } from "react";
import ArrowLeftImg from "../../../public/Icons/arrow.png";
import ArrowRightImg from "../../../public/Icons/right-arrow.png";
import useEmblaCarousel from "embla-carousel-react";

import RoomImg1 from "../../../public/Images/Home-page/Rooms/beachfront-bungalow.jpg";
import RoomImg2 from "../../../public/Images/Home-page/Rooms/honeymoon-pool.jpg";
import RoomImg3 from "../../../public/Images/Home-page/Rooms/luxury-king.jpg";
import RoomImg4 from "../../../public/Images/Home-page/Rooms/mountainview.jpg";
import RoomImg5 from "../../../public/Images/Home-page/Rooms/presidental-sea.jpg";
import RoomImg6 from "../../../public/Images/Home-page/Rooms/standard-double.jpg";

import BathroomImg from "../../../public/Icons/bathroom.png";
import BedImg from "../../../public/Icons/bed.png";
import GuestImg from "../../../public/Icons/people.png";
import { Link } from 'react-router-dom'

const Room = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const goPrev = () => emblaApi?.scrollPrev();
  const goNext = () => emblaApi?.scrollNext();

  const roomList = [
    {
      id: 1,
      img: RoomImg1,
      title: "Beachfront Bungalow",
      slug : "beachfront-bungalow",
      price: "$1000",
      pPrice: "",
      beds: "2 Beds",
      baths: "2 Baths",
      people: "4 People",
    },
    {
      id: 2,
      img: RoomImg2,
      title: "Honeymoon pool villa",
      slug : "honeymoon-pool-villa",
      price: "$400",
      pPrice: "$440",
      beds: "1 Bed",
      baths: "1 Bath",
      people: "2 People",
    },
    {
      id: 3,
      img: RoomImg3,
      title: "Luxury king room",
      slug : "luxury-king-room",
      price: "$600",
      pPrice: "",
      beds: "2 Beds",
      baths: "2 Baths",
      people: "4 People",
    },
    {
      id: 4,
      img: RoomImg4,
      title: "Mountain View Queen Rooom",
      slug : "mountain-view-queen-room",
      price: "$500",
      pPrice: "",
      beds: "2 Beds",
      baths: "1 Bath",
      people: "4 People",
    },
    {
      id: 5,
      img: RoomImg5,
      title: "Presidental Sea view suite",
      slug : "presidental-sea-view-suite",
      price: "$900",
      pPrice: "$999",
      beds: "2 Beds",
      baths: "2 Baths",
      people: "4 people",
    },
    {
      id: 6,
      img: RoomImg6,
      title: "Standard Double room",
      slug : "standard-double-room",
      price: "$500",
      pPrice: "$550",
      beds: "2 Beds",
      baths: "2 Baths",
      people: "4 people",
    },
  ];

  return (
    <>
      <section id="rooms">
        <div className="md:max-w-4xl mx-auto px-6">
          <div className="flex flex-col gap-4 items-center justify-center">
            <p className="uppercase text-lg md:text-xl tracking-wide">Rooms</p>
            <h2 className="uppercase text-2xl leading-10 md:text-5xl tracking-wide md:tracking-wider md:mt-2">
              Check Our Luxury Rooms
            </h2>
            <div className="flex w-full justify-between mt-2 md:mt-6">
              <button
                onClick={goPrev}
                className="bg-[#153E4D] hover:bg-amber-900 rounded-full cursor-pointer h-12 w-12 md:h-16 md:w-16 flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-105 overflow-hidden group relative"
              >
                <img
                  src={ArrowLeftImg}
                  alt="Arrow Left"
                  className="h-4 md:h-6 w-4 md:w-6 object-contain shrink-0 invert absolute transition-transform duration-300 ease-in-out translate-x-0 group-hover:-translate-x-12"
                />
                <img
                  src={ArrowLeftImg}
                  alt="Arrow Left"
                  className="h-4 md:h-6 w-4 md:w-6 object-contain shrink-0 invert  absolute transition-transform duration-500 ease-in translate-x-12 group-hover:translate-x-0"
                />
              </button>
              <button
                onClick={goNext}
                className="bg-[#153E4D] hover:bg-amber-900 rounded-full cursor-pointer h-12 w-12 md:h-16 md:w-16 flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-105 overflow-hidden group relative"
              >
                <img
                  src={ArrowRightImg}
                  alt="Arrow Right"
                  className="h-4 w-4 md:h-6 md:w-6 object-contain shrink-0 invert absolute transition-transform duration-300 ease-in-out -translate-x-12 group-hover:translate-x-0"
                />
                <img
                  src={ArrowRightImg}
                  alt="Arrow Right"
                  className="h-4 md:h-6 w-4 md:w-6 object-contain shrink-0 invert  absolute transition-transform duration-500 ease-in translate-x-0 group-hover:translate-x-12"
                />
              </button>
            </div>
          </div>
        </div>
        <div ref={emblaRef} className="overflow-hidden mt-6 md:mt-12">
          <div className="flex">
            {roomList.map((item) => {
                const isActive = item.id - 1 === selectedIndex;
                return (
              <div
                key={item.id}
                className="min-w-0 flex-[0_0_100%] md:flex-[0_0_60%] px-2 md:px-4"
              >
                <div className={`relative overflow-hidden transition-all duration-700 ease-out will-change-transform ${ isActive ? "scale-100 " : "scale-82 blur-xs"}`}>
                  <img
                    src={item.img}
                    alt="Rooms"
                    className="w-full h-100 md:h-130 object-cover rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-3xl" />
                  <div className="absolute bottom-4 px-6 md:max-w-3xl flex flex-col gap-4 text-white ">
                    <div className="flex flex-col gap-2">
                      <h2 className="text-2xl md:text-4xl uppercase">
                        {item.title}
                      </h2>
                      <p>
                        {item.price}{" "}
                        <span className="line-through">{item.pPrice}</span> /
                        Night
                      </p>
                    </div>
                    <div className="border-2 border-white" />
                   <Link to={`/room-details/${item.slug}`}> <button className="uppercase border border-white text-white cursor-pointer flex items-center justify-center hover:bg-white hover:text-black h-12 w-48 ">
                      View Details
                    </button></Link>
                    <div className="hidden md:flex gap-4">
                      <div className="flex items-center gap-2">
                        <img
                          src={BedImg}
                          alt="Bed Image"
                          className="h-6 w-6 object-contain shrink-0 invert"
                        />
                        <span>{item.beds}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <img
                          src={BathroomImg}
                          alt="Bathroom Image"
                          className="h-6 w-6 object-contain shrink-0 invert"
                        />
                        <span>{item.baths}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <img
                          src={GuestImg}
                          alt="Guest Image"
                          className="h-6 w-6 object-contain shrink-0 invert"
                        />
                        <span>{item.people}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
)})}
          </div>
        </div>
      </section>
    </>
  );
};

export default Room;
