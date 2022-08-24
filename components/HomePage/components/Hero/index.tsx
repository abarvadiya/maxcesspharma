import React from "react";

// Components
import * as S from "./StyledComponents";
import Image from "../../../shared/NewImage";
import Link from "next/link";

const Hero = () => {
  return (
    <S.Wrapper>
      <S.TitleContainer>
        <S.Title
          data-aos-duration="1000"
          data-aos-offset="100"
          data-aos="fade-up"
        >
          Healthy Life!
        </S.Title>
        <S.Title
          data-aos-duration="1000"
          data-aos-offset="200"
          data-aos="fade-up"
        >
          &nbsp; &nbsp; Healthy World!
        </S.Title>

        <S.TitleImageContainer>
          <Image
            src={"/imgs/hero_3.svg"}
            height={15}
            width={100}
            alt="site logo"
            loading="lazy"
          />
        </S.TitleImageContainer>
        <S.ButtonWrapper>
          <Link href="/contact" passHref>
            <S.Button>Contact Us</S.Button>
          </Link>
        </S.ButtonWrapper>
      </S.TitleContainer>
      <S.ImageWrapper
        data-aos-duration="2000"
        data-aos-offset="200"
        data-aos="fade-left"
      >
        <S.ImageContainer>
          <Image
            src={"/imgs/hero_2.svg"}
            height={20}
            width={20}
            alt="site logo"
            loading="lazy"
          />
        </S.ImageContainer>
      </S.ImageWrapper>
    </S.Wrapper>
  );
};

export default Hero;
