import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice";
const furnitureData = [
  {
    id: 130,
    name: "Modern Sofa",
    image:
      "https://ae01.alicdn.com/kf/Sebcfffeecd60453294b74cf316175d04P/Ground-Garden-Bubble-Sofa-Living-Room-Mini-Bedroom-Air-Sofa-Modern-Couch-Lazy-Home-Tuinmeubelen-Sets.jpg",
    price: "₹15999",
  },
  {
    id: 132,
    name: "Dining Table Set",
    image:
      "https://ekbotefurniture.com/wp-content/uploads/2023/11/IMG_4209.jpg",
    price: "₹24999",
  },
  {
    id: 133,
    name: "Office Chair",
    image:
      "https://media.istockphoto.com/id/1284066336/photo/modern-gadgets-in-interior-of-coworking-office-during-covid-19-epidemic.jpg?s=612x612&w=0&k=20&c=Rl3eAbIDD7aCe63ibkA7Ng_-VJV-Npuc9Ey_eIE24U8=",
    price: "₹6999",
  },
  {
    id: 134,
    name: "Wooden Bed",
    image:
      "https://www.insaraf.com/cdn/shop/products/DSC_3912.jpg?v=1534599708",
    price: "₹20999",
  },
  {
    id: 135,
    name: "Bookshelf",
    image:
      "https://i.pinimg.com/originals/a2/a4/38/a2a438277841d8faa52453cab58f3e5c.jpg",
    price: "₹5999",
  },
  {
    id: 136,
    name: "TV Stand",
    image:
      "https://lakshmishomestyle.in/wp-content/uploads/2023/08/Free_Standing_TV_Unit.jpg",
    price: "₹7999",
  },
  {
    id: 137,
    name: "Wardrobe",
    image:
      "https://media.designcafe.com/wp-content/uploads/2022/04/01164258/elegant-white-wardrobe-designs-for-bedroom.jpg",
    price: "₹17999",
  },
  {
    id: 138,
    name: "Coffee Table",
    image:
      "https://images-cdn.ubuy.co.in/64ebbd20bdd3d7295b200531-hommpa-led-coffee-table-rectangular-high.jpg",
    price: "₹4999",
  },
  {
    id: 139,
    name: "Recliner",
    image:
      "https://www.at-home.co.in/cdn/shop/products/ComfyReclineropen01.jpg?v=1658826431",
    price: "₹9999",
  },
  {
    id: 140,
    name: "Study Desk",
    image: "https://m.media-amazon.com/images/I/71EYrMjWDlL.jpg",
    price: "₹8999",
  },
  {
    id: 141,
    name: "Nightstand",
    image:
      "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202423/0015/sausalito-3-drawer-nightstand-o.jpg",
    price: "₹3999",
  },
  {
    id: 142,
    name: "Sectional Sofa",
    image:
      "https://ikiru.in/cdn/shop/files/buy-sofas-chiyo-wooden-l-shaped-sofa-or-2-seater-left-facing-sectional-sofa-for-living-room-by-orange-tree-on-ikiru-online-store-1_1120x700.jpg?v=1715171354",
    price: "₹34999",
  },
  {
    id: 143,
    name: "bedroom set",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZIIVRe1n9JervPcYEk7FIO-AQwFHiQo3ItA&s",
    price: "₹01,04,999",
  },
  {
    id: 144,
    name: "Accent Chair",
    image:
      "https://m.media-amazon.com/images/I/81MBEpu+RiL._AC_UF894,1000_QL80_.jpg",
    price: "₹8999",
  },
  {
    id: 145,
    name: "Patio Set",
    image:
      "https://images-cdn.ubuy.co.in/64cae53c9d8fc464827120ec-lacoo-4-pieces-patio-furniture-sets.jpg",
    price: "₹21999",
  },
  {
    id: 146,
    name: "Ottoman",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR9Wuyi0CBvrPJwf_Ji_ZXo7hQy_xUGN20hA&s",
    price: "₹2999",
  },
  {
    id: 147,
    name: "Console Table",
    image: "https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg",
    price: "₹6999",
  },
  {
    id: 148,
    name: "Dresser",
    image:
      "https://assets.wfcdn.com/im/52230675/compr-r85/1820/182012922/stratton-9-drawer-dresser-and-mirror.jpg",
    price: "₹14999",
  },
  {
    id: 149,
    name: "Vanity Table",
    image:
      "https://ae01.alicdn.com/kf/S6c22fe544cc345f9a088714db20411622.jpg_640x640Q90.jpg_.webp",
    price: "₹12999",
  },
  {
    id: 150,
    name: "Bookshelf with Cabinet",
    image: "https://wallmantra.com/wp-content/uploads/5098_jpg.jpg",
    price: "₹7999",
  },
];

const Card = ({ id, name, image, price }) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden m-2">
      <img
        className="w-full h-48 object-cover hover:scale-105 duration-200 ease-in-out"
        src={image}
        alt={name}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold capitalize text-center">{name}</h3>
        <p className="mt-2 text-gray-600 text-center">{price}</p>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded mt-4 ml-24 md:ml-16  mb-2"
          onClick={() => dispatch(addToCart({ id, name, image, price }))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const FurnitureGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8 font-josefin">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {furnitureData.map((furniture) => (
          <Card
            key={furniture.id}
            id={furniture.id}
            name={furniture.name}
            image={furniture.image}
            price={furniture.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FurnitureGrid;
