import tw from "twin.macro";
import styled from "@emotion/styled";
import contactImg from "../../assets/Contact Animations.png";
import ContactInputBox from "../ContactInputBox";


const ContactSection = styled.section`
    ${tw`flex items-center justify-center h-screen`}
`

const Container = styled.div`
    ${tw`flex justify-center items-center`}
`

const ContactImg = styled.img`
    ${tw`w-1/2 h-full object-cover`}
`

const FormContainer = styled.div`
    ${tw`flex flex-col justify-center items-center`}
`

const TitleWrapper = styled.div`
    ${tw`flex flex-col justify-center items-center`}
`

const Subtitle = styled.h2`
    ${tw`text-lg font-semibold`}
`

const Heading = styled.h1`
    ${tw`text-3xl font-semibold`}
`

const Description = styled.p`
    ${tw`text-lg text-center mt-4`}
`


const Contact: React.FC = () => {
    return (
        <ContactSection id="contact">
            <Container>
                <ContactImg src={contactImg} alt="Contact"/>
                <FormContainer>
                    <TitleWrapper>
                        <Subtitle>Contact Us</Subtitle>
                        <Heading>Send your inquiry to our expert team</Heading>
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