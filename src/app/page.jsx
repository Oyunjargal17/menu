"use client";
import { useState } from "react";
const menus = [
  {
    id: 1,
    type: "breakfast",
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-1.jpeg",
    title: "Buttermilk Pancakes",
    price: "$15.99",
    text: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 2,
    type: "lunch",
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-2.jpeg",
    title: "Diner Double",
    price: "$13.99",
    text: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
  },
  {
    id: 3,
    type: "shakes",
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-3.jpeg",
    title: "Godzilla Milkshake",
    price: "$6.99",
    text: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
  },
  {
    id: 4,
    type: "breakfast",
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-4.jpeg",
    title: "Country Delight",
    price: "$20.99",
    text: "I'Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm",
  },
  {
    id: 5,
    type: "lunch",
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-5.jpeg",
    title: "Egg Attack",
    price: "$22.99",
    text: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
  },
  {
    id: 6,
    type: "shakes",
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-6.jpeg",
    title: "Oreo Dream",
    price: "$18.99",
    text: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
  },
  {
    id: 7,
    type: "breakfast",
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-7.jpeg",
    title: "Bacon Overflow",
    price: "$8.99",
    text: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
  },
  {
    id: 8,
    type: "lunch",
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-8.jpeg",
    title: "American Classic",
    price: "$12.99",
    text: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
  },
  {
    id: 9,
    type: "shakes",
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-9.jpeg",
    title: "Quarantine Buddy",
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
  const showAll = () => {
    setMenuList(menus);
  };
  const showBreakfast = () => {
    const filtered = menuList.filter((item) => item.type === "breakfast");
    setMenuList(filtered);
  };

  const showLunch = () => {
    const filtered = menuList.filter((item) => item.type === "lunch");
    setMenuList(filtered);
  };

  return (
    <div className="bg-[#f9fafc] h-screens ">
      <div className="flex flex-col justify-center items-center p-3">
        <h1 className="text-3xl ">Our Menu</h1>
        <div className="h-1 w-20 bg-[#f4a016] mt-2"></div>
        <div className=" flex gap-3 mt-4">
          <button
            onClick={showAll}
            className="bg-[#f49d0e] font-semibold py-1 px-6 rounded-xs text-white hover:bg-[0, 0, 0.3]"
          >
            All
          </button>
          <button
            onClick={showBreakfast}
            className="bg-[#f49d0e] 
         font-semibold py-1 px-6 rounded-xs text-white"
          >
            Breakfast
          </button>
          <button
            onClick={showLunch}
            className="bg-[#f49d0e] font-semibold py-1 px-6 rounded-xs text-white"
          >
            Lunch
          </button>
          <button className="bg-[#f49d0e] font-semibold py-1 px-6 rounded-xs text-white">
            Shakes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mx-auto px-[20px]">
        {menuList.map(({ id, image, title, price, text }) => (
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
      <div className="bg-white w-100">
        <img className="w-100 h-62.5 rounded-sm mt-4" src={image} alt="image" />
        <div className="flex justify-between p-2">
          <h1 className="font-semibold ">{title}</h1>
          <p className="font-semibold bg-[#f49d0d] rounded-xs text-white text-center w-15">
            {price}
          </p>
        </div>
        <p className="text-base p-2">{text}</p>
      </div>
    </div>
  );
};
