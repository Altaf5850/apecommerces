import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice";

const toysData = [
  {
    id: 261,
    name: "Toy Car",
    image:
      "https://fliptoy.in/cdn/shop/products/main-image-1-1.jpg?v=1698398282",
    price: "₹599",
  },
  {
    id: 262,
    name: "Doll House",
    image:
      "https://www.nickandalicia.com/wp-content/uploads/2022/11/Doll-House-0986.jpg",
    price: "₹1999",
  },
  {
    id: 263,
    name: "Lego Set",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv-9TXw0Zg-JBVYuVl-aifzst9P-yicqcuDD9c78F0vgMg-Fy2Sqh5gk4LT7zMhduJnuI&usqp=CAU",
    price: "₹1499",
  },
  {
    id: 264,
    name: "Action Figure",
    image:
      "https://www.toysrus.co.za/media/catalog/product/cache/f1f6de05b7f74ffe86c1d44f4118e994/5/0/5010993967568_imageoutofpack.png",
    price: "₹999",
  },
  {
    id: 265,
    name: "Puzzle",
    image:
      "https://5.imimg.com/data5/TI/FO/MY-40842245/rubix-cubes-250x250.jpg",
    price: "₹499",
  },
  {
    id: 266,
    name: "Board Game",
    image:
      "https://fabfinds.co.uk/cdn/shop/products/100-classic-board-games-fabfinds_1_500x500.jpg?v=1666596143",
    price: "₹799",
  },
  {
    id: 267,
    name: "Stuffed Animal",
    image:
      "https://media.istockphoto.com/id/529385137/photo/group-of-stuffed-animals.jpg?s=612x612&w=0&k=20&c=s7ghHuLGgtVMXcXRiTZ1ra9w7ryq4Cx45hPJmMCDNrM=",
    price: "₹699",
  },
  {
    id: 268,
    name: "Remote Control Car",
    image:
      "https://images-cdn.ubuy.qa/657ca73404658119b21e639d-qun-feng-remote-control-rc-car-racing.jpg",
    price: "₹1299",
  },
  {
    id: 269,
    name: "Building Blocks",
    image:
      "https://i.pinimg.com/236x/46/97/d4/4697d4595eae74bece94860a3e77d17e--mega-blocks-lego-ideas.jpg",
    price: "₹899",
  },
  {
    id: 270,
    name: "Toy Train Set",
    image:
      "https://www.jiomart.com/images/product/original/rv6qz2ddhd/ktrs-enterprise-cartoon-learning-toy-thoms-train-track-world-set-classic-train-toy-for-kids-11-pieces-train-set-with-container-age-3-years-multi-color-product-images-orv6qz2ddhd-p605868571-0-202310280513.jpg?im=Resize=(420,420)",
    price: "₹1599",
  },
  {
    id: 271,
    name: "Pokemon Rainbow Card Box",
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/card-game/b/t/1/6-waterproof-55pcs-pokemon-tcg-rainbow-card-box-v-series-vmax-gx-original-imaghredfyceksjg.jpeg?q=70",
    price: "299",
  },
  {
    id: 272,
    name: "Baby Panda Swing Magic Car",
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/shopsy-outdoor-toy/v/x/y/1-eco-panda-51909-siwng-magic-car-for-play-myhoodwink-original-imaghhpsed4a6rud.jpeg?q=70",
    price: "₹999",
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
      <div className="p-4">
        <h3 className="text-lg font-semibold capitalize text-center">{name}</h3>
        <p className="mt-2 text-gray-600 text-center">{price}</p>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded mt-4 ml-24 md:ml-16 mb-2"
          onClick={() => dispatch(addToCart({ id, name, image, price }))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const ToysGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8 font-josefin">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {toysData.map((toy) => (
          <Card
            key={toy.id}
            id={toy.id}
            name={toy.name}
            image={toy.image}
            price={toy.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ToysGrid;
