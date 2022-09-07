import React, { useEffect, useState } from "react";

// Components
import * as S from "./StyledComponents";
import Logo from "./components/Logo";
import Links from "./components/Links";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.Wrapper isWhite={scrollPosition > 0}>
      <S.SubWrapper>
        <S.NavbarContainer>
          <Logo />
          <Links isWhite={scrollPosition > 0}/>
          {/* <PlayButton /> */}
        </S.NavbarContainer>
      </S.SubWrapper>
    </S.Wrapper>
  );
};

export default Navbar;
