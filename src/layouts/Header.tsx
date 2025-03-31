import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import tw from "twin.macro"
import styled from "@emotion/styled"
import logo from "../assets/Main Logo.svg"

const HeaderContainer = styled.header`
  ${tw`w-4/5 flex p-0 justify-between items-center my-[41px] mx-auto`}

  	@media (max-width: 900px) { ${tw`w-[90%] my-[40px]`} }
	  @media (max-width: 768px) { ${tw`w-4/5`} }
`;

const Logo = styled.div`
  ${tw`relative flex justify-center items-center gap-4 top-[-1px] left-[1px]`}
  img { ${tw`w-[264px] h-auto`} }
`;

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

	@media (max-width: 1720px) {
		${tw`left-[30px] min-w-[682px]`}
		ul li a { ${tw`tracking-[0.12rem] text-[18px]`} }
	}
	@media (max-width: 1610px) {
		${tw`left-[26px] min-w-[602px]`}
		ul li a { ${tw`tracking-[0.11rem]`} }
	}
	@media (max-width: 1500px) {
		${tw`-top-[5px] left-[67px] min-w-[525px]`}
		ul li a { ${tw`text-[1rem] tracking-[0.1rem]`} }
		ul li a.about { ${tw`-top-[1px] left-0`} }
		ul li a.service { ${tw`left-0`} }
		ul li a.gallery { ${tw`-left-0.5`} }
	}

	@media (max-width: 1370px) {
		${tw`top-0 left-[60px] min-w-[500px]`}
	}
	@media (max-width: 1320px) {
		${tw`top-0 left-[40px] min-w-[500px]`}
	}
	@media (max-width: 1190px) {
		${tw`top-0 left-[10px] min-w-[360px]`}
		ul li a { ${tw`text-[14px] tracking-[0.06rem]`} }
	}
	@media (max-width: 940px) {
		${tw`top-0 left-0 min-w-[340px]`}
		ul li a { ${tw`text-[12px] tracking-[0.04rem]`} }
	}
	@media (max-width: 768px) { ${tw`hidden`} }


`;

const ContactButton = styled(Link)`
  ${tw`relative font-semibold cursor-pointer rounded-full tracking-[0.12rem] w-[158px] h-[52px] text-white bg-[#FF64AE] text-[1rem] flex items-center justify-center`}

  @media (max-width: 1860px) { ${tw`left-[40px]`} }
	@media (max-width: 1770px) { ${tw`w-[180px]`} }
	@media (max-width: 1720px) { ${tw`left-0`} }
	@media (max-width: 1650px) { ${tw`left-[10px]`} }
	@media (max-width: 1500px) {
		${tw`-top-[5px] -left-[5px] w-[160px] h-[52px] text-[1rem]`}
	}
	@media (max-width: 1270px) { ${tw`left-[10px]`} }
	@media (max-width: 1200px) { ${tw`w-[140px]`} }
	@media (max-width: 1180px) {
		${tw`static top-0 w-[160px] h-[50px] text-[14px] tracking-[0.1rem]`}
	}
	@media (max-width: 960px) { ${tw`w-[140px]`} }
	@media (max-width: 940px) {
		${tw`w-[120px] h-[40px] text-[12px] tracking-[0.06rem]`}
	}
	@media (max-width: 769px) { ${tw`hidden`} }
`;

const HomePlus = styled.span`
	${tw`font-light text-[18px]`}
	@media (max-width: 1440px) { ${tw`text-[12px]`} }
	@media (max-width: 768px) { ${tw`text-[26px]`} }
`;

const HamburgerButton = styled.button`
  ${tw`w-12 h-12 flex flex-col justify-between items-center p-3 rounded-md bg-gray-500 cursor-pointer`}

  span {
    ${tw`w-8 h-1 bg-white rounded-[3px]`}
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const Sidenav = styled.div<{ isOpen: boolean }>`
  ${tw`fixed top-0 left-0 h-screen bg-white shadow-lg p-6 flex flex-col items-start gap-6 transition-all duration-300`}
  width: 300px;
  z-index: 50;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};
  
`;

const SidenavContent = styled.div`
  ${tw`flex flex-col items-center gap-4`}
	.contact-button {
		${tw`bg-[#FF64AE] hover:bg-[#E05497] w-[210px] h-[60px] my-5 mx-auto flex items-center justify-center rounded-full text-white mb-[40px]`}
	}
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  ${tw`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-300`}
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: 40;
`;


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  
    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>

      <HamburgerButton onClick={toggleMenu} aria-label="Toggle Menu">
          <span />
          <span />
          <span />
      </HamburgerButton>

      <NavMenu>
        <ul>
          <li><Link to="#" className="home active">Home<HomePlus> + </HomePlus></Link></li>
          <li><Link to="#" className="about">About</Link></li>
          <li><Link to="#" className="service">Service</Link></li>
          <li><Link to="#" className="gallery">Gallery</Link></li>
          <li><Link to="#" className="blog">Blog</Link></li>
        </ul>
      </NavMenu>

      <ContactButton to="#">Contact</ContactButton>

      <Overlay isOpen={isMenuOpen} onClick={closeMenu} />

      <Sidenav isOpen={isMenuOpen}>
        <SidenavContent>
        <Link to="#" className="home active" onClick={closeMenu}>Home</Link>
          <Link to="#" className="about" onClick={closeMenu}>About</Link>
          <Link to="#" className="service" onClick={closeMenu}>Service</Link>
          <Link to="#" className="gallery" onClick={closeMenu}>Gallery</Link>
          <Link to="#" className="blog" onClick={closeMenu}>Blog</Link>
          <Link to="#" className="contact-button" onClick={closeMenu}>Contact</Link>
        </SidenavContent>  
      </Sidenav>
    </HeaderContainer>
  );
}

export default Header;
