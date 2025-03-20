import { Link } from "react-router-dom"
import tw from "twin.macro"
import styled from "@emotion/styled"
import logo from "../assets/Main Logo.svg"


const HeaderContainer = styled.header`
  ${tw`w-4/5 flex p-0 justify-between items-center my-[41px] mx-auto`}
`

const Logo = styled.div`
  ${tw`relative flex justify-center items-center gap-4 top-[0px] left-[-12px]`}

  img { ${tw`w-[290px] h-[71px]`} }
`

const NavMenu = styled.nav`
  ${tw`flex justify-between items-center gap-[20px]`}${tw`relative top-[-4px] left-[69.5px] min-w-[500px]`}
	ul {
		${tw`flex w-full justify-around font-semibold list-none`}
		li a {
			${tw`relative leading-4 tracking-[0.12rem] text-[#8B8B8B] text-[1rem] no-underline`}
			&:hover { ${tw`text-[#FF64AE]`} }
			&.active { ${tw`text-[#414880]`} }
		}
		li a.service { ${tw`-left-0.5`} }
	}
`
const ContactButton = styled(Link)`
  ${tw`relative top-[10px] left-[60px] font-semibold cursor-pointer rounded-full tracking-[0.12rem] w-[210px] h-[68px] text-white bg-[#FF64AE] text-[1.3rem] flex items-center justify-center`}
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






