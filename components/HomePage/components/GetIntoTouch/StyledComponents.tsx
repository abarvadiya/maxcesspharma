import styled from "styled-components";
import { AiOutlineSend } from "react-icons/ai";
import { CardButton } from "../Teams/StyledComponents";

export const Wrapper = styled.section`
  display: flex;
  background: url(https://nabros.in/images/action-bg.jpg) no-repeat center 0;
  justify-content: center;

  @media only screen and (max-width: 740px) {
    border-radius: 25px;
  }
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #002e5bd6;
  padding: 3rem 1rem;

  @media only screen and (max-width: 740px) {
    padding: 2rem;
    border-radius: 25px;
    flex-direction: column;
  }
`;

export const TextWrapper = styled.div`
  color: #ffffff;
  padding: 1rem 3rem;

  @media only screen and (max-width: 740px) {
    padding: 0;
  }
`;

export const HighliteText = styled.h3`
  color: #ffffff;
  @media only screen and (max-width: 740px) {
    margin-bottom: 16px;
    font-size: 24px;
  }
`;

export const SmallText = styled.h5`
  color: #00b5d8;
`;

export const IconGrSend = styled(AiOutlineSend)`
  height: 5rem;
  width: 5rem;
  @media only screen and (max-width: 740px) {
    display: none;
  }
`;

export const Button = styled(CardButton)`
  padding: 20px;
  width: 15%;
  font-size: 17px;
  border-radius: 8px;
  margin-bottom: 0;
  letter-spacing: 1px;

  @media only screen and (max-width: 740px) {
    width: 100%;
    padding: 14px;
    margin-top: 12px;
  }
`;
