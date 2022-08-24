/* section */
import styled from "styled-components";
import * as MS from "../ContactPage/components/ContactForm/StyledComponents";

export const HeaderInfo = styled.section`
  width: 100%;
  margin: 0 auto;
  max-width: var(--max-width);
`;

export const ContectInto = styled(MS.ContectInto)`
  max-width: 100%;
  padding: 2rem;

  @media only screen and (max-width: 768px) {
    height: 30%;
    margin-bottom: 1rem;
  }
`;

export const QuestionWrapper = styled.div`
  height: 35rem;
  overflow-y: auto;
  padding-right: 1rem;

  @media only screen and (max-width: 768px) {
    height: 100%;
    padding-right: 0;
  }
`;

export const Container = styled.div`
  margin: 8rem auto;
  background: #fff;
  border-radius: 1rem;
  max-width: 70%;
  display: grid;
  gap: 2rem;
  grid-template-columns: 23rem 1fr;

  @media only screen and (max-width: 768px) {
    display: block;
    max-width: 100%;
  }
`;

export const MainTitle = styled.h3`
  font-size: 2.75rem;
  line-height: 1.2;
  font-weight: 500;
  padding-bottom: 1rem;

  @media only screen and (max-width: 740px) {
    font-size: 1.75rem;
  }
`;

export const Question = styled.article`
  padding: 1rem 1.5rem;
  border: 2px solid #eae6eb;
  margin-bottom: 1rem;
  border-radius: 1rem;
  box-shadow: var(--light-shadow);
`;

// .question
export const Title = styled.h4`
  font-size: 1rem;
  text-transform: none;
  line-height: 1.5;
`;

// .question
export const Info = styled.p`
  color: green;
  margin-bottom: 0;
  margin-top: 0.5rem;
`;
// .question
export const Header = styled.header`
  display: flex;
  color: green;
  margin-bottom: 0;
  margin-top: 0.5rem;
  justify-content: space-between;
`;

export const HeaderTitle = styled.h4`
  margin-bottom: 0;
`;

export const Button = styled.button`
  width: 2rem;
  height: 1.5rem;
  background: var(--clr-grey-special);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--clr-red-special);
  cursor: pointer;
  margin-left: 1rem;
  align-self: center;
  min-width: 2rem;
`;
