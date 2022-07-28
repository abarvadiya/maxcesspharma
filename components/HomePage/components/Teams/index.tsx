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
      details: `The founder & ceo of Maxcess Pharma, Mr Vishwas Ashwinkumar Jani younger entrepreneur from Gaandhinagar, Gujarat.`,
      profile: {
        src: "/imgs/users/vishwas_jani.jpeg",
        size: 250,
        alt: "maxcess pharma vishwas jani",
      },
    },
    {
      name: "Mrs Priyanka Jani",
      key: "priyanka",
      designation: "Co-founder",
      details: `Co-founder of maxcess pharma, Mrs Priyanka  vishwas jani, graduated from HNGU with a degree in Bachelors of Nursing in 2019.`,
      profile: {
        src: "/imgs/users/priyanka.jpeg",
        size: 250,
        alt: "maxcess pharma priyanka jani",
      },
    },
    {
      name: "Mr Pankaj Chodhari",
      key: "pankaj",
      designation: "Co-founder",
      details: `Co-founder of maxcess pharma, Mrs Priyanka  vishwas jani, graduated from HNGU with a degree in Bachelors of Nursing in 2019.`,
      profile: {
        src: "/imgs/users/pankaj.jpeg",
        size: 250,
        alt: "maxcess pharma priyanka jani",
      },
    },
  ];
  // width: 90vw;
  return (
    <S.Section className="App">
      {datas.map(({ name, key, designation, details, profile }) => (
        <S.CardWrapper key={key}>
          <S.Banner>
            <S.ProfileImage>
              <Image
                src={profile.src}
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
