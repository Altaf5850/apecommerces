import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice";

const watchesData = [
  {
    id: 206,
    name: "Men's Analog Watch",
    image: "https://m.media-amazon.com/images/I/51sKbIrGvkL._AC_UY1000_.jpg",
    price: "₹3999",
  },
  {
    id: 207,
    name: "Women's Digital Watch",
    image:
      "https://goodsdream.com/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-20-at-1.21.53-AM.jpeg",
    price: "₹2499",
  },
  {
    id: 208,
    name: "Men's Sports Watch",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/xif0q/watch/y/s/1/-bg-enhanced-original-imagszc6z9dcdxxg.jpeg?q=70",
    price: "₹3499",
  },
  {
    id: 209,
    name: "Women's Bracelet Watch",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyuobFotfsaAQ9WJE5sU56rvyhtaq8sM7k5w&<s></s>",
    price: "₹2999",
  },
  {
    id: 210,
    name: "Men's Luxury Watch",
    image:
      "https://images.squarespace-cdn.com/content/v1/5c2a009a9f8770b74f1c1170/1620734898021-T5VBJ9ANGRFI0OTY1XL5/RX+DAY-DATE_OLIVE_02.jpg?format=1000w",
    price: "₹8999",
  },
  {
    id: 211,
    name: "Women's Fashion Watch",
    image:
      "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/98/0976852/1.jpg?3951",
    price: "₹1999",
  },
  {
    id: 212,
    name: "Men's Digital Watch",
    image:
      "https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/750x750/Golden-Colour-Analog-Digital-Watch-for-Men-1.jpg",
    price: "₹1999",
  },
  {
    id: 213,
    name: "Women's Classic Watch",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiNT-ummayIsHZNwkeMg3LL_Dti9B4FwuTNg&s",
    price: "₹1499",
  },
  {
    id: 214,
    name: "Men's Casual Watch",
    image: "https://m.media-amazon.com/images/I/71nY8WiSmhL._AC_UY350_.jpg",
    price: "₹1299",
  },
  {
    id: 215,
    name: "Women's Sporty Watch",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnqTq9HiOaGjvsm2mf2uo0R7a6WoinxfJISCa7OSIbgJA5K9bZl00XcAoCeum5Fe7K2pM&usqp=CAU",
    price: "₹1799",
  },
  {
    id: 216,
    name: "Men's Formal Watch",
    image: "https://m.media-amazon.com/images/I/713edVLRwhL._AC_SX466_.jpg",
    price: "₹4999",
  },
  {
    id: 217,
    name: "Women's Elegant Watch",
    image:
      "https://nemichandjewels.com/cdn/shop/files/IMG-20220510-WA0014.jpg?v=1684075103",
    price: "₹3499",
  },
  {
    id: 218,
    name: "Men's Chronograph Watch",
    image:
      "https://www.nsquarewatch.com/cdn/shop/products/8EE4F3EB-0F62-4483-A7EE-D36C16488A09_1024x1024.jpg?v=1677228324",
    price: "₹5999",
  },
  {
    id: 219,
    name: "Women's Vintage Watch",
    image:
      "https://i.etsystatic.com/21117077/r/il/fa8c90/4615312315/il_fullxfull.4615312315_a5cc.jpg",
    price: "₹2999",
  },
  {
    id: 220,
    name: "Men's Automatic Watch",
    image: "https://images.meesho.com/images/products/156511362/maios_512.webp",
    price: "₹6999",
  },
  {
    id: 221,
    name: "Women's Minimalist Watch",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220525/7O1S/628e0e26f997dd03e2257e65/-473Wx593H-4925841170-multi-MODEL.jpg",
    price: "₹1999",
  },
  {
    id: 222,
    name: "Men's Diver Watch",
    image:
      "https://pyxis.nymag.com/v1/imgs/111/c9d/daff0e8c3dd9177b708cdbb58fad2a57e1-Citizen-plastic.rhorizontal.w600.jpg",
    price: "₹7999",
  },
  {
    id: 223,
    name: "Women's Luxury Watch",
    image: "https://images.meesho.com/images/products/315813689/vwfoi_512.webp",
    price: "₹8499",
  },
  {
    id: 224,
    name: "Men's Pilot Watch",
    image: "https://m.media-amazon.com/images/I/71p8q9xrquL._AC_UY350_.jpg",
    price: "₹5999",
  },
  {
    id: 225,
    name: "Women's Ceramic Watch",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR48_Ujpy5QDATZS_HlTFATWrx5uNMEpMu-6vGPfH9HlAJ2DU6eabWR-jVAWPtiHFOtJQU&usqp=CAU",
    price: "₹4499",
  },
  {
    id: 21,
    name: "Round Men's SmartWatch",
    image: "https://justintime.in/cdn/shop/products/FTW4060.jpg?v=1682021990",
    price: "₹5499",
  },
  {
    id: 22,
    name: "Round Women's SmartWatch",
    image:
      "https://media.karousell.com/media/photos/products/2022/8/15/fossil_gen_6_smartwatch_rose_g_1660560020_4fc78606_progressive",
    price: "₹5999",
  },
  {
    id: 23,
    name: "Square Men's Ceramic Watch",
    image:
      "https://www.gadstyle.com/wp-content/uploads/2022/12/dt-8-ultra-plus-smart-watch-2.webp",
    price: "₹6599",
  },
  {
    id: 24,
    name: "Square Women's SmartWatch",
    image:
      "https://down-br.img.susercontent.com/file/38e27346255f1f403f90247abf6660b0_tn",
    price: "₹6999",
  },
];

const Card = ({ id, name, image, price }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden m-2 font-josefin">
      <img
        className="w-full h-48 object-cover hover:scale-105 duration-200 ease-in-out"
        src={image}
        alt={name}
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-josefin capitalize">{name}</h3>
        <p className="mt-2 text-gray-600 font-josefin">{price}</p>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded mt-4 mb-2"
          onClick={() => {
            dispatch(addToCart({ id, name, image, price }));
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const WatchesGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8 font-josefin">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {watchesData.map((watch) => (
          <Card
            key={watch.id}
            id={watch.id}
            name={watch.name}
            image={watch.image}
            price={watch.price}
          />
        ))}
      </div>
    </div>
  );
};

export default WatchesGrid;
