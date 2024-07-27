import inspired1 from "../Pages/images/inspired1.jpg";
import inspired2 from "../Pages/images/inspired2.jpg";
import inspired3 from "../Pages/images/inspired3.jpg";
import inspired4 from "../Pages/images/inspired4.jpg";
import inspired5 from "../Pages/images/inspired5.jpg";
import inspired6 from "../Pages/images/inspired6.jpg";
import inspired7 from "../Pages/images/inspired7.jpg";
import inspired8 from "../Pages/images/inspired8.jpg";
import inspired9 from "../Pages/images/inspired9.jpg";
import inspired10 from "../Pages/images/inspired10.jpg";
import inspired11 from "../Pages/images/inspired11.jpg";
import inspired12 from "../Pages/images/inspired12.jpg";
import inspired13 from "../Pages/images/inspired13.jpg";
import inspired14 from "../Pages/images/inspired14.jpg";
import inspired16 from "../Pages/images/inspired16.jpg";
import inspired17 from "../Pages/images/inspired17.jpg";
import inspired18 from "../Pages/images/inspired18.jpg";
import inspired19 from "../Pages/images/inspired19.jpg";
import inspired20 from "../Pages/images/inspired20.jpg";
import inspired21 from "../Pages/images/inspired21.webp";
import inspired22 from "../Pages/images/inspired22.jpg";
import inspired23 from "../Pages/images/inspired23.jpg";
import inspired24 from "../Pages/images/inspired24.jpg";
import inspired25 from "../Pages/images/inspired25.jpg";
import inspired26 from "../Pages/images/inspired26.jpg";
import inspired27 from "../Pages/images/inspired27.jpg";
const AllData = [
  {
    gridImg1: inspired1,
    gridImg2: inspired2,
    gridImg3: inspired3,
    gridImg4: inspired4,
    name: "Polynesia",
    country: "French Polynesia",
    review: "8.7",
    howManyReview: Math.floor(Math.random() * 100) + 1,
    id: 1,

    apartment: "Entire apartment",
    private: "Private bathroom",
    view: "Sea view",
    shower: "Shower",
    room: "Family rooms",
    machine: "Washing machine",

    slider: [
      {
        gridImg: inspired1,
      },
      {
        gridImg: inspired2,
      },
      {
        gridImg: inspired3,
      },
      {
        gridImg: inspired4,
      },
    ],
  },
  // {
  //   name: "Maldives",
  //   country: "Maldives",
  //   review: "9.2",
  //   howManyReview: Math.floor(Math.random() * 100) + 1,
  //   id: 2,
  //   apartment: "Entire apartment",
  //   private: "Private bathroom",
  //   view: "Sea view",
  //   shower: "Shower",
  //   room: "Family rooms",
  //   machine: "Washing machine",
  //   gridImg1: inspired5,
  //   gridImg2: inspired6,
  //   gridImg3: inspired7,
  //   gridImg4: inspired8,

  //   slider: [
  //     {
  //       gridImg: inspired5,
  //     },
  //     {
  //       gridImg: inspired6,
  //     },
  //     {
  //       gridImg: inspired7,
  //     },
  //     {
  //       gridImg: inspired8,
  //     },
  //   ],
  // },
  // {
  //   name: "Santorini",
  //   country: "Greece",
  //   review: "8.5",
  //   howManyReview: Math.floor(Math.random() * 100) + 1,
  //   id: 3,
  //   apartment: "Entire apartment",
  //   private: "Private bathroom",
  //   view: "Sea view",
  //   shower: "Shower",
  //   room: "Family rooms",
  //   machine: "Washing machine",
  //   gridImg1: inspired2,
  //   gridImg2: inspired3,
  //   gridImg3: inspired4,
  //   gridImg4: inspired5,

  //   slider: [
  //     {
  //       gridImg: inspired2,
  //     },
  //     {
  //       gridImg: inspired3,
  //     },
  //     {
  //       gridImg: inspired4,
  //     },
  //     {
  //       gridImg: inspired5,
  //     },
  //   ],
  // },
  // {
  //   name: "Swiss Alps",
  //   country: "Switzerland",
  //   review: "9.0",
  //   howManyReview: Math.floor(Math.random() * 100) + 1,
  //   id: 4,
  //   apartment: "Entire apartment",
  //   private: "Private bathroom",
  //   view: "Sea view",
  //   shower: "Shower",
  //   room: "Family rooms",
  //   machine: "Washing machine",

  //   gridImg1: inspired2,
  //   gridImg2: inspired3,
  //   gridImg3: inspired4,
  //   gridImg4: inspired5,
  //   slider: [
  //     {
  //       gridImg: inspired2,
  //     },
  //     {
  //       gridImg: inspired3,
  //     },
  //     {
  //       gridImg: inspired4,
  //     },
  //     {
  //       gridImg: inspired5,
  //     },
  //   ],
  // },
  // {
  //   name: "Maui",
  //   country: "USA (Hawaii)",
  //   review: "8.8",
  //   howManyReview: Math.floor(Math.random() * 100) + 1,
  //   id: 5,
  //   apartment: "Entire apartment",
  //   private: "Private bathroom",
  //   view: "Sea view",
  //   shower: "Shower",
  //   room: "Family rooms",
  //   machine: "Washing machine",
  //   gridImg1: inspired2,
  //   gridImg2: inspired3,
  //   gridImg3: inspired4,
  //   gridImg4: inspired5,

  //   slider: [
  //     {
  //       gridImg: inspired2,
  //     },
  //     {
  //       gridImg: inspired3,
  //     },
  //     {
  //       gridImg: inspired4,
  //     },
  //     {
  //       gridImg: inspired5,
  //     },
  //   ],
  // },
  // {
  //   name: "Canada",
  //   country: "Canada",
  //   review: "8.3",
  //   howManyReview: Math.floor(Math.random() * 100) + 1,
  //   id: 6,
  //   apartment: "Entire apartment",
  //   private: "Private bathroom",
  //   view: "Sea view",
  //   shower: "Shower",
  //   room: "Family rooms",
  //   machine: "Washing machine",
  //   gridImg1: inspired2,
  //   gridImg2: inspired3,
  //   gridImg3: inspired4,
  //   gridImg4: inspired5,

  //   slider: [
  //     {
  //       gridImg: inspired2,
  //     },
  //     {
  //       gridImg: inspired3,
  //     },
  //     {
  //       gridImg: inspired4,
  //     },
  //     {
  //       gridImg: inspired5,
  //     },
  //   ],
  // },
  // {
  //   name: "Lake Como",
  //   country: "Italy",
  //   review: "8.9",
  //   howManyReview: Math.floor(Math.random() * 100) + 1,
  //   id: 7,
  //   apartment: "Entire apartment",
  //   private: "Private bathroom",
  //   view: "Sea view",
  //   shower: "Shower",
  //   room: "Family rooms",
  //   machine: "Washing machine",
  //   gridImg1: inspired2,
  //   gridImg2: inspired3,
  //   gridImg3: inspired4,
  //   gridImg4: inspired5,

  //   slider: [
  //     {
  //       gridImg: inspired2,
  //     },
  //     {
  //       gridImg: inspired3,
  //     },
  //     {
  //       gridImg: inspired4,
  //     },
  //     {
  //       gridImg: inspired5,
  //     },
  //   ],
  // },
  // {
  //   name: "Queenstown",
  //   country: "New Zealand",
  //   review: "9.1",
  //   howManyReview: Math.floor(Math.random() * 100) + 1,
  //   id: 8,
  //   apartment: "Entire apartment",
  //   private: "Private bathroom",
  //   view: "Sea view",
  //   shower: "Shower",
  //   room: "Family rooms",
  //   machine: "Washing machine",
  //   gridImg1: inspired2,
  //   gridImg2: inspired3,
  //   gridImg3: inspired4,
  //   gridImg4: inspired5,

  //   slider: [
  //     {
  //       gridImg: inspired2,
  //     },
  //     {
  //       gridImg: inspired3,
  //     },
  //     {
  //       gridImg: inspired4,
  //     },
  //     {
  //       gridImg: inspired5,
  //     },
  //   ],
  // },
  // {
  //   name: "Olumo Rock",
  //   country: "Nigeria",
  //   review: "7.4",
  //   howManyReview: Math.floor(Math.random() * 100) + 1,
  //   id: 9,
  //   apartment: "Entire apartment",
  //   private: "Private bathroom",
  //   view: "Sea view",
  //   shower: "Shower",
  //   room: "Family rooms",
  //   machine: "Washing machine",
  //   gridImg1: inspired2,
  //   gridImg2: inspired3,
  //   gridImg3: inspired4,
  //   gridImg4: inspired5,

  //   slider: [
  //     {
  //       gridImg: inspired2,
  //     },
  //     {
  //       gridImg: inspired3,
  //     },
  //     {
  //       gridImg: inspired4,
  //     },
  //     {
  //       gridImg: inspired5,
  //     },
  //   ],
  // },
  // {
  //   name: "Bora Bora",
  //   country: "French Polynesia",
  //   review: "9.3",
  //   howManyReview: Math.floor(Math.random() * 100) + 1,
  //   id: 10,
  //   apartment: "Entire apartment",
  //   private: "Private bathroom",
  //   view: "Sea view",
  //   shower: "Shower",
  //   room: "Family rooms",
  //   machine: "Washing machine",
  //   gridImg1: inspired2,
  //   gridImg2: inspired3,
  //   gridImg3: inspired4,
  //   gridImg4: inspired5,

  //   slider: [
  //     {
  //       gridImg: inspired2,
  //     },
  //     {
  //       gridImg: inspired3,
  //     },
  //     {
  //       gridImg: inspired4,
  //     },
  //     {
  //       gridImg: inspired5,
  //     },
  //   ],
  // },
  // {
  //   name: "Ibiza",
  //   country: "Spain",
  //   review: "8.6",
  //   howManyReview: Math.floor(Math.random() * 100) + 1,
  //   id: 11,
  //   apartment: "Entire apartment",
  //   private: "Private bathroom",
  //   view: "Sea view",
  //   shower: "Shower",
  //   room: "Family rooms",
  //   machine: "Washing machine",

  //   gridImg1: inspired2,
  //   gridImg2: inspired3,
  //   gridImg3: inspired4,
  //   gridImg4: inspired5,

  //   slider: [
  //     {
  //       gridImg: inspired2,
  //     },
  //     {
  //       gridImg: inspired3,
  //     },
  //     {
  //       gridImg: inspired4,
  //     },
  //     {
  //       gridImg: inspired5,
  //     },
  //   ],
  // },
  // {
  //   name: "Tuscany",
  //   country: "Italy",
  //   review: "8.4",
  //   howManyReview: Math.floor(Math.random() * 100) + 1,
  //   id: 12,
  //   apartment: "Entire apartment",
  //   private: "Private bathroom",
  //   view: "Sea view",
  //   shower: "Shower",
  //   room: "Family rooms",
  //   machine: "Washing machine",

  //   gridImg1: inspired2,
  //   gridImg2: inspired3,
  //   gridImg3: inspired4,
  //   gridImg4: inspired5,

  //   slider: [
  //     {
  //       gridImg: inspired2,
  //     },
  //     {
  //       gridImg: inspired3,
  //     },
  //     {
  //       gridImg: inspired4,
  //     },
  //     {
  //       gridImg: inspired5,
  //     },
  //   ],
  // },
  

  
  {
    gridImg1: inspired5,
    gridImg2: inspired6,
    gridImg3: inspired7,
    gridImg4: inspired8,
    name: "Maldives",
    country: "Maldives",
    review: "9.2",
    howManyReview: Math.floor(Math.random() * 100) + 1,
    id: 2,
    apartment: "Entire apartment",
    private: "Private bathroom",
    view: "Sea view",
    shower: "Shower",
    room: "Family rooms",
    machine: "Washing machine",
    slider: [
      { gridImg: inspired5 },
      { gridImg: inspired6 },
      { gridImg: inspired7 },
      { gridImg: inspired8 },
    ],
  },
  {
    gridImg1: inspired9,
    gridImg2: inspired10,
    gridImg3: inspired11,
    gridImg4: inspired12,
    name: "Santorini",
    country: "Greece",
    review: "8.5",
    howManyReview: Math.floor(Math.random() * 100) + 1,
    id: 3,
    apartment: "Entire apartment",
    private: "Private bathroom",
    view: "Sea view",
    shower: "Shower",
    room: "Family rooms",
    machine: "Washing machine",
    slider: [
      { gridImg: inspired9 },
      { gridImg: inspired10 },
      { gridImg: inspired11 },
      { gridImg: inspired12 },
    ],
  },
  {
    gridImg1: inspired13,
    gridImg2: inspired14,
    gridImg3: inspired17,
    gridImg4: inspired16,
    name: "Swiss Alps",
    country: "Switzerland",
    review: "9.0",
    howManyReview: Math.floor(Math.random() * 100) + 1,
    id: 4,
    apartment: "Entire apartment",
    private: "Private bathroom",
    view: "Sea view",
    shower: "Shower",
    room: "Family rooms",
    machine: "Washing machine",
    slider: [
      { gridImg: inspired13 },
      { gridImg: inspired14 },
      { gridImg: inspired17 },
      { gridImg: inspired16 },
    ],
  },
  {
    gridImg1: inspired17,
    gridImg2: inspired18,
    gridImg3: inspired19,
    gridImg4: inspired20,
    name: "Maui",
    country: "USA (Hawaii)",
    review: "8.8",
    howManyReview: Math.floor(Math.random() * 100) + 1,
    id: 5,
    apartment: "Entire apartment",
    private: "Private bathroom",
    view: "Sea view",
    shower: "Shower",
    room: "Family rooms",
    machine: "Washing machine",
    slider: [
      { gridImg: inspired17 },
      { gridImg: inspired18 },
      { gridImg: inspired19 },
      { gridImg: inspired20 },
    ],
  },
  {
    gridImg1: inspired21,
    gridImg2: inspired22,
    gridImg3: inspired23,
    gridImg4: inspired24,
    name: "Canada",
    country: "Canada",
    review: "8.3",
    howManyReview: Math.floor(Math.random() * 100) + 1,
    id: 6,
    apartment: "Entire apartment",
    private: "Private bathroom",
    view: "Sea view",
    shower: "Shower",
    room: "Family rooms",
    machine: "Washing machine",
    slider: [
      { gridImg: inspired21 },
      { gridImg: inspired22 },
      { gridImg: inspired23 },
      { gridImg: inspired24 },
    ],
  },
  {
    gridImg1: inspired25,
    gridImg2: inspired26,
    gridImg3: inspired27,
    gridImg4: inspired20,
    name: "Lake Como",
    country: "Italy",
    review: "8.9",
    howManyReview: Math.floor(Math.random() * 100) + 1,
    id: 7,
    apartment: "Entire apartment",
    private: "Private bathroom",
    view: "Sea view",
    shower: "Shower",
    room: "Family rooms",
    machine: "Washing machine",
    slider: [
      { gridImg: inspired25 },
      { gridImg: inspired26 },
      { gridImg: inspired27 },
      { gridImg: inspired20 },
    ],
  },



  // new images
  {
    gridImg1: inspired12,
    gridImg2: inspired14,
    gridImg3: inspired3,
    gridImg4: inspired5,
    name: "Queenstown",
    country: "New Zealand",
    review: "9.1",
    howManyReview: Math.floor(Math.random() * 100) + 1,
    id: 8,
    apartment: "Entire apartment",
    private: "Private bathroom",
    view: "Sea view",
    shower: "Shower",
    room: "Family rooms",
    machine: "Washing machine",
    slider: [
      { gridImg: inspired12 },
      { gridImg: inspired14 },
      { gridImg: inspired3 },
      { gridImg: inspired5 },
    ],
  },
  {
    gridImg1: inspired5,
    gridImg2: inspired10,
    gridImg3: inspired19,
    gridImg4: inspired18,
    name: "Olumo Rock",
    country: "Nigeria",
    review: "7.4",
    howManyReview: Math.floor(Math.random() * 100) + 1,
    id: 9,
    apartment: "Entire apartment",
    private: "Private bathroom",
    view: "Sea view",
    shower: "Shower",
    room: "Family rooms",
    machine: "Washing machine",
    slider: [
      { gridImg: inspired5 },
      { gridImg: inspired10 },
      { gridImg: inspired19 },
      { gridImg: inspired18 },
    ],
  },
  {
    gridImg1: inspired19,
    gridImg2: inspired21,
    gridImg3: inspired23,
    gridImg4: inspired20,
    name: "Bora Bora",
    country: "French Polynesia",
    review: "9.3",
    howManyReview: Math.floor(Math.random() * 100) + 1,
    id: 10,
    apartment: "Entire apartment",
    private: "Private bathroom",
    view: "Sea view",
    shower: "Shower",
    room: "Family rooms",
    machine: "Washing machine",
    slider: [
      { gridImg: inspired19 },
      { gridImg: inspired21 },
      { gridImg: inspired23 },
      { gridImg: inspired20 },
    ],
  },
  {
    gridImg1: inspired14,
    gridImg2: inspired12,
    gridImg3: inspired11,
    gridImg4: inspired16,
    name: "Ibiza",
    country: "Spain",
    review: "8.6",
    howManyReview: Math.floor(Math.random() * 100) + 1,
    id: 11,
    apartment: "Entire apartment",
    private: "Private bathroom",
    view: "Sea view",
    shower: "Shower",
    room: "Family rooms",
    machine: "Washing machine",
    slider: [
      { gridImg: inspired14 },
      { gridImg: inspired12 },
      { gridImg: inspired11 },
      { gridImg: inspired16 },
    ],
  },
  {
    gridImg1: inspired17,
    gridImg2: inspired18,
    gridImg3: inspired19,
    gridImg4: inspired20,
    name: "Tuscany",
    country: "Italy",
    review: "8.4",
    howManyReview: Math.floor(Math.random() * 100) + 1,
    id: 12,
    apartment: "Entire apartment",
    private: "Private bathroom",
    view: "Sea view",
    shower: "Shower",
    room: "Family rooms",
    machine: "Washing machine",
    slider: [
      { gridImg: inspired17 },
      { gridImg: inspired18 },
      { gridImg: inspired19 },
      { gridImg: inspired20 },
    ],
  },
  {
    name: "Kyoto",
    country: "Japan",
    review: "8.7",
    howManyReview: Math.floor(Math.random() * 100) + 1,
    id: 13,
    apartment: "Entire apartment",
    private: "Private bathroom",
    view: "Sea view",
    shower: "Shower",
    room: "Family rooms",
    machine: "Washing machine",
    gridImg1: inspired20,
    gridImg2: inspired13,
    gridImg3: inspired14,
    gridImg4: inspired25,
    slider: [
      {
        gridImg: inspired20,
      },
      {
        gridImg: inspired13,
      },
      {
        gridImg: inspired14,
      },
      {
        gridImg: inspired25,
      },
    ],
  },
  {
    name: "Lagos",
    country: "Japan",
    review: "8.7",
    howManyReview: Math.floor(Math.random() * 100) + 1,
    id: 14,
    apartment: "Entire apartment",
    private: "Private bathroom",
    view: "Sea view",
    shower: "Shower",
    room: "Family rooms",
    machine: "Washing machine",
    gridImg1: inspired20,
    gridImg2: inspired22,
    gridImg3: inspired14,
    gridImg4: inspired23,
    slider: [
      {
        gridImg: inspired20,
      },
      {
        gridImg: inspired22,
      },
      {
        gridImg: inspired14,
      },
      {
        gridImg: inspired23,
      },
    ],
  },
  {
    name: "ikeja",
    country: "Japan",
    review: "8.7",
    howManyReview: Math.floor(Math.random() * 100) + 1,
    id: 15,
    apartment: "Entire apartment",
    private: "Private bathroom",
    view: "Sea view",
    shower: "Shower",
    room: "Family rooms",
    machine: "Washing machine",
    gridImg1: inspired6,
    gridImg2: inspired17,
    gridImg3: inspired11,
    gridImg4: inspired10,
    slider: [
      {
        gridImg: inspired6,
      },
      {
        gridImg: inspired17,
      },
      {
        gridImg: inspired11,
      },
      {
        gridImg: inspired10,
      },
    ],
  },
  {
    name: "ibadan",
    country: "Japan",
    review: "8.7",
    howManyReview: Math.floor(Math.random() * 100) + 1,
    id: 16,
    apartment: "Entire apartment",
    private: "Private bathroom",
    view: "Sea view",
    shower: "Shower",
    room: "Family rooms",
    machine: "Washing machine",
    gridImg1: inspired14,
    gridImg2: inspired19,
    gridImg3: inspired21,
    gridImg4: inspired2,
    slider: [
      {
        gridImg: inspired14,
      },
      {
        gridImg: inspired19,
      },
      {
        gridImg: inspired21,
      },
      {
        gridImg: inspired2,
      },
    ],
  },
  {
    name: "benin",
    country: "Japan",
    review: "8.7",
    howManyReview: Math.floor(Math.random() * 100) + 1,
    id: 17,
    apartment: "Entire apartment",
    private: "Private bathroom",
    view: "Sea view",
    shower: "Shower",
    room: "Family rooms",
    machine: "Washing machine",
    gridImg1: inspired8,
    gridImg2: inspired23,
    gridImg3: inspired14,
    gridImg4: inspired5,
    slider: [
      {
        gridImg: inspired8,
      },
      {
        gridImg: inspired23,
      },
      {
        gridImg: inspired14,
      },
      {
        gridImg: inspired5,
      },
    ],
  },
  {
    name: "lekki",
    country: "Japan",
    review: "8.7",
    howManyReview: Math.floor(Math.random() * 100) + 1,
    id: 18,
    apartment: "Entire apartment",
    private: "Private bathroom",
    view: "Sea view",
    shower: "Shower",
    room: "Family rooms",
    machine: "Washing machine",
    gridImg1: inspired12,
    gridImg2: inspired3,
    gridImg3: inspired4,
    gridImg4: inspired25,
    slider: [
      {
        gridImg: inspired12,
      },
      {
        gridImg: inspired3,
      },
      {
        gridImg: inspired4,
      },
      {
        gridImg: inspired25,
      },
    ],
  },
];

export default AllData;











  
   
