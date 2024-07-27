import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TravelInspiration from "../Pages/TripInspirationData";

const PlacesCarousel = () => {


    

    
  const navigate = useNavigate()
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const navigateToTheResultPageBasedOnAState = (name) => {
    navigate(`/place-details?&to=${name}`);
  };
  return (
    <div className="p-5 grid gap-3 m md:px-20 py-5 md:mt-0">
      <div className="mb-3 grid gap-2">
        <h1 className="text-2xl font-semibold">Be inspired when travelling</h1>
        <p>
          A stay at one of these picturesque holiday rentals will not disappoint
          walahi
        </p>
      </div>
      <Carousel responsive={responsive}>
        {/* <div className="grid grid-cols-3 gap-3 overflow-x-scroll"> */}
        {TravelInspiration.map((item) => {
          return (
            <div
              key={item.id}
              className="shadow-lg border rounded mx-2 shadow-md cursor-pointer"
              onClick={() => {
                navigateToTheResultPageBasedOnAState(item.name);
              }}>
              <img src={item.img} alt="" className="test" />
              <div className="px-3">
                <h2 className="text-[#1a1a1a] font-semibold text-lg  mt-4">
                  {item.name}
                </h2>
                <small className="text-xs"> {item.country} </small>

                <div className="flex item-center gap-2 mb-3">
                  <button className="bg-[#003b95] p-1 rounded text-white text-xs">
                    {item.review}
                  </button>

                  <p className="text-sm">
                    {" "}
                    Execeptional . {item.howManyReview} reviews
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        {/* </div> */}
      </Carousel>

      {/* <div className="grid grid-cols-3 gap-3 overflow-x-scroll">
        {trendingPlacesChildren.map((item) => {
          return (
            <div
              key={item.id}
              className="relative border"
              >
              <img src={item.img} alt="" className="rounded test" />
              <h2 className="text-white font-bold text-2xl absolute top-0 left-4 mt-4">
                {" "}
                {item.name}{" "}
              </h2>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default PlacesCarousel;
