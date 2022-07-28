import { useState } from "react";

// Next
import Link from "next/link";
import { useRouter } from "next/router";

// Import Icons
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

import MobileMenu from "../MobileMenu";

// import styles
import * as S from "./StyledComponents";

// Data
import linksData from '../linksData'


const Links = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const router = useRouter();
  
  return (
    <S.Wrapper>
      <S.MenuIconWrapper onClick={() => setIsOpenMenu(prevState => !prevState)}>
        {isOpenMenu ? (
          <GrClose size={20} color="black" />
        ) : (
          <GiHamburgerMenu size={20} color="black" />
        )}
      </S.MenuIconWrapper>
      <MobileMenu
        isOpenMenu={isOpenMenu}
        setIsOpenMenu={setIsOpenMenu}
      />
      <S.Container>
        {linksData.map((link, i) => (
          <S.Button type="button" key={link.title}>
            <Link href={link.url} passHref>
              <S.LinkAnchor
                isActive={router.pathname === link.url}
                target={link.url.startsWith("https") ? "_blank" : "_self"}
              >
                {link.Icon}
                <S.Text>{link.title}</S.Text>
              </S.LinkAnchor>
            </Link>
          </S.Button>
        ))}
      </S.Container>
    </S.Wrapper>
  );
}

export default Links;
