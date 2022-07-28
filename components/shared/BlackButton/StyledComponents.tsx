// Utils
import styled from "styled-components";
import { pink } from "../../../styles/colors";


export const Button = styled.button`
  background-color: black;
  border-radius: 5rem;
  height: 5rem;
  width: 25.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${pink};
  font-size: 1.4rem;
  font-weight: 600;

  @media only screen and (max-width: 768px) {
    height: 4rem;
    min-width: 22.2rem;
    width: 100%;
  }
`;
