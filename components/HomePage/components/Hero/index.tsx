import React from "react";

// Components
import * as S from "./StyledComponents";
import Image from "../../../shared/NewImage";
import Link from "next/link";

const Hero = () => {
  return (
    <S.Wrapper>
      <S.TitleContainer>
        <S.Title>Healthy Life!</S.Title>
        <S.Title>&nbsp; &nbsp; Healthy World!</S.Title>

        <S.TitleImageContainer>
          <Image
            src={"/imgs/hero_3.svg"}
            height={15}
            width={100}
            alt="site logo"
            loading="lazy"
          />
        </S.TitleImageContainer>
        <Link href="/contact" passHref>
          <S.Button>Contact Us</S.Button>
        </Link>
        <S.ButtonWrapper></S.ButtonWrapper>
      </S.TitleContainer>
      <S.ImageWrapper>
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
