import styled from "styled-components";

export const Container = styled.section`
  margin: 8rem;
  padding: 0;

  @media only screen and (mix-width: 740px) {
    margin: 0 !important;
  }
`;

export const DetailsWrapper = styled.div`
  padding: 0rem 10rem;
  margin-bottom: 2rem;

  @media only screen and (max-width: 740px) {
    padding: 0 !important;
  }
`;

export const MainTitle = styled.h3`
  font-size: 2.75rem;
  line-height: 1.2;
  font-weight: 500;
  padding-top: 8rem;
  padding-bottom: 1.5rem;
  text-align: center;

  @media only screen and (mix-width: 740px) {
    font-size: 1.75rem;
  }
`;

export const Text = styled.p`
  padding-bottom: 1rem;
`;
