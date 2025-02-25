// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

// // Include CSS styles directly inside the component for recent updates
// const RecentUpdates = () => {
//   return (
//     <section className="recent-updates">
//       <div className="container">
//         <h2>Recent Updates</h2>
//         <Swiper
//           slidesPerView={'auto'}
//           spaceBetween={10}
//           centeredSlides={true}
//           navigation={{
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//           }}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//         >
//           <SwiperSlide>
//             <div className="update-box">
//               <img src="https://images.unsplash.com/photo-1531235337001-e94d91fd1f0e" alt="Update 1" />
//               <div className="update-info">
//                 <h3>Update 1</h3>
//                 <p>Details about this update go here.</p>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="update-box">
//               <img src="https://images.unsplash.com/photo-1531235337001-e94d91fd1f0e" alt="Update 2" />
//               <div className="update-info">
//                 <h3>Update 2</h3>
//                 <p>Details about this update go here.</p>
//               </div>
//             </div>
//           </SwiperSlide>
//           {/* Add more slides here */}
//         </Swiper>
//         <div className="swiper-button-prev"></div>
//         <div className="swiper-button-next"></div>
//         <div className="swiper-pagination"></div>
//       </div>

//       {/* Include CSS for styling */}
//       <style jsx>{
//         .recent-updates {
//           padding:50px 0;
//         }
//         .container {
//           width: 80%;
//           margin: 0 auto;
//           text-align: center;
//         }
//         h2 {
//           font-size: 2rem;
//           margin-bottom: 30px;
//         }
//         .update-box {
//           position: relative;
//           padding: 15px;
//           background-color: #fff;
//           border-radius: 8px;
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//         }
//         .update-box img {
//           width: 100%;
//           height: auto;
//           border-radius: 8px;
//         }
//         .update-info {
//           position: absolute;
//           bottom: 15px;
//           left: 15px;
//           right: 15px;
//           color: white;
//           background-color: rgba(0, 0, 0, 0.5);
//           padding: 10px;
//           border-radius: 8px;
//         }
//         .update-info h3 {
//           font-size: 1.5rem;
//           margin-bottom: 10px;
//         }
//         .update-info p {
//           font-size: 1rem;
//         },
//         .swiper-button-prev,
//         .swiper-button-next {
//           color: #000;
//         }
//         .swiper-pagination {
//           position: absolute;
//           bottom: 10px;
//           left: 50%;
//           transform: translateX(-50%);
//         }
//       }</style>
//     </section>
//   );
// };

// export default RecentUpdates;



// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import './RecentUpdates.css';

// const RecentUpdates = () => {
//   const updates = [
//     {
//       image: '/news/s1.avif',
//       alt: 'News 1 Image',
//       link: '/news/news1.html',
//       title: "Centre defends electoral bonds, says 'more contribution to the ruling party is norm'",
//     },
//     {
//       image: '/news/Recent Updates4381.png',
//       alt: 'News 2 Image',
//       link: '/news/news2.html',
//       title: "'Why no health advisories to citizens?' Bombay High Court on dangerous AQI levels",
//     },
//     {
//       image: '/news/Recent Updates8057.png',
//       alt: 'News 3 Image',
//       link: '/news/news3.html',
//       title: "Wife demanding to live separately from husband not always cruelty: Calcutta High Court",
//     },
//     {
//       image: '/news/Recent Updates111.png',
//       alt: 'News 4 Image',
//       link: '/news/news4.html',
//       title: "Firecracker restrictions: NGT calls for strict compliance; says celebrations can't be at the cost of health",
//     },
//     {
//       image: '/news/new5.avif',
//       alt: 'News 5 Image',
//       link: '/news/news5.html',
//       title: "'Why no health advisories to citizens?' Bombay High Court on dangerous AQI levels",
//     },
//     {
//       image: '/news/news6.avif',
//       alt: 'News 6 Image',
//       link: '/news/news6.html',
//       title: "Can transgender person who underwent surgery complain under Domestic Violence Act?",
//     },
//   ];

//   return (
//     <section className="recent-updates">
//       <div className="container">
//         <h2>Recent Updates</h2>
//         <Swiper
//           modules={[Navigation, Pagination]}
//           spaceBetween={30}
//           slidesPerView={1}
//           navigation
//           pagination={{ clickable: true }}
//           loop={true}
//         >
//           {updates.map((update, index) => (
//             <SwiperSlide key={index}>
//               <div className="news-image-container">
//                 <img
//                   className="news-image"
//                   src={update.image}
//                   alt={update.alt}
//                 />
//               </div>
//               <div className="news-title">
//                 <a href={update.link}>{update.title}</a>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default RecentUpdates;


// RecentUpdates.jsx
// 


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./RecentUpdates.css";

const RecentUpdates = () => {
  const newsData = [
    {
      imgSrc: "news1.jpg",
      altText: "News 1 Image",
      link: "news/news1.html",
      title:
        "Centre defends electoral bonds, says 'more contribution to the ruling party is norm'",
    },
    {
      imgSrc: "n3.jpg",
      altText: "News 2 Image",
      link: "news/news2.html",
      title:
        "'Why no health advisories to citizens?' Bombay High Court on dangerous AQI levels",
    },
    {
      imgSrc: "w3.jpg",
      altText: "News 3 Image",
      link: "news/news3.html",
      title:
        "Wife demanding to live separately from husband not always cruelty: Calcutta High Court",
    },
    {
      imgSrc: "n4.jpg",
      altText: "News 4 Image",
      link: "news/new4.html",
      title:
        "Firecracker restrictions: NGT calls for strict compliance; says celebrations can't be at the cost of health",
    },
    {
      imgSrc: "n5.jpg",
      altText: "News 5 Image",
      link: "news/news5.html",
      title:
        "'Why no health advisories to citizens?' Bombay High Court on dangerous AQI levels",
    },
    {
      imgSrc: "n6.jpg",
      altText: "News 6 Image",
      link: "news/news6.html",
      title:
        "Can transgender person who underwent surgery complain under Domestic Violence Act?",
    },
  ];

  return (
    <section className="recent-updates">
      <div className="container">
        <h2>Recent Updates</h2>
       <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={30}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-slide every 3 seconds
>

          {newsData.map((news, index) => (
            <SwiperSlide key={index}>
              <div className="news-image-container">
                <img
                  className="news-image"
                  src={news.imgSrc}
                  alt={news.altText}
                />
              </div>
              <div className="news-title">
                <a href={news.link}>{news.title}</a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RecentUpdates;