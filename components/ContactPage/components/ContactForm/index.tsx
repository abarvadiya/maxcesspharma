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
        "https://api.airtable.com/v0/appq48Qe8LgxSLCoc/contact",
        { records: [{ fields: { ...contactFormValues } }] },
        {
          headers: {
            Authorization: "Bearer keyMymW7eT0XyeEbE",
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
            <S.SubTitle>Contact Us</S.SubTitle>
            <S.Title>
              Let&apos;s Talk Question<TitleColor>.</TitleColor>
            </S.Title>
          </S.ContactTitle>
          <S.Description>
            If you have any further questions or queries please do not hesitate
            to get in touch.
          </S.Description>

          <form onSubmit={handleSubmit(onSubmit)}>
            <S.FormGrp>
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

            <S.FormGrp>
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

            <S.FormGrp>
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

            <CardButton type="submit">Send Now</CardButton>
          </form>
        </div>

        <S.ContectInto>
          <S.ContactImgContainer>
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
                <S.IconText>+91 0000000000</S.IconText>
              </S.Li>
              <S.Li>
                <S.IconContainer>
                  <HiMailOpen width={18} height={13} />
                </S.IconContainer>
                <S.IconText>kahulifescience@gmail.com</S.IconText>
              </S.Li>
            </S.Ul>
          </div>
          <div>
            <S.SocialUl>
              <S.SocialLi>
                <S.SocialWrapper
                  color="#385594"
                  href="https://www.facebook.com/checkpoint/828281030927956/?next=https%3A%2F%2Fwww.facebook.com%2Fkahulifescience%2F"
                  target="_blank"
                >
                  <FaFacebookF size={20} />
                </S.SocialWrapper>
              </S.SocialLi>
              <S.SocialLi>
                <S.SocialWrapper
                  color="#fb3958"
                  href="https://www.instagram.com/kahulifescience/"
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
                  href="https://www.linkedin.com/in/vishwas-jani-81b5ba18a/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in"
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
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14681.85027620312!2d72.4952314!3d23.0801568!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf955692e13272fcf!2sScience%20City%20ahmedabad!5e0!3m2!1sen!2sin!4v1652478372621!5m2!1sen!2sin"
          width="100%"
          height="400"
          frameBorder="0"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
