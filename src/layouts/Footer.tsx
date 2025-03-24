import { Link } from 'react-router-dom';
import footerLogo from '../assets/Footer Logo.png';
import facebookIcon from '../assets/facebook-f.png';
import twitterIcon from '../assets/twitter2.png';   
import linkedinIcon from '../assets/linkedin-in.png';
import youtubeIcon from '../assets/youtube.png';
import instagramIcon from '../assets/instagram2.png';
import "./footer.css";

const Footer: React.FC = () => {
    return (
        <footer className="footer relative -mt-[53px] px-[10%] h-[720px]" id="footer">
            <div className="footer-content flex justify-between items-start">
                <div className="footer-logo flex-1 text-left ml-[10px] mt-[256px] min-w-[540px]">
                    <img src={footerLogo} alt="Beautice Logo" className="footer-logo-img w-[260px] mb-[33px]" />
                    <p className="ft-desc ml-8 mb-5">
                        <b>Beautice</b> is a Beauty Clinic WordPress Theme.
                    </p>
                    <p className="ft-adresse ml-8 mb-[2px]">
                        <i>Baker Steet 101, NY, United States.</i>
                    </p>
                    <div className="footer-contact-info flex items-center gap-[1.1rem] ml-[2.7rem]">
                        <p className="ft-phone -ml-3">
                            <i>+521 569 8966.</i>
                        </p>
                        <p className="ft-mail ml-6">
                            <a className="underline hover:no-underline" href="mailto:mail@company.com">
                                <i>mail@company.com.</i>
                            </a>
                        </p>
                    </div>
                </div>

                <div className="links-container relative inline-flex top-[-6px] right-[10px] w-[694px]">
                    <div className="footer-pages relative text-left flex-1">
                        <h3 className="footer-title font-semibold text-white">Pages</h3>
                        <ul className="footer-links">
                            <li className="relative pl-[1.1rem] pb-[0.7rem]"><Link to="#" className="no-underline ">Home</Link></li>
                            <li className="relative pl-[1.1rem] pb-[0.7rem]"><Link to="#" className="no-underline ">About</Link></li>
                            <li className="relative pl-[1.1rem] pb-[0.7rem]"><Link to="#" className="no-underline ">Services</Link></li>
                            <li className="relative pl-[1.1rem] pb-[0.7rem]"><Link to="#" className="no-underline ">Gallery</Link></li>
                            <li className="relative pl-[1.1rem] pb-[0.7rem]"><Link to="#" className="no-underline ">Team</Link></li>
                        </ul>
                    </div>

                    <div className="footer-info relative text-left flex-1">
                        <h3 className="footer-title font-semibold text-white">Informations</h3>
                        <ul className="footer-links">
                            <li className="relative pl-[1.1rem] pb-[0.7rem]">
                                <Link to="#" className="no-underline ">
                                    Terms & conditions
                                </Link>
                            </li>
                            <li className="relative pl-[1.1rem] pb-[0.7rem]">
                                <Link to="#" className="no-underline ">
                                    Privacy policy
                                </Link>
                            </li>
                            <li className="relative pl-[1.1rem] pb-[0.7rem]">
                                <Link to="#" className="no-underline ">
                                    Blog
                                </Link>
                            </li>
                            <li className="relative pl-[1.1rem] pb-[0.7rem]">
                                <Link to="#" className="no-underline ">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom relative flex items-center justify-between top-[152px] left-[4px]">
                <div className="footer-social flex gap-[2.65rem]">
                    <img className="w-[28px] h-[28px] cursor-pointer" src={facebookIcon} alt="Facebook" />
                    <img className="w-[28px] h-[28px] cursor-pointer" src={twitterIcon} alt="Twitter" />
                    <img className="w-[28px] h-[28px] cursor-pointer" src={linkedinIcon} alt="LinkedIn" />
                    <img className="w-[28px] h-[28px] cursor-pointer" src={youtubeIcon} alt="YouTube" />
                    <img className="w-[28px] h-[28px] cursor-pointer" src={instagramIcon} alt="Instagram" />
                </div>
                <p className="footer-copyright relative right-[0.5rem] tracking-[0.135em]">
                    &copy; AltDesain Studio 2021 ─ All right reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;