// Utils
import styled from "styled-components";

interface WrapperI {
  isWhite: boolean;
}

export const Wrapper = styled.nav<WrapperI>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  z-index: 10000;
  transition: all 0.4s ease-out;
  background-color: ${(props) => (props.isWhite ? "white" : "transparent")};
`;

export const SubWrapper = styled.div`
  position: relative;
  max-width: 124rem;
  padding: 0 5rem;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  @media only screen and (max-width: 768px) {
    padding: 0 2rem;
  }
`;

export const NavbarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
