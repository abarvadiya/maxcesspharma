import styled from "styled-components";
import { GrSend } from "react-icons/gr";

export const Wrapper = styled.section`
  background: url(https://nabros.in/images/action-bg.jpg) no-repeat center 0;
  padding: 60px 0 50px;
  background-size: cover;

  display: flex;
  padding: 3rem 0;
  justify-content: center;
  background-color: #7f7f7f;

  &:after {
    background-color: rgba(0, 46, 91, 0.8);
    z-index: 0;
    position: absolute;
    // content: "";
    // width: 100%;
    // height: 100%;
    // top: 0;
    // // left: 0;
  }
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.div`
  color: #ffffff;
  padding: 1rem 3rem;
`;

export const HighliteText = styled.h3`
  color: #ffffff;
`;

export const SmallText = styled.h5`
  color: #ffffff;
`;

export const IconGrSend = styled(GrSend)`
  color: #ffc107;
  height: 60px;
  width: 60px;
  @media only screen and (max-width: 740px) {
    height: 35px;
    width: 35px;
  }
`;
