import './SocialLinks.css';
import {NavLink} from "react-router-dom";
import { Icon }  from '@iconify/react';

const SocialLinks = () => {
    return (
        <>
            <NavLink to='https://linkedin.com/in/harinder-partap-singh-007a82198' target="_blank">
                <Icon  icon='line-md:linkedin' fontSize={28} className='social-link'/>
            </NavLink>
            <NavLink to='https://github.com/HarryIsCodingg' target="_blank">
                <Icon  icon='line-md:github-loop' fontSize={28} color='white' className='social-link'/>
            </NavLink>
        </>
    )
}

export default SocialLinks;
