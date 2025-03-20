import tw from "twin.macro"
import styled from "@emotion/styled"
import playButton from "../../assets/Play_button.png"
import aboutImage from "../../assets/unsplash_LRXYS0tSyGc.png"

const AboutSection = styled.section`
    ${tw`flex items-center justify-center h-screen`}
`

const ContentWrapper = styled.div`
    ${tw`flex justify-center items-center`}
`

const TextSection = styled.div`
    ${tw`flex flex-col justify-center items-center`}   
`

const ImageWrapper = styled.div`
    ${tw`flex justify-center items-center`}
`

const Subtitle = styled.h2`
    ${tw`text-lg font-semibold`}
`

const Heading = styled.h1`
    ${tw`text-3xl font-bold`}
`

const Description = styled.p`
    ${tw`text-lg text-center mt-4`}
`

const Actions = styled.div`
    ${tw`flex gap-4 mt-4`}
`

const Button = styled.button`
    ${tw`px-6 py-2 text-white bg-[#FF64AE] rounded-lg `}
`

const Video = styled.div`
    ${tw`flex items-center gap-2 px-4 py-2 cursor-pointer`}
    img {
        ${tw`h-6`}
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