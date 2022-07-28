// Utils
import styled from "styled-components";

export const MainFooter = styled.footer`
  position: relative;
  background: #1e2129;
  padding: 2rem 6rem;
  display: flex;
  margin-top: 10rem;
  justify-content: space-between;

  h4 {
    color: #ffffff;
    margin-bottom: 1.2rem;
  }

  @media only screen and (max-width: 768px) {
    display: block;
    padding: 2rem;
    margin-top: 0;
  }
`;

export const DetailsWrapper = styled.div`
  width: 30%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const LogoWrapper = styled.div``;

export const Discription = styled.p`
  color: #9ea0a9;
  padding: 1rem 0;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 10rem;
  padding: 2rem;

  @media only screen and (max-width: 740px) {
    display: grid;
    justify-content: center;
    gap: 3rem;
  }
`;

export const LinkText = styled.p`
  color: #9ea0a9;
  padding-bottom: 8px;
  cursor: pointer;

  &:hover {
    color: #36ccaf;
    font-weight: 700;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 2rem;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const ContactIconWrapper = styled.div`
  width: 1.7rem;
  text-align: center;
`;
