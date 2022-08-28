import React from "react";
import styled from "styled-components";
import { MainTitle } from "../FAQPage/StyledComponent";
import Image from "../shared/NewImage";
import { TitleColor } from "../shared/StyledComponents";

export const Container = styled.div`
  margin: 8rem;

  @media only screen and (max-width: 768px) {
    margin: 8rem 0;
  }
`;
const Row = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  margin-bottom: 5rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const RowRevers = styled(Row)`
  flex-direction: row-reverse;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  background-color: #c8ecda;
  border-radius: 10px;
}

  @media only screen and (max-width: 768px) {
    height: 30%;
    margin-bottom: 1rem;
  }
`;

const DetailsWrapper = styled.div`
  padding: 2rem;
  width: 123rem;

  @media only screen and (max-width: 768px) {
    padding: 0;
    width: 100%;
  }
`;

const ManufacturingPage = () => {
  return (
    <Container>
      <Row>
        <DetailsWrapper>
          <MainTitle data-aos-duration="1000" data-aos="fade-down">
            Maxcess Pharma <TitleColor>Manufacturing</TitleColor>.
          </MainTitle>
          <p data-aos-duration="1000" data-aos="fade-up">
            Maxcess pharma believes in meeting the unmet medical needs of
            Healthcare Industry with innovative and more importantly; quality
            products. We make sure of maintaining the best quality check backed
            with strong R&#38;D for every product that reaches the end consumer.
            <br /> <br />
            We are a government authorized company who are experts in providing
            a premium platform to ensure all kinds of pharmaceutical supplies
            are done across the globe without compromising the quality of the
            products.
          </p>
        </DetailsWrapper>
        <ImageWrapper>
          <Image
            data-aos-duration="1000"
            data-aos="fade-right"
            src="/imgs/hero_2.svg"
            objectPosition="center"
            alt="maxcess pharma about-us"
            height={250}
            width={250}
          />
        </ImageWrapper>
      </Row>

      <RowRevers>
        <DetailsWrapper>
          <MainTitle data-aos-duration="1000" data-aos="fade-down">
            More About <TitleColor>Manufacturing</TitleColor>.
          </MainTitle>
          <p data-aos-duration="1000" data-aos="fade-up">
            In the initial stage at our research centre, we develop the
            formulations; process them till they are stable and ready for
            commercialization. We also have tie-up with contract manufacturers.
            The further production takes place in the very presence of our
            scientists and skilled technicians. This ensures the best quality
            for every single product that we bring out in the market.
            <br /> <br />
            Also maxcess Pharma is going to prepare its new plant in a short
            period of time, which will be able to create new products with
            advanced laboratory facilities and research.
          </p>
        </DetailsWrapper>
        <ImageWrapper>
          <Image
            data-aos-duration="1000"
            data-aos="fade-left"
            src="/imgs/about_2.svg"
            objectPosition="center"
            alt="maxcess pharma about-us"
            height={250}
            width={250}
          />
        </ImageWrapper>
      </RowRevers>
    </Container>
  );
};

export default ManufacturingPage;
