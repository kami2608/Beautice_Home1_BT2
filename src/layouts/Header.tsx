import { Link } from "react-router-dom"
import tw from "twin.macro"
import styled from "@emotion/styled"
import logo from "../assets/Main Logo.svg"


const HeaderContainer = styled.header`
  ${tw`w-4/5 flex p-0 justify-between items-center my-[41px] mx-auto`}
  
  @media (max-width: 600px) {
    ${tw`flex-col items-center gap-[30px]`}
  }

  @media (min-width: 600px) and (max-width: 900px) {
    ${tw`flex-col items-center gap-[30px]`}
  }

  @media (min-width: 900px) and (max-width: 1100px) {
    ${tw`flex-col items-center gap-[30px]`}
  }

  @media (min-width: 1100px) and (max-width: 1300px) {
    ${tw`w-[90%] h-[200px] gap-[5%]`}
  }

  @media (min-width: 1536px) {
    ${tw`w-[60%]`}
  }

`;

const Logo = styled.div`
  ${tw`relative flex justify-center items-center gap-4 top-[-1px] left-[1px]`}

  img { ${tw`w-[264px] h-auto`} }
`

const NavMenu = styled.nav`
  ${tw`flex justify-between items-center`}${tw`relative top-[-6px] left-[66.5px] min-w-[525px]`}
	ul {
		${tw`flex w-full justify-around font-medium list-none`}
		li a {
			${tw`relative leading-4 tracking-[0.12rem] text-[#8B8B8B] text-[1rem] no-underline`}
			&.active { ${tw`text-[#414880]`} }
		}
		li a.service { ${tw`-left-0.5`} }
	}

  @media (max-width: 600px) {
    ul {
      ${tw`flex-col items-center gap-[20px]`}
    }
    
  }

`
const ContactButton = styled(Link)`
  ${tw`relative top-[-6px] left-[-6px] font-semibold cursor-pointer rounded-full tracking-[0.12rem] w-[158px] h-[52px] text-white bg-[#FF64AE] text-[1rem] flex items-center justify-center`}
`


const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Logo>
                <img src={logo} alt="Logo" />
            </Logo>
            <NavMenu>
                <ul>
                    <li><Link to="#" className="home active">Home</Link>+</li>
                    <li><Link to="#" className="about">About</Link></li>
                    <li><Link to="#" className="service">Service</Link></li>
                    <li><Link to="#" className="gallery">Gallery</Link></li>
                    <li><Link to="#" className="blog">Blog</Link></li>
                </ul>
            </NavMenu>
            <ContactButton to="#">Contact</ContactButton>
        </HeaderContainer>
    )
}

export default Header;






