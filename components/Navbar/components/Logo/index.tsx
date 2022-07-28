import React from "react";

// Next
import Image from "next/image";
import Link from "next/link";

// Utils
// import getImageUrl from "utils/getImageUrl";

// Components
import * as S from "./StyledComponents";
import getImageUrl from "../../../../utils/getImageUrl";

const Logo = () => {
  return (
    <Link href="/" passHref>
      <a>
      <S.Wrapper>
        {/* <Image
          src={getImageUrl("/imgs/logoBackground.svg", true)}
          layout="fill"
          alt="site logo"
          objectFit="cover"
          loading="lazy"
        /> */}
        <S.Logo>
          <Image
            src={getImageUrl("/imgs/logo.svg", true)}
            layout="fixed"
            alt="site logo"
            objectFit="contain"
            width={70}
            height={70}
            loading="lazy"
          />
        </S.Logo>
      </S.Wrapper>
      </a>
    </Link>
  );
};

export default Logo;
