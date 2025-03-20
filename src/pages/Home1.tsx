import Header from "../layouts/Header"
import tw from "twin.macro"
import styled from "@emotion/styled"
import Footer from "../layouts/Footer"
import Hero from "../components/sections/Hero"
import Services from "../components/sections/Services"
import About from "../components/sections/About"
import Professional from "../components/sections/Professional"
import Contact from "../components/sections/Contact"
import SlideButton from "../components/SlideButton"

const HomeContainer = styled.div`
  ${tw`flex flex-col items-center justify-center`}
`

const HeaderHeroContainer = styled.div`
  ${tw`w-full`}
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
            <Contact/>
            <Footer/>
        </HomeContainer>
    )
}

export default Home1;