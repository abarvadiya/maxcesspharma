import styled from "styled-components";
import { FaAngleUp } from "react-icons/fa";
import { green, rose } from "../../../styles/colors";

export const TopToBtm = styled.div`
  position: relative;
`;

export const AiOutlineArrowUps = styled(FaAngleUp)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 1000;
  border: 3px solid ${rose};
  color: ${rose};
  border-radius: 50%;
  height: 40px;
  width: 40px;
  padding: 6px;
  cursor: pointer;
  animation: movebtn 3s ease-in-out infinite;
  transition: all 0.5s ease-in-out;

  &:hover {
    animation: none;
    color: ${green};
    border: 3px solid ${green};
  }

  @media only screen and (max-width: 740px) {
    height: 35px;
    width: 35px;
  }
`;
