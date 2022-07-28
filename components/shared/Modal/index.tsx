import React, { useEffect, useState } from "react";

// Utils
import { IoMdClose } from "react-icons/io";

// Components
import * as S from "./StyledComponents";
import Portal from "../Portal";

interface PropsI {
  isModalOpen: boolean;
  fullDetils: string;
  setIsModalOpen(): void;
}

const TermsAndConditions = ({
  isModalOpen,
  setIsModalOpen,
  fullDetils,
}: PropsI) => {
  const [title, setTitle] = useState<string>("");
  const [details, setDetils] = useState<string>("");

  const getDetils = (user: string) => {
    if ("vishwas" === user) {
      setTitle("Mr Vishwas Jani");
      setDetils(`The founder & ceo of Kahu life science, Mr Vishwas ashwinkumar Jani younger entrepreneur from Gaandhinagar,Gujarat.he achieved his pharmacy degree from Nirma university Ahmedabad.and later went on to he continued to do research on various pharmaceutical markets for 2years. <br/> <br/>
      During this time is when he knew starting his own business was going to be his main goal in life. However, before jumping into the entrepreneurship world instinctively, he spent a couple of years obtaining work experience to enrich his constructive knowledge of the international pharmaceutical sector.he is also involved in spiritual activities such as a “Devi Bhagwat”,havan and many others at ladol and Gandhinagar.He is a chairperson in Harsiddhi trust at Gandhinagar.also pithadhish in Harsiddhi ashram Dwarka Gujarat,he is writer also he wrote a book the name “Mari ma Harsiddhi “and “shri yantra.”<br/> <br/>
      He envisions kahu life science developing vastly in the coming years in both the domestic and international markets. The company continues to excel under his supervision and is, therefore, able to branch out into many other ventures apart from prescription pharmaceuticals such as surgical and medical devices, cosmetic and personal care products. Through this, he is able to meet the requirements of global healthcare demand.`);
    }
    if ("priyanka" === user) {
      setTitle("Mrs Priyanka Jani");
      setDetils(`Co-founder of kahu life science , Mrs Priyanka  vishwas jani, graduated from HNGU with a degree in Bachelors of Nursing in 2019. Later She complained master in medical & surgical nursing in sub speciality in cardiovascular & thoracic care from Gujarat university .she join kahu life science in 2022 <br/> <br/>
        Acknowledging this vastly growing industry she knew a start-up was the ultimate goal. Incorporating her patient-driven awareness industry-driven knowledge from the Indian Pharma sector.as well as she suggested on various products related to cardio and respiratory.she also done the research on patient suffering from hypertension and it’s management. <br/> <br/> 
        As she aims to expand kahu life science globally, she invariably keeps patient care and customer satisfaction as her highest priority.
      `);
    }
    if ("pankaj" === user) {
      setTitle("Mr Pankaj Chodhari");
      setDetils(
        `He envisions kahu life science developing vastly in the coming years in both the domestic and international markets. The company continues to excel under his supervision and is, therefore, able to branch out into many other ventures apart from prescription pharmaceuticals such as surgical and medical devices, cosmetic and personal care products. Through this, he is able to meet the requirements of global healthcare demand.`
      );
    }
  };

  useEffect(() => {
    getDetils(fullDetils);
  }, [fullDetils]);

  return (
    <>
      {isModalOpen && (
        <Portal>
          <>
            <S.Background />
            <S.Modal>
              <S.ModalWrapper>
                <S.IconButton onClick={setIsModalOpen}>
                  <IoMdClose
                    onClick={setIsModalOpen}
                    color="rgba(0, 0, 0, 0.6)"
                    size={25}
                  />
                </S.IconButton>
                <S.ModalTitle>{title}</S.ModalTitle>
                <S.TextBox>
                  <S.Text dangerouslySetInnerHTML={{ __html: details }} />
                </S.TextBox>
              </S.ModalWrapper>
            </S.Modal>
          </>
        </Portal>
      )}
    </>
  );
};
export default TermsAndConditions;
