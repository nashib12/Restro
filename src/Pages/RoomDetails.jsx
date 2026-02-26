import React, { useEffect, useState } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import RoomOverview from "../Components/Room-Details/RoomOverview";
import PricingDetails from "../Components/Room-Details/PricingDetails";
import Ammenites from "../Components/Ammenites";
import ExploreRooms from "../Components/Room-Details/ExploreRooms";
import { useParams } from "react-router-dom";

const RoomDetails = () => {
  const { slug } = useParams();
  const [item, setIitem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("/Data/RoomDetails.json")
      .then((response) => response.json())
      .then((data) => {
        const foundData = data.find(item => item.slug === slug);
        setIitem(foundData);
        setIsLoading(true);
      });
  }, [slug]);

  if (!isLoading) {
    return (
      <h2 className="text-center text-3xl md:text-6xl tracking-wider px-6 py-48 md:py-56 bg-black text-white">
        Data is Loading.....
      </h2>
    );
  }

  return (
    <>
      <div>
            <BreadCrumb setTitle={item.title} />
            <div className="flex flex-col px-6 pt-12 md:pt-24">
              <h2 className="text-center text-3xl md:text-6xl tracking-wider uppercase">
                {item.title}
              </h2>
              <div className="mt-4 md:mt-8 md:grid grid-cols-2 gap-4 md:h-160">
                <img
                  src={item.image.roomImg}
                  alt="Room Image"
                  className="h-80 md:h-full w-full object-cover mb-4"
                />
                <div className="grid grid-cols-2 gap-4 ">
                  <img
                    src={item.image.detailImg1}
                    alt="Room Image"
                    className="h-40 md:h-80 w-full object-cover"
                  />
                  <img
                    src={item.image.detailImg2}
                    alt="Room Image"
                    className="h-40 md:h-80 w-full object-cover"
                  />
                  <img
                    src={item.image.detailImg3}
                    alt="Room Image"
                    className="h-40 md:h-80 w-full object-cover"
                  />
                  <img
                    src={item.image.detailImg4}
                    alt="Room Image"
                    className="h-40 md:h-80 w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col-reverse md:grid grid-cols-3 gap-4 mt-6 md:mt-12">
                <div className="col-span-2">
                  <RoomOverview onDisplayData={item} />
                </div>
                <PricingDetails onDisplayData={item} />
              </div>
            </div>
            <Ammenites
              setCol={"md:grid grid-cols-5 gap-4"}
              setHeight={"md:h-60"}
            />
            <ExploreRooms />
          </div>
    </>
  );
};

export default RoomDetails;
