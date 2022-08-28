import React from "react";
import styled, { css } from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin: 6rem 0;

  @media only screen and (max-width: 740px) {
    margin: 16% 0;
    flex-direction: column;
    justify-content: center;
    display: grid;
  }
`;

export const CardWrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
  overflow: hidden;
  padding: 0 0 32px;
  width: 320px;
  max-width: 350px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 25px 50px -5px;
  border-radius: 1.5rem;

  @media only screen and (max-width: 740px) {
    width: 320px;
  }
`;

export const Banner = styled.div`
  background-image: url(/imgs/team_bg.webp);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 10rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  box-sizing: border-box;
  margin-bottom: 6rem;

  @media only screen and (max-width: 740px) {
    height: 8rem;
  }
`;

export const ProfileImage = styled.div`
  background-color: white;
  overflow: hidden;
  width: 8rem;
  height: 8rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 15px;
  border-radius: 50%;
  transform: translateY(50%);
  transition: transform 200ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
  &:hover {
    transform: translateY(50%) scale(1.1);
  }
`;

export const Name = styled.h4`
  text-align: center;
  padding: 0 padding-size 0.5rem;
  margin: 8px 0;
`;

export const Title = styled.span`
  color: #0000006b;
  font-weight: 700;
  font-size: 13px;
  text-align: center padding 0;
  padding-size: 1.2rem;
`;

export const Details = styled.p`
  // text-align: justify;
  // padding: 0 padding-size 2.5rem;
  // order: 100;
`;

export const CardBody = styled.div`
  padding: 10px 32px 0 32px;
`;

export const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 12px;
  }

  &:nth-last-of-type(2) {
    margin-top: 16px;
  }

  &:last-of-type {
    text-align: center;
  }
`;

interface IconI {
  big: boolean;
}

export const CardIcon = styled.span<IconI>`
  color: #666;
  cursor: pointer;
  opacity: 0.25;
  transition: opacity 0.25s ease-in;

  &:hover {
    opacity: 0.95;
  }

  ${props =>
    props.big &&
    css`
      font-size: 26px;
    `}
`;

export const CardOptions = styled.ul`
  padding: 0;
  margin: 16px 0 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  list-style-type: none;
`;

export const CardOptionsItem = styled.li`
  &:nth-of-type(n + 2) {
    margin-left: 16px;
  }
`;

export const CardButton = styled.button`
  display: block;
  margin-bottom: 1rem;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #e5195f;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px #e5195f6b;
    transform: translate(0, -5px);
  }
`;
