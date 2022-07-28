import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

// Components
import Portal from "../../../shared/Portal";

// import styles
import * as S from "./StyledComponents";

// Data
import linksData from '../linksData'


interface IProps {
  setIsOpenMenu: Dispatch<SetStateAction<boolean>>;
  isOpenMenu: boolean
}

function MobileMenu({ isOpenMenu, setIsOpenMenu }: IProps) {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    isMounted ? (
      <Portal>
        <S.Wrapper isOpen={isOpenMenu}>
          <S.MenuContainer>
            {linksData.map((link, i) => (
              <S.MenuButton
                type="button"
                key={link.title}
                onClick={() => setIsOpenMenu(false)}
              >
                <Link href={link.url} passHref>
                  <S.MenuLink
                    isActive={router.pathname === link.url}
                    target={link.url.startsWith("https") ? "_blank" : "_self"}
                  >
                    {link.Icon}
                    <S.Text>{link.title}</S.Text>
                  </S.MenuLink>
                </Link>
              </S.MenuButton>
            ))}
          </S.MenuContainer>
        </S.Wrapper>
      </Portal>
    ) : <div></div>
  );
}

export default MobileMenu;
