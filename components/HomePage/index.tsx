import React from "react";

// Components
import * as S from "./StyledComponents";
import Hero from "./components/Hero";
import Patnears from "./components/Patnears";
import VisionMission from "./components/VisionMission";
import CountUp from "./components/Counter";
import ImageSlider from "./components/ImageSlider";
import Teams from "./components/Teams";
import GetIntoTouch from "./components/GetIntoTouch";

const Homepage = () => {
  return (
    <S.Wrapper>
      {/* <Slider /> */}
      {/* <Patnears /> */}
      {/* <ImageSlider /> */}
      <CountUp />

      <GetIntoTouch />
      {/* <Hero /> */}
      <Teams />
      <VisionMission />
    </S.Wrapper>
  );
};

export default Homepage;
