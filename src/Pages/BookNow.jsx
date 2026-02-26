import React, { useState } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import FlagImg from "../../public/Images/flag.svg";
import GuestImg from "../../public/Icons/people.png";
import AddImg from "../../public/Icons/add.png";
import BtnImg from "../../public/Icons/down.png";

const BookNow = () => {
  const adultGuest = [
    "1 Adult",
    "2 Adults",
    "3 Adults",
    "4 Adults",
    "5 Adults",
    "6 Adults",
    "7 Adults",
    "8 Adults",
    "9 Adults",
    "10 Adults",
  ];

  const childGuestNo = [
    "Child under 1 year age",
    "Child aged 1 year",
    "Child aged 2 year",
    "Child aged 3 year",
    "Child aged 4 year",
    "Child aged 5 year",
    "Child aged 6 year",
    "Child aged 7 year",
    "Child aged 8 year",
    "Child aged 9 year",
    "Child aged 10 year",
    "Child aged 11 year",
    "Child aged 12 year",
    "Child aged 13 year",
    "Child aged 14 year",
    "Child aged 15 year",
    "Child aged 16 year",
    "Child aged 17 year"
  ]
  const [guest, setGuest] = useState("2 Adults");
  const [guestList, setGuestList] = useState(false);

  const [childGuest, setChildGuest] = useState("");
  const [childGuestList, setChildGuestList] = useState(false);

  const handleGuest = () => {
    setGuestList(prev => !prev);
    setChildGuestList(false);
  };

  const handleChildGuest = () => {
    setChildGuestList(prev => !prev);
    setGuestList(false);
  }

  return (
    <div>
      <BreadCrumb setTitle={"Book Now"} />
      <div className="md:max-w-5xl mx-auto px-6 py-12 md:px-12 my-12 md:my-24 bg-[#153E4D] border-8 border-white rounded-3xl text-white md:h-200">
        <div className="flex flex-col items-center justify-center">
          <div className="flex justify-end gap-2 w-full">
            <button className="text-xl bg-white w-18 h-9 rounded-md cursor-pointer flex items-center justify-center">
              {" "}
              <img
                src={FlagImg}
                alt="Flag Image"
                className="h-8 w-8 object-contain"
              />{" "}
            </button>
            <button className="text-xl bg-white text-black w-18 h-9 rounded-md cursor-pointer hover:bg-[#BC9259]/80 hover:text-white">
              NPR
            </button>
          </div>
          <div className="flex flex-col w-full mt-6">
            <div className="border-b-3 border-white/80 py-3 text-center">
              <h2 className="text-xl md:text-4xl uppercase tracking-wider">
                Details of Your Stay
              </h2>
            </div>
            <div className="flex items-center justify-center mt-6 md:mt-8">
              <div>
                <div className="md:grid grid-cols-2 gap-12 pb-6 md:border-b">
                  <div className="flex flex-col items-start">
                    <label htmlFor="checkIn" className="mb-3">
                      Check-In
                    </label>
                    <input
                      type="date"
                      id="checkIn"
                      className="outline-none border px-2 py-2 w-80 h-10 bg-white text-black"
                    />
                  </div>
                  <div className="flex flex-col items-start mt-4 md:mt-0">
                    <label htmlFor="checkOut" className="mb-3">
                      Check-Out
                    </label>
                    <input
                      type="date"
                      id="checkOut"
                      className="outline-none border px-2 py-2 w-80 h-10 bg-white text-black"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:grid grid-cols-2 gap-12 pb-6 md:border-b md:mt-8">
                  <div className="flex flex-col items-start">
                    <label htmlFor="adultGuest" className="mb-3">
                      Stay in room
                    </label>
                    <div
                      id="adultGuest"
                      className="border px-4 py-2 w-80 h-10 grid grid-cols-[auto_1fr_auto] bg-white text-black"
                    >
                      <img
                        src={GuestImg}
                        alt="Guest"
                        className="h-6 w-6 object-contain"
                      />
                      <p className="ml-3 tracking-wider">{guest}</p>

                      <button
                        onClick={handleGuest}
                        className={`flex items-center justify-center ${guestList ? "rotate-180" : "rotate-0"} transition-transform duration-300 ease-out h-6 w-8 cursor-pointer`}
                      >
                        <img
                          src={BtnImg}
                          alt="Guest"
                          className="h-3 w-3 object-contain"
                        />
                      </button>
                    </div>
                  </div>
                  <div className={`flex flex-col justify-end ${guestList ? "mt-32 md:mt-0" : "mt-0"}`}>
                    <div
                      id="adultGuest"
                      className="border px-4 py-2 w-80 h-10 grid grid-cols-[auto_1fr_auto] bg-white text-black"
                    >
                      <img
                        src={AddImg}
                        alt="Guest"
                        className="h-6 w-6 object-contain"
                      />
                      <p className="ml-3 tracking-wider">{childGuest}</p>

                      <button
                        onClick={handleChildGuest}
                        className={`flex items-center justify-center ${childGuestList ? "rotate-180" : "rotate-0"} transition-transform duration-300 ease-out h-6 w-8 cursor-pointer`}
                      >
                        <img
                          src={BtnImg}
                          alt="Guest"
                          className="h-3 w-3 object-contain"
                        />
                      </button>
                    </div>
                  </div>
                  
                    <div>
                        {guestList && (
                        <div className="bg-white w-80 px-4 overflow-y-scroll text-black h-40 py-4 -mt-66 md:-mt-12">
                          <ul>
                            {adultGuest.map((item, index) => (
                              <li
                                key={index}
                                onClick={() => setGuest(item)}
                                className="mb-3 cursor-pointer"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    <div>
                        {childGuestList && (
                        <div className="bg-white w-80 px-4 overflow-y-scroll text-black h-40 py-4 -mt-24 md:-mt-12">
                          <ul>
                            {childGuestNo.map((item, index) => (
                              <li
                                key={index}
                                onClick={() => setChildGuest(item)}
                                className="mb-3 cursor-pointer"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                </div>
              </div>
            </div>
          </div>
          <button className="w-full md:w-172 mt-4 md:mt-8 flex items-center justify-center uppercase h-12 md:h-14 cursor-pointer bg-[#BC9259] text-xl tracking-wider">
Check Availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
