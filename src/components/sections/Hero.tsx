import tw from "twin.macro"
import styled from "@emotion/styled"
import heroImage from "../../assets/Frame 1.png"


const HeroSection = styled.section`
    ${tw`flex items-center justify-center h-screen`}
`

const ContentWrapper = styled.div`
    ${tw`flex flex-col justify-center items-center`}
`
const ImageWrapper = styled.div`
    ${tw`flex justify-center items-center`}
`

const Heading = styled.h1`
    ${tw`text-3xl font-semibold`}
`
const Description = styled.p`   
    ${tw`text-lg text-center mt-4`}
`
const Button = styled.button`
    ${tw`px-6 py-2 text-white bg-[#FF64AE] rounded-lg mt-4`}
`


const Hero: React.FC = () => {
    return (
        <HeroSection id="hero">
            <ContentWrapper>
                <Heading>Clinic & beauty consultant</Heading>
                <Description>It is a long established fact that a reader will be by the readable content of a page.</Description>
                <Button>More Details</Button>
            </ContentWrapper>
            <ImageWrapper>
                <img src={heroImage} alt="Hero Image" />
            </ImageWrapper>
        </HeroSection>
    )
}

export default Hero;