import React from "react"
import tw from "twin.macro"
import styled from "@emotion/styled"
import heroImage from "../../assets/Frame 1.png"


const HeroSection = styled.section`
	${tw`relative flex w-full items-center justify-between gap-[1.6rem] mt-[151px] py-0`}
    padding-left: 12.5%;
    padding-right: 10.5%;

    @media (max-width: 600px) {
        ${tw`flex-col items-center gap-[30px]`}
        padding-left: 5%;
        padding-right: 5%;
    }

    @media (min-width: 600px) and (max-width: 900px) {
        ${tw`flex-col items-center gap-[30px]`}
        padding-left: 5%;
        padding-right: 5%;
    }

    @media (min-width: 900px) and (max-width: 1100px) {
        ${tw`flex-col items-center gap-[30px]`}
        padding-left: 5%;
        padding-right: 5%;
    }

    @media (min-width: 1100px) and (max-width: 1300px) {
        ${tw`w-[90%] h-[200px] gap-[5%]`}
        padding-left: 10%;
        padding-right: 10%;
    }

    @media (min-width: 1536px) {
        ${tw`w-[90%]`}
    }

`

const ContentWrapper = styled.div`
	${tw`w-1/2 font-semibold text-left`}

    @media (max-width: 600px) {
        ${tw`w-full`}
    }

    @media (min-width: 600px) and (max-width: 900px) {
        ${tw`w-full`}
    }

    @media (min-width: 900px) and (max-width: 1100px) {
        ${tw`w-full`}
    }

    @media (min-width: 1100px) and (max-width: 1300px) {
        ${tw`w-full`}
    }

    @media (min-width: 1536px) {

    }
`
const ImageWrapper = styled.div`
	${tw`relative top-0 right-[0.4rem] w-3/5 text-right`}
	img { ${tw`w-full h-auto`} }
`

const Heading = styled.h1`
	${tw`text-[48px] text-[#091156] leading-[3.7rem] tracking-[0rem]`}
	margin: -19px 8px 10px;
`
const Description = styled.p`   
	${tw`tracking-widest leading-[1.5rem] text-[1rem] text-[#091156] mb-10 whitespace-nowrap`}
	margin: 0 0 2.45rem 8px;
`
const Button = styled.button`
	${tw`rounded-full cursor-pointer border-none w-[200px] h-[60px] text-white tracking-[0.12rem] bg-[#FF64AE]`}
    margin-left: 10px;
    margin-top: -8px;
	box-shadow: 0px 17px 22px 0px #FFEDF6;
`


const Hero: React.FC = () => {
    return (
        <HeroSection id="hero">
            <ContentWrapper>
                <Heading>Clinic & beauty consultant</Heading>
                <Description>It is a long established fact that a reader will be <br/> by the readable content of a page.</Description>
                <Button>More Details</Button>
            </ContentWrapper>
            <ImageWrapper>
                <img src={heroImage} alt="Hero Image" />
            </ImageWrapper>
        </HeroSection>
    )
}

export default Hero;