import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import toast from "react-hot-toast";

// Components
import * as S from "./StyledComponents";
import { TitleColor } from "../../../shared/StyledComponents";
import { CardButton } from "../../../HomePage/components/Teams/StyledComponents";

export interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = async (contactFormValues: IFormInput) => {
    const notification = toast.loading("Sending...", {
      style: {
        background: "white",
        color: "green",
        fontSize: "17px",
        padding: "10px",
      },
    });

    try {
      const request = await axios.post(
        "https://api.airtable.com/v0/apphIEQTHkqMh8MRI/contact",
        { records: [{ fields: { ...contactFormValues } }] },
        {
          headers: {
            Authorization: "Bearer keyukQVpjsE3Vwn2S",
          },
        }
      );

      if (request.data) {
        reset();
        toast.success("Your message has been sent.");
      }
    } catch (error) {
      toast.error("Message not sent try again");
    } finally {
      toast.dismiss(notification);
    }
  };

  return (
    <section>
      <Toaster position="bottom-left" />
      <S.Row>
        <div>
          <S.ContactTitle>
            <S.SubTitle data-aos-duration="1000" data-aos="fade-down">
              Contact Us
            </S.SubTitle>
            <S.Title data-aos-duration="1000" data-aos="fade-right">
              Let&apos;s Talk Question<TitleColor>.</TitleColor>
            </S.Title>
          </S.ContactTitle>
          <S.Description data-aos-duration="1000" data-aos="fade-right">
            If you have any further questions or queries please do not hesitate
            to get in touch.
          </S.Description>

          <form onSubmit={handleSubmit(onSubmit)}>
            <S.FormGrp data-aos-duration="1000" data-aos="fade-right">
              <S.Lable>Your Name*</S.Lable>
              <S.Input
                {...register("name", {
                  required: true,
                })}
                id="name"
                placeholder="Jon Deo..."
              />
              {errors?.name && (
                <S.ErrorMessage>Please enter the name</S.ErrorMessage>
              )}
            </S.FormGrp>

            <S.FormGrp data-aos-duration="1300" data-aos="fade-right">
              <S.Lable>Your Email*</S.Lable>
              <S.Input
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                })}
                id="email"
                placeholder="info.example@.com"
              />
              {errors?.email?.type === "required" && (
                <S.ErrorMessage>Please enter the email</S.ErrorMessage>
              )}
              {errors?.email?.type === "pattern" && (
                <S.ErrorMessage>Please enter valid email</S.ErrorMessage>
              )}
            </S.FormGrp>

            <S.FormGrp data-aos-duration="1500" data-aos="fade-right">
              <S.Lable>Your Message*</S.Lable>
              <S.TextArea
                {...register("message", {
                  required: true,
                })}
                id="message"
                placeholder="Opinion..."
                style={{ height: "125px" }}
              />
              {errors?.message && (
                <S.ErrorMessage>Please enter the message</S.ErrorMessage>
              )}
            </S.FormGrp>

            <CardButton data-aos-duration="1600" data-aos="fade-up" type="submit">Send Now</CardButton>
          </form>
        </div>

        <S.ContectInto>
          <S.ContactImgContainer data-aos-duration="1000" data-aos="zoom-in">
            <S.ContactImg src="imgs/contact_img.png" alt="" />
          </S.ContactImgContainer>
          <div>
            <S.Ul>
              <S.Li>
                <S.IconContainer>
                  <MdLocationOn size={16} />
                </S.IconContainer>
                <S.IconText>
                  402, Himalaya Emerald, Shyamal, Ahmedabad, <br />
                  Gujarat, India 380015
                </S.IconText>
              </S.Li>
              <S.Li>
                <S.IconContainer>
                  <BsFillTelephoneFill size={12} />
                </S.IconContainer>
                <S.IconText>+91 8469377741</S.IconText>
              </S.Li>
              <S.Li>
                <S.IconContainer>
                  <HiMailOpen width={18} height={13} />
                </S.IconContainer>
                <S.IconText>maxcesspharma@gmail.com</S.IconText>
              </S.Li>
            </S.Ul>
          </div>
          <div>
            <S.SocialUl>
              <S.SocialLi>
                <S.SocialWrapper
                  color="#385594"
                  href="https://www.facebook.com/kahulifescience"
                  target="_blank"
                >
                  <FaFacebookF size={20} />
                </S.SocialWrapper>
              </S.SocialLi>
              <S.SocialLi>
                <S.SocialWrapper
                  color="#fb3958"
                  href="https://www.instagram.com/maxcess_pharmaceutical_"
                  target="_blank"
                >
                  <AiFillInstagram size={20} />
                </S.SocialWrapper>
              </S.SocialLi>
              <S.SocialLi>
                <S.SocialWrapper color="#4eabee" href="#" target="_blank">
                  <AiOutlineTwitter size={20} />
                </S.SocialWrapper>
              </S.SocialLi>
              <S.SocialLi>
                <S.SocialWrapper
                  color="#1976d2"
                  href="https://www.linkedin.com/company/kahu-life-science"
                  target="_blank"
                >
                  <FaLinkedinIn size={20} />
                </S.SocialWrapper>
              </S.SocialLi>
            </S.SocialUl>
          </div>
        </S.ContectInto>
      </S.Row>

      <div style={{ width: "100%", marginTop: "50px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.1020057053247!2d72.52765421491914!3d23.020026584954337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84d0fa2cfcf5%3A0x708257b9f52da4e7!2sHimalaya%20Emerald!5e0!3m2!1sen!2ssg!4v1660826500224!5m2!1sen!2ssg"
          width="100%"
          height="400"
          frameBorder="0"
          style={{ border: 0 }}
        />
      </div>
    </section>
  );
};

export default Contact;
