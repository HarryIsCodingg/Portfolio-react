import './AboutMe.css';
import aboutImage from '../../assets/images/about.png';

const AboutMe = () => {
    return (
        <div className='about-me-wrapper'>
            <div className='font-size-large'><span className='primary-color'>/</span>about me</div>
            <div style={{marginTop: '14px', fontSize: '16px'}}>Who am I?</div>
            <div className='about-me-description-wrapper'>
                <div className='description-text grey-color'>
                    <div>
                        Hello, i’m <span className='white-text'>Harinder Partap Singh</span>!
                    </div>
                    I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
                    <div>Transforming my creativity and knowledge into a websites has been my passion for over a year.
                        I always strive to learn about the newest technologies and frameworks.
                    </div>
                </div>
                <img src={aboutImage} alt='no about image' className='about-image'/>
            </div>
        </div>
    )
}

export default AboutMe;
