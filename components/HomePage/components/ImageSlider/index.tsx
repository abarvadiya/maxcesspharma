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
  @media only screen and (max-width: 768px) {
    margin-top: 94px;
  }
`;

const ImageSlider = () => {
  const { height, width } = useWindowDimensions();

  const images = [
    {
      alt: "slider img 1",
      src: "/imgs/slider/banner_1.jpg",
    },
    {
      alt: "slider img 2",
      src: "/imgs/slider/banner_2.jpg",
    },
    {
      alt: "slider img 3",
      src: "/imgs/slider/banner_3.jpg",
    },
    {
      alt: "slider img 4",
      src: "/imgs/slider/banner_4.jpg",
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
        navigation={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {images.map(image => (
          <SwiperSlide key={image.alt}>
            <Image
              src={image.src}
              objectPosition="center"
              alt={image.alt}
              height={width < 426 ? 55 : 50}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionCenter>
  );
};

export default ImageSlider;
