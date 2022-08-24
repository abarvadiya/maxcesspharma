import React, { useState } from "react";
import * as S from "./StyledComponents";
import Modal from "../../../shared/Modal/index";
import Image from "../../../shared/NewImage";

const Teams = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [fullDetils, setFullDetils] = useState<string>("");

  const datas = [
    {
      name: "Mr Vishwas Jani",
      key: "vishwas",
      designation: "Founder & CEO",
      details: `Mr Vishwas Ashwinkumar Jani younger entrepreneur from Gandhinagar, Gujar+at.`,
      profile: {
        src: "/imgs/users/vishwas_jani.jpeg",
        size: 250,
        alt: "maxcess pharma vishwas jani",
      },
    },
    {
      name: "Mr Harsh Raval",
      key: "harsh",
      designation: "Founder",
      details: `Mr. Harsh Raval from the Gujarat, India.`,
      profile: {
        src: "/imgs/users/vishwas_jani.jpeg",
        size: 250,
        alt: "maxcess pharma harsh raval",
      },
    },
    {
      name: "Mr Hasmukh Chodhari",
      key: "hasmukh",
      designation: "_",
      details: `Mr Hasmukh Chodhari from the Gujarat, India.`,
      profile: {
        src: "/imgs/users/vishwas_jani.jpeg",
        size: 250,
        alt: "maxcess pharma harsh raval",
      },
    },
    {
      name: "Mr Sanjay Chodhari",
      key: "sanjay",
      designation: "_",
      details: `Mr Sanjay Chodhari from the Gujarat, India.`,
      profile: {
        src: "/imgs/users/vishwas_jani.jpeg",
        size: 250,
        alt: "maxcess pharma harsh raval",
      },
    },
    // {
    //   name: "Mrs Priyanka Jani",
    //   key: "priyanka",
    //   designation: "Co-founder",
    //   details: `Mrs Priyanka  vishwas jani, graduated from HNGU with a degree in Bachelors of Nursing in 2019.`,
    //   profile: {
    //     src: "/imgs/users/priyanka.jpeg",
    //     size: 250,
    //     alt: "maxcess pharma priyanka jani",
    //   },
    // },
    // {
    //   name: "Mr Pankaj Chodhari",
    //   key: "pankaj",
    //   designation: "Co-founder",
    //   details: `Mr Pankaj came from a humble farmer family from Mehsana, Gujarat. In his early days he worked as a collection executive in one small collection agency in Mehsana Gujarat.
    //    `,
    //   profile: {
    //     src: "/imgs/users/pankaj.jpeg",
    //     size: 250,
    //     alt: "maxcess pharma priyanka jani",
    //   },
    // },
  ];
  // width: 90vw;
  return (
    <S.Section className="App">
      {datas.map(({ name, key, designation, details, profile }) => (
        <S.CardWrapper
          key={key}
          data-aos-duration="2500"
          data-aos-offset="200"
          data-aos="fade-up"
        >
          <S.Banner>
            <S.ProfileImage>
              <Image
                src={"/imgs/partnears/avtar.jpg" || profile.src}
                objectPosition="center"
                alt={profile.alt}
                height={profile.size}
                width={profile.size}
              />
            </S.ProfileImage>
          </S.Banner>

          <S.Name>{name}</S.Name>
          <S.Title>{designation}</S.Title>

          <S.CardBody>
            {/* <S.CardFieldset>
                <S.CardOptions>
                  <S.CardOptionsItem>
                    <S.CardIcon className="fab fa-google" big />
                  </S.CardOptionsItem>
    
                  <S.CardOptionsItem>
                    <S.CardIcon className="fab fa-twitter" big />
                  </S.CardOptionsItem>
    
                  <S.CardOptionsItem>
                    <S.CardIcon className="fab fa-facebook" big />
                  </S.CardOptionsItem>
                </S.CardOptions>
              </S.CardFieldset> */}

            <S.CardFieldset onClick={() => setFullDetils(key)}>
              <S.CardButton
                type="button"
                onClick={() => setIsModalOpen(!isModalOpen)}
              >
                More info
              </S.CardButton>
              <S.Details>{details}</S.Details>
            </S.CardFieldset>
          </S.CardBody>
        </S.CardWrapper>
      ))}

      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={() => setIsModalOpen(!isModalOpen)}
        fullDetils={fullDetils}
      />
    </S.Section>
  );
};

export default Teams;
