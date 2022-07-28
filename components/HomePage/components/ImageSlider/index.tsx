import React from "react";
import styled from "styled-components";
import Image from "../../../shared/NewImage";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const SectionCenter = styled.div`
  text-align: center;
  margin: 4rem 0;
`;

const ImageSlider = () => {
  const images = [
    {
      alt: "slider img 1",
      src: "/imgs/slider/slider_1.svg",
    },
    {
      alt: "slider img 2",
      src: "/imgs/slider/slider_2.svg",
    },
  ];

  return (
    <SectionCenter>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image.alt}>
            <Image
              src={image.src}
              objectPosition="center"
              alt={image.alt}
              height={29.5}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionCenter>
  );
};

export default ImageSlider;
