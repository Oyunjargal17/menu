"use client";
import { useState } from "react";
const menus = [
  {
    id: 1,
    type: "breakfast",
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-1.jpeg",
    title: "buttermilk pancakes",
    price: "$15.99",
    text: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 2,
    type: "lunch",
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-2.jpeg",
    title: "diner double",
    price: "$13.99",
    text: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
  },
  {
    id: 3,
    type: "shakes",
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-3.jpeg",
    title: "godzilla milkshake",
    price: "$6.99",
    text: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
  },
  {
    id: 4,
    type: "breakfast",
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-4.jpeg",
    title: "country delight",
    price: "$20.99",
    text: "I'Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm",
  },
  {
    id: 5,
    type: "lunch",
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-5.jpeg",
    title: "egg attack",
    price: "$22.99",
    text: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
  },
  {
    id: 6,
    type: "shakes",
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-6.jpeg",
    title: "oreo dream",
    price: "$18.99",
    text: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
  },
  {
    id: 7,
    type: "breakfast",
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-7.jpeg",
    title: "bacon overflow",
    price: "$8.99",
    text: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
  },
  {
    id: 8,
    type: "lunch",
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-8.jpeg",
    title: "american classic",
    price: "$12.99",
    text: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
  },
  {
    id: 9,
    type: "shakes",
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-9.jpeg",
    title: "quarantine buddy",
    price: "$16.99",
    text: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
  },
];
export default function Home() {
  return (
    <div>
      <MenuList />
    </div>
  );
}
const MenuList = () => {
  const [menuList, setMenuList] = useState(menus);
  return (
    <div className="bg-[#f9fafc] h-screens ">
      <div className="flex flex-col justify-center items-center p-3">
        <h1 className="text-3xl ">Our Menu</h1>
        <div className="h-1 w-20 bg-[#f4a016] mt-2"></div>
        <div className=" flex gap-3 mt-4">
          <button className="bg-[#f49d0e] p-2 rounded-xs text-white">
            All
          </button>
          <button className="bg-[#f49d0e] p-2 rounded-xs text-white">
            Breakfast
          </button>
          <button className="bg-[#f49d0e] p-2 rounded-xs text-white">
            Lunch
          </button>
          <button className="bg-[#f49d0e] p-2 rounded-xs text-white">
            Shakes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {menus.map(({ id, image, title, price, text }) => (
          <MenuListItem
            key={id}
            id={id}
            image={image}
            title={title}
            price={price}
            text={text}
          />
        ))}
      </div>
    </div>
  );
};

const MenuListItem = ({ id, image, title, price, text }) => {
  return (
    <div>
      <div>
        <img
          className="w-[400px] h-[250px] rounded-sm mt-4"
          src={image}
          alt="image"
        />
        <h1>{title}</h1>
        <p>{price}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
