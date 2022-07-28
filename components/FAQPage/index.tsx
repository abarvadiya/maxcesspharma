import data from "./data";

// Components
import SingleQuestion from "./question";
import { TitleColor } from "../shared/StyledComponents";
import * as S from "./StyledComponent";
import Image from "../shared/NewImage";

const FAQPage = () => {
  return (
    <S.Container>
      <S.ContectInto>
        <S.MainTitle>
          Frequently Asked Questions<TitleColor>.</TitleColor>
        </S.MainTitle>
        <Image
          src="/imgs/faq.svg"
          objectPosition="center"
          alt="maxcess pharma faq"
        />
      </S.ContectInto>
      <S.QuestionWrapper className="smoll-scrollbar">
        {data.length && (
          <S.HeaderInfo>
            {data.map((question) => {
              return (
                <SingleQuestion
                  key={question.id}
                  {...question}
                ></SingleQuestion>
              );
            })}
          </S.HeaderInfo>
        )}
      </S.QuestionWrapper>
    </S.Container>
  );
};

export default FAQPage;
