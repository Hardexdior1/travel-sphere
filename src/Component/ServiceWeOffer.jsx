import React from 'react'
import service1 from "../Pages/images/service1.jpg"
import service2 from "../Pages/images/service2.jpg"
import service3 from "../Pages/images/service3.jpg"
import hand from "../Pages/images/hand.PNG"
const ServiceWeOffer = () => {

const service=[
    {
        title:"Housekeeper Services",
        text:"Get amazing room service from our staffs, who are there to ensure you have the best experience",
        img:hand,
    },
    {
        title:"Free Wifi",
        text:"Access to 24/7 WiFi, so you never get disconnected from your interests.",
        img:hand,
    },
    {
        title:"Gym",
        text:"24-hour gym with cardiovascular equipment and free weights to help you stay fit and healthy.",
        img:hand,
    },
    {
        title:"Breakfast",
        text:"Carefully curated menus incorporate locally sourced ingredients into exquisite dishes that reflect the locals and the world around them.",
        img:hand,
    }
]

  return (
    <div className="p-5 md:px-20 py-10">

        <center>
            <h1 className='font-bold'>DISCOVER THE SERVICES WE OFFER  </h1>
            
        </center>

        <div className='grid md:grid-cols-2 py-4 gap-5'>
            <div className='border'>
                <img src={service2} alt="property-img" />
            </div>


            <div>
                <h1 className='text-2xl font-semibold'>All the Essentials for a Cozy and Comfortable Stay</h1>


                <div className='py-5 grid gap-6 md:grid-cols-2 gap-6'>
                    {service.map((item)=>{
                        return <div key={item.title} className="flex items-top gap-4 shadow-md p-2 rounded s">

                            <div>
                                <img src={item.img} alt={item.title} className='w-40 '/>
                            </div>
                            <div>
                                <h1 className='mb-2 font-bold text-1xl'> {item.title} </h1>
                                <p className='font-semibold'> {item.text} </p>
                            
                            </div>

                        </div>
                    })}
                </div>

            </div>


        </div>
        


    </div>
  )
}

export default ServiceWeOffer