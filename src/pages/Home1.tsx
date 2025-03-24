import Header from "../layouts/Header"
import tw from "twin.macro"
import styled from "@emotion/styled"
import Footer from "../layouts/Footer"
import Hero from "../sections/Home1/Hero"
import Services from "../sections/Home1/Services"
import About from "../sections/Home1/About"
import Professional from "../sections/Home1/Professional"
import Contact from "../sections/Home1/Contact"
import SlideButton from "../components/SlideButton"
import bubbleBg from "../assets/Background Bubble.png"
import ToTopBtn from "../components/ToTopBtn"

const HomeContainer = styled.div`
	${tw`relative`}
`

const HeaderHeroContainer = styled.div`
	${tw`relative`}
`

const BubbleBackground = styled.img`
	${tw`absolute bottom-[920px] left-0 z-0`}
`


const Home1: React.FC = () => {
    return (
        <HomeContainer>
            <HeaderHeroContainer>
                <Header/>
                <Hero/>
                <SlideButton/>
            </HeaderHeroContainer>
            <Services/>
            <About/>
            <Professional/>
            <BubbleBackground src={bubbleBg} alt="Home1 contact bg"/>
            <Contact/>
            <Footer/>
            <ToTopBtn/>
        </HomeContainer>
    )
}

export default Home1;