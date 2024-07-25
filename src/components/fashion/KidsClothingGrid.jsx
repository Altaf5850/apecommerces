import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice";

const kidsClothingData = [
  {
    id: 110,
    name: "Boys' T-Shirt",
    image:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/kids-t-shirt/n/3/h/4-5-years-bt-rib-010406-iw-kk-234-p3-kavya-original-imagn39d4tttpwsb.jpeg?q=90&crop=false",
    price: "₹499",
    category: "Boys",
  },
  {
    id: 111,
    name: "Girls' Dress",
    image:
      "https://us.123rf.com/450wm/deagreez/deagreez2109/deagreez210900712/173905991-photo-of-charming-sweet-small-schoolgirl-dressed-yellow-outfit-dancing-walking-smiling-isolated-pink.jpg?ver=6",
    price: "₹799",
    category: "Girls",
  },
  {
    id: 112,
    name: "Boys' Shorts",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/7/HB/NN/LC/108401477/kids-multicolour-shorts-500x500.jpg",
    price: "₹399",
    category: "Boys",
  },
  {
    id: 113,
    name: "Girls' Skirt",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREo3IkL6ag4eXwa5OA8nA-Q5asqaVi3fXNawHxqIayZ2eB4kQF4UXKF-spnTNVgDBdNTc&usqp=CAU",
    price: "₹699",
    category: "Girls",
  },
  {
    id: 114,
    name: "Boys' Hoodie",
    image: "https://images.meesho.com/images/products/187369203/dmdqg_512.webp",
    price: "₹999",
    category: "Boys",
  },
  {
    id: 115,
    name: "Girls' Jacket",
    image:
      "https://www.lapinkids.com/media/catalog/product/cache/ba7c8bbaafe85f7687396de736ac9e84/2/3/232E1216550_3_1702885310.jpg",
    price: "₹1199",
    category: "Girls",
  },
  {
    id: 116,
    name: "Boys' Jeans",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZfJWI-eejQAFGGX9goQmCenvRwf-XW2K2Txr25XT42Mt5MfN0b3EM9-z_ZG1w7TxjmQ&usqp=CAU",
    price: "₹899",
    category: "Boys",
  },
  {
    id: 117,
    name: "Girls' Leggings",
    image:
      "https://4.imimg.com/data4/AM/GQ/MY-2546167/girl-kids-stylish-leggings-500x500.jpg",
    price: "₹499",
    category: "Girls",
  },
  {
    id: 118,
    name: "Boys' Sweater",
    image: "https://angelandrocket.in/cdn/shop/files/AR6586_6.jpg?v=1689758519",
    price: "₹799",
    category: "Boys",
  },
  {
    id: 119,
    name: "Girls' Cardigan",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20230925/bjIG/651182a9ddf7791519fb2c0d/-473Wx593H-466627027-cream-MODEL.jpg",
    price: "₹899",
    category: "Girls",
  },
  {
    id: 120,
    name: "Boys' Polo Shirt",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/b/q/w/5-6-years-sbg-dss-tsh0243-spyby-original-imahf5ntqqahsenm.jpeg?q=70",
    price: "₹699",
    category: "Boys",
  },
  {
    id: 121,
    name: "Girls' Saree",
    image:
      "https://www.aglare.in/wp-content/uploads/2020/04/slef-dhoti-green-1220-1.jpg",
    price: "₹749",
    category: "Girls",
  },
  {
    id: 122,
    name: "Boys' Tracksuit",
    image:
      "https://insport.com.au/cdn/shop/products/nike-junior-club-dri-fit-tricot-set-navy-blue-tracksuit-877858_grande.webp?v=1710373578",
    price: "₹1499",
    category: "Boys",
  },
  {
    id: 123,
    name: "Girls' Joggers",
    image:
      "https://admincerdas.s3.ap-southeast-1.amazonaws.com/20201202/8455-66cff53ac7e911ab1ea890fbcbca405a.jpg",
    price: "₹899",
    category: "Girls",
  },
  {
    id: 124,
    name: "Boys' Swimwear",
    image: "https://m.media-amazon.com/images/I/515gjZaIIzL.jpg",
    price: "₹499",
    category: "Boys",
  },
  {
    id: 125,
    name: "Girls' Swimsuit",
    image:
      "https://s.catch.com.au/images/product/0209/209546/666383e34593c640432051.jpg",
    price: "₹599",
    category: "Girls",
  },
  {
    id: 126,
    name: "Boys' Pajamas",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxahgzLBKaifosyOVDgXBHv2anjdRDDbLx9cfRn898xQpEK5VirOxQKQbMAwqFWKYPG60&usqp=CAU",
    price: "₹699",
    category: "Boys",
  },
  {
    id: 127,
    name: "Girls' Nightdress",
    image:
      "https://5.imimg.com/data5/ANDROID/Default/2023/6/319320632/JA/GV/OQ/3383544/product-jpeg.jpg",
    price: "₹749",
    category: "Girls",
  },
  {
    id: 128,
    name: "Boys' Formal Shirt",
    image:
      "https://www.everythingforeczema.com/cdn/shop/products/grey_boys_classic_trousers_grande.jpg?v=1495121803",
    price: "₹899",
    category: "Boys",
  },
  {
    id: 129,
    name: "Girls' Party Dress",
    image: "https://staranddaisy.in/wp-content/uploads/2022/04/299834gf.jpg",
    price: "₹1499",
    category: "Girls",
  },
];

const Card = ({ id, name, image, price }) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden m-2 font-josefin">
      <img className="w-full h-48 object-cover" src={image} alt={name} />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold capitalize">{name}</h3>
        <p className="mt-2 text-gray-600">{price}</p>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded mt-4 mb-2"
          onClick={() => dispatch(addToCart({ id, name, image, price }))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const KidsClothingGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8 font-josefin">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {kidsClothingData.map((clothing) => (
          <Card
            key={clothing.id}
            id={clothing.id}
            name={clothing.name}
            image={clothing.image}
            price={clothing.price}
          />
        ))}
      </div>
    </div>
  );
};

export default KidsClothingGrid;
