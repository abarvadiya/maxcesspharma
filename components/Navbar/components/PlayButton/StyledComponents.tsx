// Utils
import styled from "styled-components";
import { lav2, pink } from "../../../../styles/colors";
// import { lav2, pink } from "styles/colors";

export const Wrapper = styled.button`
  position: relative;
  height: 4.5rem;
  width: 18rem;
  border: 2px solid ${pink};
  border-radius: 4rem;

  @media only screen and (max-width: 768px) {
    width: 10rem;
    height: 3.5rem;
  }

  @media only screen and (max-width: 400px) {
    width: 8rem;
    height: 3rem;
  }
`;

export const TextWrapper = styled.div`
  position: absolute;
  left: 1.5rem;
  top: 50%;
  transform: translateY(-50%);

  @media only screen and (max-width: 768px) {
    width: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Text = styled.p`
  font-size: 1.4rem;
  font-weight: 600;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }

  @media only screen and (max-width: 400px) {
    font-size: 0.9rem;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: -0.2rem;
  top: 50%;
  transform: translateY(-50%);

  @media only screen and (max-width: 768px) {
    display:none;
  }
`;

export const PlayImageWrapper = styled.div`
  position: relative;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  border: 3px solid ${lav2};
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  
  @media only screen and (max-width: 768px) {
    width: 3.5rem;
    height: 3.5rem;
  }
`;
