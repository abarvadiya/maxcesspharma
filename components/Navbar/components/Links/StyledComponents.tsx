// Utils
import styled from "styled-components";
import { green } from "../../../../styles/colors";

interface TextI {
  isActive: boolean;
}

export const Wrapper = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export const MenuIconWrapper = styled.div`
  cursor: pointer;
  z-index: 100;
  display: none;

  svg {
    z-index: 10;
  }

  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Text = styled.span`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.8px;
`;

export const LinkAnchor = styled.a<TextI>`
  color: #1e4b57;
  padding: 0 15px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => (props.isActive ? "#00a651" : "#666")};
  transition: all 0.35s ease-out;
  transform-origin: center;

  &:hover {
    color: ${green};
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 1.5rem 0rem;
`;
