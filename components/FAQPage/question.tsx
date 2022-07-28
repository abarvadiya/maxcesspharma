import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

// Components
import * as S from "./StyledComponent";

const Question = ({ title, info }: any) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <S.Question>
      <S.Header>
        <S.Title>{title}</S.Title>
        <S.Button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </S.Button>
      </S.Header>
      {showInfo && <S.Info>{info}</S.Info>}
    </S.Question>
  );
};

export default Question;
