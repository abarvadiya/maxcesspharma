import styled, { keyframes } from "styled-components";
import { green, rose } from "../../styles/colors";

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px 20px;
`;

export const Th = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: ${green};
  color: white;

  border: 1px solid #ddd;
  padding: 8px;
`;

export const Tr = styled.tr`
  &:hover {
    background-color: #ddd;
  }
`;

export const ChipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 7px;
  margin: 13px 0px;
  text-transform: capitalize;
`;

export const Chip = styled.p`
  padding: 2px 15px;
  border-radius: 300px;
  cursor: pointer;
  font-size: 13px;
  border: solid 2px ${rose};

  &:hover {
    background-color: #d6004a;
  }

  @media only screen and (max-width: 768px) {
    font-size: 11px;
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const SpinnerWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: grid;
  margin: 25%;

  @media only screen and (max-width: 768px) {
    margin: 40%;
  }
`;
