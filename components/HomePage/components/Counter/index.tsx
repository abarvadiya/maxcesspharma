import React from "react";
import CountUp from "react-countup";
import styled from "styled-components";
import { green } from "../../../../styles/colors";

const Row = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 740px) {
    display: block;
    margin-top: 30%;
  }
`;

export const Lable = styled.p`
  color: #747474;
  text-transform: uppercase;
  margin-bottom: 0;
  font-weight: 600;
  line-height: 26px;
`;

const CardContainer = styled.div`
  padding: 2rem;
  width: 20rem;

  @media only screen and (max-width: 740px) {
    width: 100%;
    padding: 0;
  }
`;

export const Count = styled.h2`
  font-size: 45px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-transition-duration: 600ms;
  transition-duration: 600ms;
  font-weight: 700 !important;

  @media only screen and (max-width: 740px) {
    font-size: 40px;
  }
`;

export const TextWrapper = styled.div`
  text-align: center;
  background: #fff;
  padding: 50px 40px;
  border-radius: 15px;
  box-shadow: 0px 92px 139.16px 2.84px rgb(0 0 0 / 5%);
  margin-bottom: 30px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;

  @media only screen and (max-width: 740px) {
    padding: 25px 40px;
  }

  &:hover ${Count} {
    color: ${green};
  }
`;

interface CardI {
  lable: string;
  count: number;
  suffix: string;
}

const Card = ({ lable, count, suffix }: CardI) => {
  return (
    <CardContainer>
      <TextWrapper>
        <Count>
          <CountUp
            start={0}
            end={count}
            duration={2.75}
            useEasing={true}
            useGrouping={true}
            // separator=" "
            // decimals={4}
            // decimal=","
            // prefix="EUR "
            suffix={suffix}
          />
        </Count>
        <Lable>{lable}</Lable>
      </TextWrapper>
    </CardContainer>
  );
};

function index() {
  const datas = [
    { lable: "Years Experience", count: 3, suffix: "+" },
    { lable: "Products", count: 224, suffix: "+" },
    { lable: "Repeated Clients", count: 82, suffix: "%" },
    { lable: "Country", count: 48, suffix: "+" },
  ];

  return (
    <Row>
      {datas.map((item, index) => (
        <div
          data-aos-duration={`${index}000`}
          data-aos-offset={`${index}00`}
          data-aos="fade-up"
        >
          <Card key={index} {...item} />
        </div>
      ))}
    </Row>
  );
}

export default index;
