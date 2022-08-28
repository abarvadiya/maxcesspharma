import React from "react";
import Link from "next/link";
import * as S from "./StyledComponents";
import { rose } from "../../../../styles/colors";

const GetIntoTouch = () => {
  return (
    <S.Wrapper>
      <S.Details>
        <S.IconGrSend fill={rose} />
        <S.TextWrapper data-aos-duration="500" data-aos="fade-up">
          <S.HighliteText>
            We will always help you to grow your business
          </S.HighliteText>
          <S.SmallText>
            Our mission is to provide you the highest quality of service and
            solution
          </S.SmallText>
        </S.TextWrapper>

        <Link href="/contact" passHref>
          <S.Button
            data-aos-duration="1000"
            data-aos="fade-left"
          >
            CONTACT US
          </S.Button>
        </Link>
      </S.Details>
    </S.Wrapper>
  );
};

export default GetIntoTouch;
