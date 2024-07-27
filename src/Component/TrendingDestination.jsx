import React, { useContext } from "react";
import lagos from "../Pages/images/lagos.jpg";
import ibadan from "../Pages/images/ibadan.jpg";
import MyContext from "./Context";
import other from "../Pages/images/abj.webp";
import other2 from "../Pages/images/las.webp";
import other3 from "../Pages/images/beni.webp";

import { useNavigate } from "react-router-dom";

const TrendingDestination = () => {
  const navigate = useNavigate();
  const trendingPlaces = [
    {
      img: lagos,
      name: "Lagos",
      id: 1,
    },
    {
      id: 2,
      img: ibadan,
      name: "Ibadan",
    },
  ];
  const trendingPlacesChildren = [
    {
      img: other,
      name: "Ikeja",
      id: 1,
    },
    {
      id: 2,
      img: other2,
      name: "Lekki",
    },
    {
      img: other3,
      name: "Benin",
      id: 3,
    },
    // {
    //   id: 4,
    //   img: other2,
    //   name: "Ibadan",
    // },
    // {
    //   img: other,
    //   name: "Lagos",
    //   id: 5,
    // },
    // {
    //   id: 6,
    //   img: other2,
    //   name: "Ibadan",
    // },
  ];
  const navigateToTheResultPageBasedOnAState = (name) => {
    navigate(`/select-room?&location=${name}`);
  };
  return (
    <div className="p-5 grid gap-3 m md:p-20 md:mt-0">
      <div>
        <h1 className="font-bold text-3xl">Trending destinations</h1>
        <p className="text-semibold">
          Pick a vibe and explore the top destinations in Nigeria
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5">
        {trendingPlaces.map((item) => {
          return (
            <div
              key={item.id}
              className="relative border cursor-pointer"
              onClick={() => {
                navigateToTheResultPageBasedOnAState(item.name)
              }}>
              <img src={item.img} alt="" className="rounded image" />
              <h2 className="text-white font-bold text-2xl absolute top-0 left-4 mt-4">
                {" "}
                {item.name}{" "}
              </h2>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-3 gap-3 overflow-x-scroll">
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
      </div>
    </div>
  );
};

export default TrendingDestination;
