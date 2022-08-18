import React from "react";

// Next
import Image from "next/image";
import Link from "next/link";

// Components
import * as S from "./StyledComponents";

// Utils
import getImageUrl from "../../../../utils/getImageUrl";

const Logo = () => {
  return (
    <Link href="/" passHref>
      <S.Wrapper>
        <S.Logo>
          <Image
            src={getImageUrl("/imgs/new_max_logo.svg", true)}
            layout="fixed"
            alt="maxsesspharma logo"
            objectFit="contain"
            width={170}
            height={70}
            loading="lazy"
          />
        </S.Logo>
      </S.Wrapper>
    </Link>
  );
};

export default Logo;
