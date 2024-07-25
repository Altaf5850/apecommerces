import React from "react";

const images = [
  {
    src: "https://images.livemint.com/img/2021/06/10/600x338/Screenshot_(240)_1623333327073_1623333342606.png",
    link: "/electronics",
  },
  {
    src: "https://mir-s3-cdn-cf.behance.net/projects/404/26ca94199735395.Y3JvcCwzODA4LDI5NzgsMCww.jpg",
    link: "/digitals",
  },
  {
    src: "https://img.freepik.com/free-psd/shoes-sale-social-media-post-square-banner-template-design_505751-3728.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1719705600&semt=ais_user",
    link: "/shoes",
  },
  {
    src: "https://cdn.dribbble.com/users/8547292/screenshots/16121829/media/e9ca86370942308d714aaa081efbdc34.jpg?resize=400x300&vertical=center",
    link: "/furniture",
  },
  {
    src: "https://mensflair.com/wp-content/uploads/2022/06/mens-summer-fashion-guide.jpg",
    link: "/men",
  },
  {
    src: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    link: "/woman",
  },
  {
    src: "https://cdn.intellemo.ai/int-stock/64b4da79b5c401bdff018e4e/64b4da7bb5c401bdff018e4f-v405/laptop_ad_l_w.webp",
    link: "/electronics",
  },
  {
    src: "https://i.pinimg.com/736x/eb/3b/44/eb3b44c991e18aee13f0bcc52120c23e.jpg",
    link: "/watchs",
  },
];

function Card() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-3">
      {images.map((item, index) => (
        <div key={index} className="hover:scale-105 duration-300 ease-in">
          <a href={item.link}>
            <img
              src={item.src}
              alt=""
              className="w-full h-48 md:h-56 object-cover"
            />
          </a>
        </div>
      ))}
    </div>
  );
}

export default Card;
