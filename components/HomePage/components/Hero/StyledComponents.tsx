// Utils
import styled from "styled-components";
import { CardButton } from "../Teams/StyledComponents";

export const Wrapper = styled.section`
  position: relative;
  display: flex;
  height: 39rem;
  margin-bottom: 10rem;

  @media only screen and (max-width: 768px) {
    margin-bottom: 0;
    margin-top: 2rem;
    height: 27rem;
  }
`;

export const TitleContainer = styled.div`
  justify-content: center;
  width: 50%;
  padding-top: 16rem;
  padding-left: 4rem;

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-top: 18rem;
    padding-left: 0rem;
    padding-top: 0;
  }
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;

  @media only screen and (max-width: 1220px) {
    font-size: 3.5rem;
  }

  @media only screen and (max-width: 1100px) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 900px) {
    font-size: 2.3rem;
    text-align: center;
  }
`;

export const Description = styled.h3`
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 3rem;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  right: 0px;
  bottom: 5%;
  width: 58%;
  height: 100%;

  @media only screen and (max-width: 768px) {
    width: 100%;
    top: 0rem;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const TitleImageContainer = styled.div`
  width: 100%;
  height: 30%;
  position: relative;
  top: 8.2rem;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Span = styled.span`
  font-weight: bold;
`;

export const ButtonWrapper = styled.div`
  position: relative;
  top: 2.6rem;
  @media only screen and (max-width: 768px) {
    display: flex;
    top: 1.6rem;
    justify-content: center;
    width: 100%;
    left: 0;
  }
`;

export const Button = styled(CardButton)`
  padding: 20px;
  width: 40%;

  @media only screen and (max-width: 740px) {
    width: 100%;
    hight: 30%;
  }
`;
