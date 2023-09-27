import SocialLinks from "../nav-bar/social-links/SocialLinks";
import './Footer.css';
import {Icon} from "@iconify/react";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-details'>
                <span>Harinder Partap Singh</span>
                <div className='footer-social'><SocialLinks /></div>
            </div>
            <div className='copyright'>
                <Icon icon='mingcute:copyright-line' fontSize={24}/>{new Date().getFullYear()} Copyright. All Rights Reserved
            </div>
        </div>
    )
}

export default Footer;
