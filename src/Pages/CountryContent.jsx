import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CountryContent = () => {
  const { flag } = useParams();
  const [countries, setCountries] = useState([]);
  let data = countries.find((item) => item.flag == flag);
  console.log("countryInformation", data);

  const [countryInfo, setCountryInfo] = useState([]);

  if (data) {
    console.log("countryInformation", data);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const africaCountries = data.filter((country) =>
          country.continents.includes("Africa")
        );
        setCountries(africaCountries);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="p-5">
      {/* <Navbar /> */}
            {data&&
            
            <div
             
             className=" shadow font-bold shrink-0 bg-grey-500 rounded-lg mb-4 bg-white flex items-center justify-between">
             <div>
               <img src={data.flags.png} alt="" className="rounded-lg" />
             </div>

             {/* <div>
               {item.coatOfArms=={}? <p className="text-red-400">no coat of arm for this country </p> :  <img src={item.coatOfArms.png} alt="" className="rounded-lg" />  }
               
             </div> */}

             <div className="grid gap-3">
               <h1 className="text-xl">{data.name.common} </h1>

               <div>
                 <p className="text-sm">Capital: {data.capital}</p>

                 <p className="text-sm">Region: {data.region} </p>
                 <p className="text-sm">Region: {data.flag} </p>


                 <p className="text-sm">
                   Population:
                   {new Intl.NumberFormat().format(data.population)}{" "}
                 </p>
               </div>
             </div>
           </div>}
         
       
    </div>
  );
};

export default CountryContent;
