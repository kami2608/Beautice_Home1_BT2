import tw from "twin.macro"
import styled from "@emotion/styled"
import playButton from "../../assets/Play_button.png"
import aboutImage from "../../assets/unsplash_LRXYS0tSyGc.png"
import bubbleBackground from "../../assets/AboutBg.png"

const AboutSection = styled.section`
	${tw`relative top-[-95px] flex items-center justify-between py-[150px] px-[10.5%] z-10`}
	background-image: url(${bubbleBackground});
	background-repeat: no-repeat;
	background-position: top right;
	background-size: 65%;

`

const ContentWrapper = styled.div`
	${tw`flex items-center gap-[2.5rem] mt-[114px] z-10`}

    
    @media (max-width: 600px) {
        ${tw`flex-col`}
    }

    @media (min-width: 600px) and (max-width: 900px) {
        ${tw`flex-col`}
    }

    @media (min-width: 900px) and (max-width: 1100px) {
        ${tw`flex-col`}
    }

    @media (min-width: 1100px) and (max-width: 1300px) {

    }

    @media (min-width: 1536px) {

    }
`

const TextSection = styled.div`
	${tw`text-left flex-1`} 
`

const ImageWrapper = styled.div`
	${tw`flex justify-end relative flex-1`}
    img {
        ${tw`object-cover w-[120%] max-w-[663px] max-h-[500px] rounded-[60px]`}
        margin-top: 40px;
        margin-right: -75px;
    }
        
    @media (max-width: 600px) {
        ${tw`w-full`}
        margin-right: 0px;
    }

    @media (min-width: 600px) and (max-width: 900px) {
        margin-right: 0px;
    }

    @media (min-width: 900px) and (max-width: 1100px) {
        margin-right: 0px;
    }

    @media (min-width: 1100px) and (max-width: 1300px) {

    }

    @media (min-width: 1536px) {

    }
`

const Subtitle = styled.h2`
	${tw`font-semibold text-[#FF64AE] mb-[6px] text-[16px]`}
`

const Heading = styled.h1`
	${tw`font-semibold mb-[15px] text-[36px] text-[#091156]`}
`

const Description = styled.p`
	${tw`font-[400] tracking-widest w-[89%] leading-[1.5rem] text-[16px] text-[#8B8B8B]`}
    margin-bottom: 1.75rem;
	white-space: normal;
`

const Actions = styled.div`
	${tw`flex items-center gap-[2.65rem] mt-[52px]`}
`

const Button = styled.button`
	${tw`text-[16px] w-[199px] h-[60px] bg-[#FF64AE] text-white font-medium rounded-full border-none tracking-[0.1rem]`}
	box-shadow: 0px 17px 22px 0px #FFEDF6;
`

const Video = styled.div`
	${tw`flex items-center cursor-pointer gap-[12px] font-medium`}
    img {
		${tw`w-[52px] h-[52px]`}
    }
    p {
        ${tw`text-[#8B8B8B] tracking-[0.1rem] text-[16px]`}
    }
`


const About: React.FC = () => {
    return (
        <AboutSection id="about">
            <ContentWrapper>
                <TextSection>
                    <Subtitle>About Us</Subtitle>
                    <Heading>We are the best beauty clinic</Heading>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
                        suscipit purus donec amet. Egestas volutpat facilisi eu libero.
                        Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
                        suspendisse placerat.
                        <br /><br />
                        Id dui erat sed quam tellus in purus. Pellentesque congue fringilla
                        cras tellus enim.
                    </Description>
                    <Actions>
                        <Button>Learn More</Button>
                        <Video>
                            <img src={playButton} alt="Play Button"/>
                            <p>Watch Video</p>
                        </Video>
                    </Actions>
                </TextSection>
                <ImageWrapper>
                    <img src={aboutImage} alt="About Us"/>
                </ImageWrapper>
            </ContentWrapper>
        </AboutSection>
    )
}

export default About;