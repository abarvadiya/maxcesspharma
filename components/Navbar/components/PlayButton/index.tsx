import React from "react";

// Next
import Image from "next/image";

// Utils
// import getImageUrl from "utils/getImageUrl";

// Components
import * as S from "./StyledComponents";
import Link from "next/link";
import getImageUrl from "../../../../utils/getImageUrl";

const PlayButton = () => {
  return (
    <Link href={"/project-info/#contact"} passHref={true}>
      <a>
        <S.Wrapper>
          <S.TextWrapper>
            <S.Text>Stay Informed</S.Text>
          </S.TextWrapper>
          <S.IconWrapper>
            <S.PlayImageWrapper>
              <Image
                src={getImageUrl("/icons/play.svg", true)}
                layout="fixed"
                alt="site logo"
                objectFit="contain"
                width={25}
                height={25}
                loading="lazy"
              />
            </S.PlayImageWrapper>
          </S.IconWrapper>
        </S.Wrapper>
      </a>
    </Link>
  );
};

export default PlayButton;
