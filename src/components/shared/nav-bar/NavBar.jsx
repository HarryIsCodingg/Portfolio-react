import './NavBar.css';
import SocialLinks from "./social-links/SocialLinks";
import NavLinkWrapper from "./nav-link-wrapper/NavLinkWrapper";
import Menu from "./menu/Menu";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <NavLink to='/' className='logo'></NavLink>
            <div className='nav-right-column'>
                <div className='navlink-wrapper'><NavLinkWrapper /></div>
                <div className='social-link-container'>
                    <SocialLinks />
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default NavBar;
