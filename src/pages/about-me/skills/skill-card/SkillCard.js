import './SkillCard.css';

const SkillCard = (props) => {
    return (
        <div className='skill-card'>
            <div className='skillset-description'>{props.skillsetDescription}</div>
            <div className='skill-list-wrapper'>
                {props.skillsList.map((skill, index) =>
                    <span key={index} className='skill'>{skill}</span>)}
            </div>
        </div>
    )
}

export default SkillCard;
