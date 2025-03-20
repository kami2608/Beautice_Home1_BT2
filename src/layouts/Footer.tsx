import { Link } from 'react-router-dom';
import footerLogo from '../assets/Footer Logo.png';
import facebookIcon from '../assets/facebook-f.png';
import twitterIcon from '../assets/twitter2.png';   
import linkedinIcon from '../assets/linkedin-in.png';
import youtubeIcon from '../assets/youtube.png';
import instagramIcon from '../assets/instagram2.png';

const Footer: React.FC = () => {
    return (
        <footer className="footer" id="footer">
            <div className="footer-content flex justify-between items-start">
                <div className="footer-logo text-left">
                    <img src={footerLogo} alt="Beautice Logo" className="footer-logo-img"/>
                    <p className="footer-desc">
                        <b>Beautice</b> is a Beauty Clinic WordPress Theme.
                    </p>
                    <p className="footer-address">
                        <i>Baker Steet 101, NY, United States.</i>
                    </p>
                    <div className="footer-contact-info flex items-center gap-5">
                        <p className="footer-phone">
                            <i>+521 569 8966.</i>
                        </p>
                        <p className="footer-email">
                            <a className="underline hover:no-underline" href="mailto:mail@company.com">
                                <i>mail@company.com</i>
                            </a>
                        </p>
                    </div>
                </div>
                <div className="link-container relative inline-flex">
                    <div className="footer-pages relative text-left flex-1">
                        <h3 className="footer-title font-semibold">Pages</h3>
                        <ul className="footer-links">
                            <li className="relative"><Link to="#" className="no-underline hover:underline">Home</Link></li>
                            <li className="relative"><Link to="#" className="no-underline hover:underline">About</Link></li>
                            <li className="relative"><Link to="#" className="no-underline hover:underline">Services</Link></li>
                            <li className="relative"><Link to="#" className="no-underline hover:underline">Gallery</Link></li>
                            <li className="relative"><Link to="#" className="no-underline hover:underline">Team</Link></li>
                        </ul>
                    </div>
                    <div className="footer-info relative text-left flex-1">
                    <h3 className="footer-title font-semibold">Informations</h3>
                        <ul className="footer-links">
                            <li className="relative"><Link to="#" className="no-underline hover:underline">Terms & Conditions</Link></li>
                            <li className="relative"><Link to="#" className="no-underline hover:underline">Privacy policy</Link></li>
                            <li className="relative"><Link to="#" className="no-underline hover:underline">Blog</Link></li>
                            <li className="relative"><Link to="#" className="no-underline hover:underline">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom relative flex items-center justify-between">
                <div className="footer-social flex gap-5">
                <img className="w-[38px] h-[38px] cursor-pointer" src={facebookIcon} alt="Facebook" />
					<img className="w-[38px] h-[38px] cursor-pointer" src={twitterIcon} alt="Twitter" />
					<img className="w-[38px] h-[38px] cursor-pointer" src={linkedinIcon} alt="LinkedIn" />
					<img className="w-[38px] h-[38px] cursor-pointer" src={youtubeIcon} alt="YouTube" />
					<img className="w-[38px] h-[38px] cursor-pointer" src={instagramIcon} alt="Instagram" />
                </div>
                <p className="footer-copyright relative right-5 bottom-1 tracking-widest">
					&copy; AltDesain Studio 2021 ─ All right reserved.
				</p>
            </div>
        </footer>
    );
}

export default Footer;