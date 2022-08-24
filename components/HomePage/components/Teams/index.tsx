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
      name: "Mr Hasmukh Chaudhari",
      key: "hasmukh",
      designation: "_",
      details: `Mr Hasmukh Chaudhari from the Gujarat, India.`,
      profile: {
        src: "/imgs/users/vishwas_jani.jpeg",
        size: 250,
        alt: "maxcess pharma harsh raval",
      },
    },
    {
      name: "Mr Sanjay Chaudhari",
      key: "sanjay",
      designation: "_",
      details: `Mr Sanjay Chaudhari from the Gujarat, India.`,
      profile: {
        src: "/imgs/users/vishwas_jani.jpeg",
        size: 250,
        alt: "maxcess pharma harsh raval",
      },
    },
  ];
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
