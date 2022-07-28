// Components
import ImageContainer from "../../../shared/Image";
import * as S from "./StyledComponents";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

const Patnears = () => {
  const imagePath = [
    "/imgs/partnears/p1.png",
    "/imgs/partnears/p2.png",
    "/imgs/partnears/p3.png",
    "/imgs/partnears/p4.png",
    "/imgs/partnears/p1.png",
    "/imgs/partnears/p2.png",
    "/imgs/partnears/p3.png",
    "/imgs/partnears/p4.png",
  ];
  return (
    <S.Container>
      <S.Photobanner>
        {imagePath.map((path: string, index: number) => (
          //   <S.ImageWrapper key={`${path + index}`}>
          <ImageContainer
            key={`${path + index}`}
            src={path}
            height={150}
            width={240}
          />
          //   </S.ImageWrapper>
        ))}
      </S.Photobanner>
    </S.Container>
  );
};

export default Patnears;
