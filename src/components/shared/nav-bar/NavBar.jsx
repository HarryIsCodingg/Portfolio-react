import './NavBar.css';
import SocialLinks from "./social-links/SocialLinks";
import NavLinkWrapper from "./nav-link-wrapper/NavLinkWrapper";
import Menu from "./menu/Menu";

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <div className='logo'></div>
            <div className='nav-right-column'>
                <div className='navlink-wrapper'><NavLinkWrapper /></div>
                <SocialLinks />
                <Menu />
            </div>
        </div>
    )
}

export default NavBar;
