import React from "react";
import styled from "styled-components";
import { green } from "../../../../styles/colors";
import { services } from "./data";
const Services = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <h3>
            Maxcess
            <br /> Pharmaceuticals
          </h3>
          <p>
            Maxcess pharma believes in meeting the unmet medical needs of
            Healthcare Industry with innovative and more importantly quality
            products. We make sure of maintaining the best quality check backed
            with strong R&#38;D for every product that reaches the end consumer.
          </p>
        </article>
        <div className="services-center">
          {services.map(service => {
            const { id, icon, title, text } = service;
            return (
              <article
                data-aos-duration="4000"
                data-aos-offset="400"
                data-aos={title === "Vision" ? "fade-up-right" : "fade-up-left"}
                className="service"
                key={id}
              >
                <span className="icon">{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h3,
  h4 {
    color: ${green};
  }
  padding: 5rem 0;
  background: #f5f2eb;

  @media only screen and (max-width: 740px) {
    background: none;
    margin-bottom: 16%;
    padding: 0;
  }

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: #fff;
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: 1rem;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
      rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
    p {
      color: var(--clr-primary-2);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;
export default Services;
