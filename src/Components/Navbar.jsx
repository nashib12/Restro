import React, { useEffect, useState } from "react";
import FacebookImg from "../../public/Icons/facebook.png";
import LinkedinImg from "../../public/Icons/Linkedin.png";
import TikTokImg from "../../public/Icons/tik-tok.png";
import YoutubeImg from "../../public/Icons/youtube.png";
import CloseBtnImg from "../../public/Icons/close.png";
import MenuBtnImg from "../../public/Icons/align-left.png";
import LocationImg from "../../public/Icons/office-building.png";
import EnvelopeImg from "../../public/Icons/envelope.png";
import StarImg from "../../public/Icons/star.svg";
import LogoImg from '../../public/Images/Logo.svg';
import GalleryBgImg from '../../public/Images/Navbar/gallery.jpg';
import RoomImg1 from '../../public/Images/Navbar/room1.jpg';
import RoomImg2 from '../../public/Images/Navbar/room2.jpg';
import RoomImg3 from '../../public/Images/Navbar/room3.jpg';
import RoomImg4 from '../../public/Images/Navbar/room4.jpg';
import RoomImg5 from '../../public/Images/Navbar/room5.jpg';

import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [background, setBackground] = useState("bg-[#153E4D]");
  const [bgOverlay, setBgOverlay] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  const changeBackground = (id) => {
    switch(id){
        case 1 :
            setBackground("bg-[url('/Images/Navbar/home.jpg')]");
            setBgOverlay("bg-black/60");
            break;
        case 2 :
            setBackground("bg-[url('/Images/Navbar/about.jpg')]");
            setBgOverlay("bg-black/60");
            break;
        case 3 :
            setBackground("bg-[url('/Images/Navbar/blogs.jpg')]");
            setBgOverlay("bg-black/60");
            break;
        case 4 :
            setBackground("bg-[url('/Images/Navbar/contact.jpg')]");
            setBgOverlay("bg-black/60");
            break;
        case 5 :
            setBackground("bg-[url('/Images/Navbar/gallery.jpg')]");
            setBgOverlay("bg-black/60");
            break;
        case 6 :
            setBackground("bg-[url('/Images/Navbar/room.jpg')]");
            setBgOverlay("bg-black/60");
            break;
        default:
            setBackground("bg-[#153E4D]");
            setBgOverlay(null);
    }
  };

  const roomList = [
    {id:1, img : RoomImg1, alt : "Room Image", title:"Beach Front Bungalow", slug : "beachfront-bungalow", price:"$1000"},
    {id:2, img : RoomImg2, alt : "Room Image", title:"Mountain View Queen Room", slug : "mountain-view-queen-room", price:"$550"},
    {id:3, img : RoomImg3, alt : "Room Image", title:"Honeymoon Pool Villa", slug : "honeymoon-pool-villa", price:"$400"},
    {id:4, img : RoomImg4, alt : "Room Image", title:"Luxury King Room", slug : "luxury-king-room", price:"$600"},
    {id:5, img : RoomImg5, alt : "Room Image", title:"Standard Double Room", slug: "Standard Double Room", price:"$500"},
  ];

  useEffect(() => {
    document.body.style.overflow = mobileMenu || showMenu ? "hidden" : "auto";
    return () => {
        document.body.style.overflow = "auto";
    }
  }, [mobileMenu, showMenu]);

    useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      scrollY > 20 ? setIsAtTop(false) : setIsAtTop(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentLocation = useLocation();

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50  ${isAtTop ? "" : "hidden"}`}>
        {/* Top navbar start */}
        <div className="border-b border-b-white">
          <div className="flex items-center justify-center md:justify-between px-6 py-4">
            <ul className="flex gap-4">
              <li>
                <img
                  src={FacebookImg}
                  alt="Facebook Image"
                  className="h-4 w-4 object-contain shrink-0 cursor-pointer invert "
                />
              </li>
              <li>
                <img
                  src={LinkedinImg}
                  alt="Linkedin Image"
                  className="h-4 w-4 object-contain shrink-0 cursor-pointer invert "
                />
              </li>
              <li>
                <img
                  src={TikTokImg}
                  alt="TikTok image"
                  className="h-4 w-4 object-contain shrink-0 cursor-pointer invert "
                />
              </li>
              <li>
                <img
                  src={YoutubeImg}
                  alt="Youtube Image"
                  className="h-4 w-4 object-contain shrink-0 cursor-pointer invert "
                />
              </li>
            </ul>
            <ul className="hidden md:flex gap-4">
              <li className="flex items-center justify-center gap-2">
                <img
                  src={EnvelopeImg}
                  alt="Envelope"
                  className="h-4 w-4 object-contain shrink-0 invert"
                />
                <a href="mailto:noreply@example.com" className="text-white">
                  noreply@example.com
                </a>
              </li>
              <li className="flex items-center justify-center gap-2 text-white">
                <img
                  src={LocationImg}
                  alt="Location"
                  className="h-5 w-5 object-contain shrink-0 invert"
                />
                23 Maple Street, Springfield, IL 62704
              </li>
            </ul>
          </div>
        </div>
        {/* Top navbar start */}
        {/* Bottom Navbar start */}
        <div className="grid grid-cols-[auto_1fr_auto] md:grid-cols-[1fr_1fr_1fr] px-6 py-4 text-white">
            <button className="block md:hidden" onClick={() => setMobileMenu(true)}> <img src={MenuBtnImg} alt="Menu Button" className="h-8 w-8 object-contain shrink-0 invert" /> </button>
          <ul className="hidden md:flex items-center gap-14 text-xl">
            <li
              className="cursor-pointer"
              onClick={() => setShowMenu(true)}
            >
              <img
                src={MenuBtnImg}
                alt="Menu Button"
                className="h-8 w-8 object-contain shrink-0 invert"
              />
            </li>
            <li className="cursor-pointer nav-menu"><Link to={'/'}>Home</Link></li>
            <li className="cursor-pointer nav-menu"><Link to={'/about-us'}>About</Link> </li>
            <li className="cursor-pointer nav-menu"><Link to={'/our-rooms'}>Rooms</Link> </li>
          </ul>
          <div className="flex flex-col items-center justify-center">
           <Link to={'/'} className="cursor-pointer"> <img
              src={StarImg}
              alt="StarImage"
              className="h-10 md:h-12 w-auto object-contain shrink-0"
            /></Link>
          </div>
          <ul className="flex items-center justify-end gap-4 md:gap-8 md:text-xl">
            <li className="cursor-pointer nav-menu hidden md:block">
              <Link to={'/contact-us'} >Contact Us</Link>
            </li>
            <li className="cursor-pointer nav-menu">
              <Link to={'/book-now'} className={`${currentLocation.pathname === '/' || currentLocation.pathname === '/book-now' ? "hidden" : "block"}`}> <button className="text-center h-10 w-36 border border-white cursor-pointer hover:bg-[#153E4D]">Book Now</button> </Link>
            </li>
          </ul>
        </div>
        {/* Bottom Navbar end */}

        {showMenu && (<>
            <aside className="fixed top-0 left-0 w-full h-screen hidden md:grid grid-cols-[1fr_1fr_1fr] z-50">
                <div className={`relative ${background} bg-cover min-h-screen bg-center bg-no-repeat transition-transform duration-300 ease-in `}>
                    <div className={`absolute inset-0 h-screen w-auto ${bgOverlay}`} />
                    <div className="absolute inset-0 grid grid-rows-[auto_1fr_auto] gap-12 py-6 px-6 text-white">
                    <div className="flex items-center justify-center">
                        <img src={LogoImg} alt="LogoImage" className="h-16 w-auto object-contain shrink-0" />
                    </div>
                    <ul className="flex flex-col items-center gap-12">
                        <li onMouseEnter={() => changeBackground(1) } onMouseLeave={() => changeBackground()} className="text-4xl cursor-pointer"><Link to={'/'} onClick={() => setShowMenu(false)}>Home</Link></li>
                        <li onMouseEnter={() => changeBackground(2) } onMouseLeave={() => changeBackground()} className="text-4xl cursor-pointer"><Link to={'/about-us'} onClick={() => setShowMenu(false)}>About</Link></li>
                        <li onMouseEnter={() => changeBackground(3) } onMouseLeave={() => changeBackground()} className="text-4xl cursor-pointer"><Link to={'/blogs'} onClick={() => setShowMenu(false)}>Blogs</Link></li>
                        <li onMouseEnter={() => changeBackground(4) } onMouseLeave={() => changeBackground()} className="text-4xl cursor-pointer"><Link to={'/contact-us'} onClick={() => setShowMenu(false)}>Contact</Link></li>
                        <li onMouseEnter={() => changeBackground(5) } onMouseLeave={() => changeBackground()} className="text-4xl cursor-pointer"><Link to={'/gallery'} onClick={() => setShowMenu(false)}>Gallery</Link></li>
                        <li onMouseEnter={() => changeBackground(6) } onMouseLeave={() => changeBackground()} className="text-4xl cursor-pointer"><Link to={'/our-rooms'} onClick={() => setShowMenu(false)}>Rooms</Link></li>
                    </ul>
                    <div className="flex items-center justify-center">
                        <Link to={'/book-now'} onClick={() => setShowMenu(false)} className="w-full"><button className="relative text-3xl border border-white p-4 w-full group overflow-hidden">
                            <span className="text-white group-hover:text-black relative z-10">Book Now</span>
                            <span class="absolute w-full h-16 bg-white -left-72 bottom-6 -rotate-45 group-hover:rotate-0 group-hover:left-0 group-hover:bottom-0 duration-500"></span>
                            <span class="absolute w-full h-16 bg-white -right-86 bottom-6 -rotate-45 group-hover:rotate-0 group-hover:right-0 group-hover:bottom-0 duration-500"></span>
                        </button></Link>
                    </div>
                </div>
                </div>
                <div className="bg-black grid grid-cols-1 gap-4 py-6 px-4  ">
                    {roomList.map(item => (
                        <div key={item.id} className="relative rounded-xl group overflow-hidden cursor-pointer border border-gray-500">
                        <Link to={`/room-details/${item.slug}`} onClick={() => setShowMenu(false)}><img src={item.img} alt={item.alt} className="h-34 w-full object-cover rounded-xl transition-transform duration-500 ease-out group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/60" />
                        <div className="absolute bottom-2 left-2 text-white px-4">
                            <h2 className="text-3xl">{item.title}</h2>
                            <span className="text-lg">{item.price}</span>
                        </div>
                        </Link>
                    </div>
                    ))}
                </div>
                <div className="relative">
                    <img src={GalleryBgImg} alt="Background Image" className="h-screen w-full object-cover" />
                    <div className="bg-white/80 absolute inset-0" />
                    <button onClick={() => setShowMenu(prev => !prev)} className="bg-[#153E4D] absolute top-8 right-8 rounded-full h-12 w-12 flex items-center justify-center cursor-pointer z-10 hover:rotate-180 transition-transform duration-300 ease-in-out hover:bg-red-700 hover:scale-105"><img src={CloseBtnImg} alt="Close Btn" className="invert h-5 w-5 object-cover" /></button>
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-14 py-12 text-center">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-5xl text-[#153E4D]">Resotro</h2>
                            <p>5 Star Hotel</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-4xl text-[#153E4D]">Location</h2>
                            <p>4517 Washington Ave. Manchester,</p>
                            <p>Kentucky 39495.</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-4xl text-[#153E4D]">Email Us</h2>
                            <p>support@example.com</p>
                            <p>resorto@example.com</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-4xl text-[#153E4D]">Phone</h2>
                            <p>(406) 5X5-0120</p>
                            <p>(406) 5X5-0120</p>
                        </div>
                    </div>

                </div>
            </aside>
        </>)}

        {mobileMenu && (<>
        <aside className="w-screen h-screen fixed top-0 left-0 bg-[#153E4D] ">
            <button className="fixed top-12 right-12 z-50" onClick={() => setMobileMenu(false)}> <img src={CloseBtnImg} alt="Close Button" className="h-6 w-6 object-cover invert" /> </button>
            <div className="fixed top-20 left-1/2 -translate-x-1/2">
                <img src={LogoImg} alt="Logo" className="h-16 w-80 object-contain shrink-0 mb-12" />
                <ul className="flex flex-col gap-8 text-white items-center justify-center mb-12 text-2xl">
                    <li><Link to={'/'} onClick={() => setMobileMenu(false)}>Home</Link></li>
                    <li><Link to={'/about-us'} onClick={() => setMobileMenu(false)}>About</Link></li>
                    <li><Link to={'/blogs'} onClick={() => setMobileMenu(false)}>Blogs</Link></li>
                    <li><Link to={'/contact-us'} onClick={() => setMobileMenu(false)}>Contact</Link></li>
                    <li><Link to={'/gallery'} onClick={() => setMobileMenu(false)}>Gallery</Link></li>
                    <li><Link to={'/our-rooms'} onClick={() => setMobileMenu(false)}>Rooms</Link></li>
                </ul>
               <Link to={'/book-now'} onClick={() => setMobileMenu(false)}><button className="w-80 h-14 text-2xl border border-white text-white">Book Now</button></Link>
            </div>
        </aside>
        </>)}
      </nav>
    </>
  );
};

export default Navbar;
