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
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

const SectionCenter = styled.div`
  text-align: center;
  margin: 4rem 0;

  @media only screen and (max-width: 768px) {
     text-align: center;
     margin: 9rem 0;
  }
`;

const ImageSlider = () => {
  const { height, width } = useWindowDimensions();
  console.log("<><#><>",width);
  console.log(width <= 426 ? 35 : 29.5);
  const images = [
    {
      alt: "slider img 1",
      src: "/imgs/banner_01.jpg",
    },
    // {
    //   alt: "slider img 2",
    //   src: "/imgs/slider/slider_2.svg",
    // },
    {
      alt: "slider img 2",
      src: "/imgs/slider/SD1.jpg",
    },
  ];

  return (
    // <SectionCenter>
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
      navigation={false}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      {images.map((image) => (
        <SwiperSlide key={image.alt}>
          <Image
            src={image.src}
            objectPosition="center"
            alt={image.alt}
            height={width < 426 ? 50 : 40}
          />
        </SwiperSlide>
      ))}
    </Swiper>
    // </SectionCenter>
  );
};

export default ImageSlider;
