import './Startup.css';
import {NavLink} from "react-router-dom";
import startupImage from '../../assets/images/startup.svg';
import {Icon} from "@iconify/react";

const Startup = () => {

    return (
        <div className='startup-wrapper'>
            <div className='font-size-large margin-top'><span className='primary-color'>/</span>startup</div>
            <div className='margin-top'>
                <span className='primary-color'>Founded, developed</span> minimal viable product for <NavLink to='https://www.homeeatz.com/' className='homeeatz-link'>HomeEatz</NavLink>, a centralized platform which connects
                home-based chefs with potential customers.
            </div>
            <NavLink to='https://www.homeeatz.com/' className='link nav-link'>
                <img src={startupImage} alt='startup' className='startup-image margin-top'/>
            </NavLink>
            <div className='explore-button-wrapper'>
                <NavLink to='https://www.homeeatz.com/' className='card-button startup-button link' target='_blank'>Explore HomeEatz
                    <Icon icon='streamline:interface-arrows-horizonal-scroll-point-move-scroll-horizonal' fontSize={24}/>
                </NavLink>
            </div>
        </div>
    )
}

export default Startup;
