import styled from "styled-components";

export const Container = styled.div`
  height: 350px;
  //   width: 100vw;

  position: relative;
  overflow: hidden;
`;

export const Photobanner = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  //   overflow: hidden;
  white-space: nowrap;
  animation: bannermove 15s linear infinite;

  @keyframes bannermove {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-83%, 0);
    }
  }
`;

export const ImageWrapper = styled.div`
  margin: 2rem 0;
`;
