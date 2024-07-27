import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import trendingPlacesChildren from "./TrendingPlacesData";
import MyContext from "../Component/Context";
const LocationResult = () => {
  const value=useContext(MyContext)
console.log(value);
  
  const navigate = useNavigate();
  const [listOfAvailablePlaces, setListOfAvailablePlaces] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const place = queryParams.get("location");
  const navigateToTheResultPageBasedOnAState = (name) => {
    navigate(`/place-details?&to=${name}`);
  };
  // Check if place is found in the URL
  useEffect(() => {
    if (!place) {
      setListOfAvailablePlaces(trendingPlacesChildren);
    } else {
      const trimmedPlace = place.trim().toLowerCase();

      // Find the place in the trending places data
      const result = trendingPlacesChildren.filter(
        (places) => places.name.toLowerCase() === trimmedPlace
      );

      if (result) {
        setListOfAvailablePlaces(result);
      }

      // Check if the place is not found in the data
      if (!result) {
        console.log("Place not found");
      }
    }
  }, [place]);

  const [people, setPeople] = useState("");
  const handlePrice = (e) => {
    setPeople(e.target.value);
  };

  const formatter = new Intl.NumberFormat("en-US", {
    currency: "USD",
  });
  // const formattedPrice = formatter.format();
  return (
    <div className="p-5 md:px-20 py-10">
      <div>
        <p className="mb-4 font-bold">
          {listOfAvailablePlaces.length} property(s) found
          {place ? <span> for {place}</span> : ""}
        </p>

      </div>
      <div className="grid gap-8">
        {listOfAvailablePlaces.map((item) => {
          return (
            <div
              key={item.id}
              className="p-4 shadow-lg border rounded bg-gray-100 grid md:grid-cols-5 gap-8 items-start">
              <div className="md:col-span-2">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full result "
                />
              </div>

              <div className="grid gap-4 md:col-span-3">
                <div className="grid  md:flex items-center justify-between">
                  <div>
                  <h1 className=" text-[#006ce4] text-1xl font-bold">

                      {item.propertyName}
                    </h1>
                  </div>

                  <div className="flex items-center gap-2">
                    <h1 className="text-[#1a1a1a]  text-1xl font-semibold md:text-1xl">
                      {item.ratings}{" "}
                    </h1>
                    <button className="bg-[#003b95] p-1  rounded text-white font-semibold md:p-4">
                      {" "}
                      8.2{" "}
                    </button>
                  </div>
                </div>

                <div className="md:flex items-center justify-between overflow-x-scroll">
                  <div>
                    <h1 className="font-bold text-[#000]">{item.roomType} </h1>
                    {item.breakfast ? (
                      <p className="text-[#008234] font-semibold">
                        {" "}
                        breakfast included{" "}
                      </p>
                    ) : (
                      <p className="text-[#008234] font-semibold">
                        breakfast not included
                      </p>
                    )}
                  </div>

                  <div className="items-center gap-2 justify-end">
                    <h1 className="text-[#1a1a1a] font-semibold text-2xl md:text-3xl  md:text-right">
                      &#8358;{formatter.format(item.price)}
                    </h1>
                    <button
                      onClick={() => {
                        navigateToTheResultPageBasedOnAState(item.name);
                      }}
                      className="w-full shrink-0 bg-blue-600 text-white font-bold rounded px-4 py-2 mt-2">
                      {" "}
                      See availability{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LocationResult;
