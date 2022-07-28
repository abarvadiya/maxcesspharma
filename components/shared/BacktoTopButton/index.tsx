import React, { useState, useEffect } from "react";
import * as S from "./StyledComponents";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShowTopBtn(window.scrollY ? true : false);
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <S.TopToBtm>
      {showTopBtn && <S.AiOutlineArrowUps size={15} onClick={goToTop} />}
    </S.TopToBtm>
  );
};
export default ScrollToTop;
