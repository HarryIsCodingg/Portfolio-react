import './SocialLinks.css';
import {NavLink} from "react-router-dom";
import { Icon }  from '@iconify/react';

const SocialLinks = () => {
    return (
        <div className='social-link-container'>
            <NavLink to='https://linkedin.com/in/harinder-partap-singh-007a82198' target="_blank">
                <Icon  icon='line-md:linkedin' fontSize={24} className='social-link'/>
            </NavLink>
            <NavLink to='https://github.com/HarryIsCodingg' target="_blank">
                <Icon  icon='mdi:github' fontSize={24} color='white' className='social-link'/>
            </NavLink>
        </div>
    )
}

export default SocialLinks;
