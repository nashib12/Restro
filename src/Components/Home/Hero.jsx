import React, { useRef } from "react";
import HeroImg1 from "../../../public/Images/Home-page/hero.jpg";
import HeroImg2 from "../../../public/Images/Home-page/hero2.jpg";
import HeroImg3 from "../../../public/Images/Home-page/hero3.jpg";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { Link } from "react-router-dom";

const Hero = () => {
  const autoplay = useRef(
    Autoplay({
      delay: 10000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    }),
  );

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
    },
    [autoplay.current, Fade()],
  );

  const slides = [
    {
      id: 1,
      img: HeroImg1,
      alt: "Hero Image",
      title: "Wake up to ocean views, serene moments, and five-star comfort.",
    },
    {
      id: 2,
      img: HeroImg2,
      alt: "Hero Image",
      title: "Unwind in our tranquil paradise designed for pure relaxation.",
    },
    {
      id: 3,
      img: HeroImg3,
      alt: "Hero Image",
      title:
        "Hospitality, nature, and elegance beautifully blended at Resorto.",
    },
  ];

  return (
    <>
      <section id="home">
        <div className="relative overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((item) => (
              <div  key={item.id} className="relative flex-[0_0_100%]">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="h-screen w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
                <div
                 
                  className="absolute inset-0 text-white md:max-w-6xl mx-auto px-6 flex flex-col items-center justify-center text-center mb-8"
                >
                  <h1 className="text-3xl md:text-[4.2rem] leading-8 md:leading-18 tracking-wider">
                    {item.title}
                  </h1>
                  <div className="border-t border-t-white py-4 md:py-6 md:max-w-3xl my-2 md:my-8">
                    <p className="text-md md:text-lg ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <Link to={'/book-now'}><button className="h-14 w-60 border border-white text-xl cursor-pointer hover:bg-[#153E4D]">
                    Book Now
                  </button></Link>
                </div>
                <div className="absolute bottom-4 hidden lg:block px-8 text-white">
                  <div className="bg-white/40 px-8 py-6 flex items-end gap-6">
                    <h2 className="uppercase text-5xl">Enquire</h2>
                    <div className="flex flex-col">
                      <label htmlFor="check-in" className="mb-3 text-2xl">
                        Check-In
                      </label>
                      <input
                        type="date"
                        id="check-in"
                        className="text-lg px-2 py-1 outline-none w-56 bg-white/80 text-black"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="check-out" className="mb-3 text-2xl">
                        Check-Out
                      </label>
                      <input
                        type="date"
                        id="check-out"
                        className="text-lg px-2 py-1 outline-none w-56 bg-white/80 text-black"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="room" className="mb-3 text-2xl">
                        Room
                      </label>
                      <input
                        type="number"
                        id="room"
                        className="text-lg px-2 py-1 outline-none w-56 bg-white/80 text-black"
                        placeholder="1"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="guest" className="mb-3 text-2xl">
                        Guests
                      </label>
                      <input
                        type="number"
                        id="guest"
                        className="text-lg px-2 py-1 outline-none w-56 bg-white/80 text-black"
                        placeholder="1"
                      />
                    </div>
                    <button className="cursor-pointer text-xl text-center h-12 border border-white w-40 hover:bg-white hover:text-black tracking-wide">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
