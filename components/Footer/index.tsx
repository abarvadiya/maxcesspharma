import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import * as MS from "../ContactPage/components/ContactForm/StyledComponents";
import linksData from "../Navbar/components/linksData";
import Link from "next/link";
import Image from "next/image";

import * as S from "./StyledComponents";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <>
      <S.MainFooter>
        <S.DetailsWrapper>
          <Image
            src="/imgs/new_max_logo.svg"
            height={100}
            width={300}
            style={{ padding: 0 }}
            alt="maxcess pharma"
          />

          <S.Discription>
            Maxcess Pharma is one of the most trusted pharmaceutical exporter in
            India . We are a brand name in the pharmaceutical industry who are
            always consistent with their services and are one of the leading
            pharmaceutical exporter in India.
          </S.Discription>
          <S.IconWrapper>
            <MS.SocialUl>
              <MS.SocialLi>
                <MS.SocialWrapper
                  color="#385594"
                  href="https://www.facebook.com/checkpoint/828281030927956/?next=https%3A%2F%2Fwww.facebook.com%2Fmaxcesspharma%2F"
                  target="_blank"
                >
                  <FaFacebookF size={20} />
                </MS.SocialWrapper>
              </MS.SocialLi>
              <MS.SocialLi>
                <MS.SocialWrapper
                  color="#fb3958"
                  href="https://www.instagram.com/maxcesspharma/"
                  target="_blank"
                >
                  <AiFillInstagram size={20} />
                </MS.SocialWrapper>
              </MS.SocialLi>
              <MS.SocialLi>
                <MS.SocialWrapper color="#4eabee">
                  <AiOutlineTwitter size={20} />
                </MS.SocialWrapper>
              </MS.SocialLi>
              <MS.SocialLi>
                <MS.SocialWrapper
                  color="#1976d2"
                  href="https://www.linkedin.com/in/vishwas-jani-81b5ba18a/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in"
                  target="_blank"
                >
                  <FaLinkedinIn size={20} />
                </MS.SocialWrapper>
              </MS.SocialLi>
            </MS.SocialUl>
          </S.IconWrapper>
        </S.DetailsWrapper>

        <S.LinkWrapper>
          <div>
            <h4>Quick Links</h4>
            {linksData.map((link, index) => (
              <Link key={index} href={link.url} passHref>
                <S.LinkText>{link.title}</S.LinkText>
              </Link>
            ))}
          </div>

          <div>
            <h4>Contacts</h4>
            <MS.Ul>
              <MS.Li>
                <S.ContactIconWrapper>
                  <MdLocationOn size={25} color="#ffffffeb" />
                </S.ContactIconWrapper>
                &nbsp;
                <S.LinkText>
                  <b>Corporate House :</b>
                  <br />
                  Ground floor Riya house, Opp.Nagalpur
                  <br />
                  college, Nagalpur Mahesana, Gujarat, India 384001
                </S.LinkText>
              </MS.Li>
              <MS.Li>
                <S.ContactIconWrapper>
                  <MdLocationOn size={25} color="#ffffffeb" />
                </S.ContactIconWrapper>
                &nbsp;
                <S.LinkText>
                  <b>Registered Office :</b>
                  <br />
                  402, Himalaya Emerald, Shyamal, Ahmedabad, <br />
                  Gujarat, India 380015
                </S.LinkText>
              </MS.Li>
              <MS.Li>
                <S.ContactIconWrapper>
                  <FaPhoneAlt size={19} color="#ffffffeb" />
                </S.ContactIconWrapper>
                &nbsp;
                <a href="tel:+918469377741">
                  <S.LinkText>+91 8469377741</S.LinkText>
                </a>
              </MS.Li>
              <MS.Li>
                <S.ContactIconWrapper>
                  <HiOutlineMail size={25} color="#ffffffeb" />
                </S.ContactIconWrapper>
                &nbsp;
                <a href="mailto:maxcesspharma@gmail.com">
                  <S.LinkText>maxcesspharma@gmail.com</S.LinkText>
                </a>
              </MS.Li>
            </MS.Ul>
          </div>
        </S.LinkWrapper>
      </S.MainFooter>
      <S.CopyrightSection>
        Copyright &#169; {new Date().getFullYear()} by Maxcess Pharmaceuticals
      </S.CopyrightSection>
    </>
  );
};

export default Footer;
