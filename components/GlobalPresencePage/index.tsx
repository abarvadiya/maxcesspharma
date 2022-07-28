// Components
import { TitleColor } from "../shared/StyledComponents";
import * as S from "./StyledComponent";
import Image from "../shared/NewImage";

const GlobalPresencePage = () => {
  return (
    <>
      <S.DetailsWrapper>
        <S.MainTitle>
          Our Global Presence<TitleColor>.</TitleColor>
        </S.MainTitle>
        <S.Text>
          Global Economy is expanding, increasing opportunities and opening
          doors to new markets that have never explored before. With
          opportunity, the increased chances of facing the competition increase.
        </S.Text>
        <S.Text>
          To make more impact on the global economy, we are striving hard to
          expand more with a clear intention to grow and improve world&apos;s
          economy. Want to know more about our global presence? Mail us at
          &nbsp;
          <a href="mailto:someone@example.com">info@techreceptives.com</a>
        </S.Text>
      </S.DetailsWrapper>

      <Image
        src="/imgs/map_expand.svg"
        objectPosition="center"
        alt="maxcess pharma global presence"
        height={55}
      />
    </>
  );
};

export default GlobalPresencePage;
