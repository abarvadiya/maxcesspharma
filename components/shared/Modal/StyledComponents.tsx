import styled, { keyframes } from "styled-components";

export const appear = keyframes`
  from{ 
    background-color: transparent;
   }
  to{ 
    background-color: rgba(0, 0, 0, 0.7);
    }
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(5px);
  z-index: 100000;
  animation: ${appear} 0.4s ease-out forwards;
`;

export const Button = styled.button`
  color: #ffcb01;
`;

export const Modal = styled.section`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 45rem;
  height: 30rem;
  border-radius: 0.5rem;
  padding: 2rem 2rem;
  text-align: center;
  overflow-y: auto;
  z-index: 100001;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;

export const ModalWrapper = styled.div`
  position: relative;
  /* height: 100%; */
`;

export const TextBox = styled.div`
  border: gray;
  /* height: 45rem; */
  overflow: auto;
  text-align: left;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  margin-top: 1rem;
  text-align: justify;
`;

export const ModalTitle = styled.h2`
  font-size: 2rem;
  text-align: center;

  @media only screen and (max-width: 740px) {
    margin-top: 37px;
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;
`;

export const IconButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 0.6rem;
  transform: translate(50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    transition: all 0.2s ease-out;
  }

  @media only screen and (max-width: 740px) {
    top: -1.5rem;
  }

  &:hover svg {
    transform: scale(1.05);
  }
`;
