// Utils
import styled from "styled-components";

export const Wrapper = styled.div`
  overflow: hidden;
`;

export const Main = styled.main`
  position: relative;
  max-width: 124rem;
  // padding: 0 5rem;
  margin: 0 auto;
  box-sizing: border-box;

  @media only screen and (max-width: 768px) {
    padding: 0 2rem;
  }
`;
