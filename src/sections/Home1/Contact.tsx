import tw from "twin.macro";
import styled from "@emotion/styled";
import contactImg from "../../assets/Contact Animations.png";
import ContactInputBox from "../../components/ContactInputBox";


const ContactSection = styled.section`
	${tw`relative px-[10.5%]`}
`

const Container = styled.div`
	${tw`flex justify-between items-center gap-[1.25rem]`}
`

const ContactImg = styled.div`
	${tw`relative w-[740px] h-auto`}
    margin-top: 36px;
	img {
		${tw`w-[86.5%] h-auto`}
	}
`

const FormContainer = styled.div`
	${tw`relative top-[-1rem] w-full max-w-[32.4rem]`}
`

const TitleWrapper = styled.div`
	${tw`text-left mb-[47px]`}
`

const Subtitle = styled.h2`
	${tw`relative font-semibold mb-[10px] text-[16px] text-[#FF64AE]`}
`

const Heading = styled.h1`
	${tw`font-semibold mb-[21px] tracking-[0.014em] leading-[45px] text-[35px] text-[#091156]`}
`

const Description = styled.p`
	${tw`tracking-[0.132em] font-medium text-[15px] text-[#8B8B8B]`}
`


const Contact: React.FC = () => {
    return (
        <ContactSection id="contact">
            <Container>
                <ContactImg>
                    <img src={contactImg} alt="Contact"/>
                </ContactImg> 
                <FormContainer>
                    <TitleWrapper>
                        <Subtitle>Contact Us</Subtitle>
                        <Heading>Send your inquiry to <br/> our expert team</Heading>
                        <Description>
                            Lorem ipsum dolor sit amet nulla turapis tellus.
                        </Description>
                    </TitleWrapper>

                    <ContactInputBox/>
                </FormContainer>
            </Container>
        </ContactSection>
    )
}

export default Contact;