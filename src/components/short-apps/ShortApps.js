import {NavLink} from "react-router-dom";
import {Icon} from "@iconify/react";
import './ShortApps.css';

const ShortApps = (props) => {
    return (
        <div className='complete-apps-card'>
            <div className='short-app-stack'>
                {props.language}
            </div>
            <div className='app-details'>
                <div className='app-name'>{props.name}</div>
                <div className='app-description'>{props.description}</div>
                <NavLink to={props.navigateTo} className='card-button link' target='_blank'>Github
                    <Icon icon='streamline:interface-arrows-horizonal-scroll-point-move-scroll-horizonal' fontSize={24}/>
                </NavLink>
            </div>
        </div>
    )
}

export default ShortApps;
