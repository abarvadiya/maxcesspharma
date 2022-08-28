import styled from "styled-components";
import * as MS from "../ProductPage/StyledComponents";

export const Container = styled.section`
  margin: 8rem;
  padding: 0;

  @media only screen and (max-width: 740px) {
    margin: 0 !important;
  }
`;

export const DetailsWrapper = styled.div`
  padding: 0rem 10rem;
  margin-bottom: 10px;

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

  @media only screen and (max-width: 740px) {
    font-size: 1.75rem;
  }
`;

export const Text = styled.p`
  padding-bottom: 1rem;
`;

export const ImageWrapper = styled.div`
  padding: 0 5rem;
  margin-bottom: 1rem;

  @media only screen and (max-width: 768px) {
    padding: 0px;
    margin-bottom: 2rem;
  }
`;

export const CountyTable = styled.div`
  padding: 0 5rem;
  overflow-x: auto;

  @media only screen and (max-width: 768px) {
    padding: 0px;
    margin-bottom: 2rem;
  }
`;

export const Table = styled(MS.Table)`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
