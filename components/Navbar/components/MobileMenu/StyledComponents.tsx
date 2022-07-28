import styled, { keyframes } from "styled-components";

interface TextI {
  isActive: boolean;
}

interface WrapperI {
  isOpen: boolean;
}

export const Wrapper = styled.div<WrapperI>`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  transition: transform 0.5s ease-in-out;
  transform: translateY(-57rem);
  transform: ${(props) =>
    props.isOpen ? "translateY(0rem)" : "translateY(-57rem)"};
  z-index: 1000;
`;

export const MenuContainer = styled.div`
  padding-bottom: 8rem;
  background-color: white;
  box-shadow: 1px 1px 20px 1px rgba(0, 0, 0, 0.31);
  display: none;
  padding-top: 10rem;

  @media only screen and (max-width: 1100px) {
    display: block;
  }
`;

export const MenuLink = styled.a<TextI>`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${(props) => (props.isActive ? "#000" : "#666")};
  transition: all 0.35s ease-out;
  transform-origin: center;

  &:hover {
    color: #000;
  }
`;

export const Text = styled.span`
  white-space: nowrap;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2rem;

  @media only screen and (max-width: 500px) {
    font-size: 1.1rem;
  }
`;

export const MenuButton = styled.button`
  width: 100%;
  padding: 0.8rem 4rem;

  // @media only screen and (max-width: 768px) {
  //   padding: 2rem;
  // }
`;
