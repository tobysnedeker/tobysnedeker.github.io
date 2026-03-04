import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Link, useLocation } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import { useRef, useEffect, useState } from "react";

import './PhotoCarousel.css'
import { images } from "../photoData"

const PhotoCarousel = () => {
  const location = useLocation();
  const swiperRef = useRef(null);

  useEffect(() => {
    return () => {
      const swiper = swiperRef.current;
      if (swiper) {
        if (swiper.autoplay && typeof swiper.autoplay.stop === "function") {
          swiper.autoplay.stop();
        }
        if (typeof swiper.destroy === "function") {
          swiper.destroy(true, true);
        }
      }
    };
  }, []);

  const [slideIndex, setSlideIndex] = useState(() => {
    return Number(sessionStorage.getItem("carouselIndex")) || 0;
  });

  const imagesLimited = images.slice(0, 10);

  return (
    <div className="container">
      <Swiper
        initialSlide={slideIndex}
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 2800, disableOnInteraction: false }}
        // autoplay={false}
        loop
        slidesPerView={1}
        speed={500}
        grabCursor
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setSlideIndex(swiper.activeIndex);
          sessionStorage.setItem("carouselIndex", swiper.activeIndex);
        }}
      >
        {imagesLimited.map(image => (
          <SwiperSlide>
            <Link to={`/photo/carousel/${image.src}`} state={{backgroundLocation: location}} className="link">
              <img
                src={`/photos/${image.src}`}
                className="d-block clickable-image"
                alt={image.alt}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PhotoCarousel;