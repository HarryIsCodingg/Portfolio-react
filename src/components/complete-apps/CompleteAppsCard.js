import './CompleteAppsCard.css';
import {NavLink} from "react-router-dom";
import {Icon} from "@iconify/react";

const CompleteAppsCard = (props) => {
    return (
        <div className='complete-apps-card'>
            <img src={props.image} alt='image' className='app-screenshot'/>
            <div className='stack-used'>
                {props.stackList.map((item, index) =>
                    <span key={index}>{item}</span>
                )}
            </div>
            <div className='app-details'>
                <div className='app-name'>{props.name}</div>
                <div className='app-description'>{props.description}</div>
                <NavLink to={props.navigateTo} className='card-button link' target='_blank'>Live
                    <Icon icon='streamline:interface-arrows-horizonal-scroll-point-move-scroll-horizonal' fontSize={24}/>
                </NavLink>
            </div>
        </div>
    )
}

export default CompleteAppsCard;


