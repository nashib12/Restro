import React from "react";
import RoomImg1 from "../../../public/Images/Home-page/Rooms/deluxe-ocean.jpg";
import RoomImg2 from "../../../public/Images/Home-page/Rooms/garden-suite.jpg";
import RoomImg3 from "../../../public/Images/Home-page/Rooms/luxury-king.jpg";
import BedImg from "../../../public/Icons/bed.png";
import GuestImg from "../../../public/Icons/people.png";

const ExploreRooms = () => {
  const roomList = [
    {
      id: 1,
      img: RoomImg1,
      title: "Luxury King Room",
      price: "$600",
      originalPrice: "",
      beds: "2 Beds",
      people: "4 People",
    },
    {
      id: 2,
      img: RoomImg2,
      title: "Garden Suite with Balcony",
      price: "$280",
      originalPrice: "$330",
      beds: "1 Bed",
      people: "2 People",
    },
    {
      id: 3,
      img: RoomImg3,
      title: "Deluxe Ocean View Room",
      price: "$320",
      originalPrice: "$370",
      beds: "1 Bed",
      people: "2 People",
    },
  ];
  return (
    <div className="px-6 pb-12 md:pb-24 flex flex-col items-center justify-center">
      <span className="uppercase tracking-wide text-xl md:text-2xl mb-3">
        Rooms
      </span>
      <h2 className="text-3xl md:text-6xl tracking-wider uppercase text-center">
        Explore Other Rooms
      </h2>

      <div className="mt-6 md:mt-12 md:grid grid-cols-3 gap-8">
        {roomList.map((room) => (
          <div key={room.id} className="h-80 md:h-160 w-full mt-4 md:mt-0 relative group">
            <img
              src={room.img}
              alt={room.title}
              className="h-full w-full object-cover rounded-md shadow-md"
            />
            <div className="bg-black/40 absolute inset-0 transition-color duration-300 ease-in-out" />
            <div className="absolute inset-0 transition-color duration-300 ease-in-out group-hover:bg-white/10" />
            <div className="absolute bottom-2 m-2 md:m-6 text-white ">
              <div className="flex flex-col overflow-hidden transform transition-transform duration-700 ease-in-out translate-y-10 md:translate-y-40 group-hover:translate-y-0">
                <h2 className="md:tracking-wide text-lg md:text-4xl md:whitespace-nowrap">
                  {room.title}
                </h2>
                <p className="md:text-lg">
                  {room.price}{" "}
                  <span className="line-through">{room.originalPrice}</span> /
                  Night
                </p>
                <div className="border-t border-white py-2 md:py-4 md:mt-4">
                  <button className="cursor-pointer border border-white h-8 md:h-12 w-36 flex items-center justify-center md:text-lg">
                    View Details
                  </button>
                  <div className="flex gap-2 md:gap-12 mt-2 md:mt-4">
                    <div className="flex gap-1 md:gap-2 items-center justify-center text-sm md:text-lg">
                      <img
                        src={BedImg}
                        alt={room.title}
                        className="h-4 w-4 md:h-6 md:w-6 invert object-cover"
                      />
                      {room.beds}
                    </div>
                    <div className="flex gap-1 md:gap-2 items-center justify-center text-sm md:text-lg">
                      <img
                        src={GuestImg}
                        alt={room.title}
                        className="h-4 w-4 md:h-6 md:w-6 invert object-cover"
                      />
                      {room.people}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreRooms;
