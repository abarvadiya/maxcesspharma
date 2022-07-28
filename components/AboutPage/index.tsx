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

const AboutPage = () => {
  return (
    <Container>
      <Row>
        <DetailsWrapper>
          <MainTitle>
            What is <TitleColor>Kahu Lifescience</TitleColor>?
          </MainTitle>
          <p>
            Kahu Lifescience LLP is one of the most trusted pharmaceutical
            exporter in India . We are a brand name in the pharmaceutical
            industry who are always consistent with their services and are one
            of the leading pharmaceutical exporter in India. <br />
            <br />
            We are a government authorized company who are experts in providing
            a premium platform to ensure all kinds of pharmaceutical supplies
            are done across the globe without compromising the quality of the
            products.
            <br /> <br />
            The last 10 years of our journey as a pharmaceutical wholesaler is a
            golden example of showcasing the professional attitude with a great
            precision. We transport most of the on-demand drugs to the desired
            location. The breaches of time between the import and export of
            every drug shipment is taken care of the precise packing of the
            stock with the help of latest monitoring devices for temperature
            control. Hence, the demographics quotient is very well covered by
            Kahu Lifescience LLP.
          </p>
        </DetailsWrapper>
        <ImageWrapper>
          <Image
            src="/imgs/about_1.svg"
            objectPosition="center"
            alt="kahu life science about-us"
            height={250}
            width={250}
          />
        </ImageWrapper>
      </Row>

      <RowRevers>
        <DetailsWrapper>
          <MainTitle>
            What is <TitleColor>Kahu Lifescience</TitleColor>?
          </MainTitle>
          <p>
            Working on almost all domains of medicines, Kings Global hold an
            important name in dealing with pharmaceuticals ranges of Oncology,
            Nephrology, Gastroenterology, Vaccines, and many more. However,
            other segments of medicines are also covered excellently by us.
            <br />
            <br /> As an authorized leading exporter in the market, we have been
            consistent in offering an adequate supply of Generic Drugs and
            Branded Drugs to the domestic as well as international Vendors.
            <br />
            <br /> Kahu Lifescience has emerged as an ultimate “ King “ of
            quality, cost and supply of drugs in “ Global” Market. Hence,
            justifying its name by its deeds.
            <br />
            <br />
            We are always sailing our boat to cover the upcoming milestones with
            unmatched quality in the industry. Happy clients from all over the
            world are our achievement and we feel pride in continuing our
            partnership for many coming years!
          </p>
        </DetailsWrapper>
        <ImageWrapper>
          <Image
            src="/imgs/about_2.svg"
            objectPosition="center"
            alt="kahu life science about-us"
            height={250}
            width={250}
          />
        </ImageWrapper>
      </RowRevers>
    </Container>
  );
};

export default AboutPage;
