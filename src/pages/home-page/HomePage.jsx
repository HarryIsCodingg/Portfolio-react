import './HomePage.css';
import LandingImage from '../../assets/images/landingimage.png';

const HomePage = () => {
    return (
        <div className='home-page'>
            <div className='landing-page-wrapper'>
                <div className='short-description'>
                    <h3 className='short-description-text'>
                        Harinder Partap Singh is a <span className='primary-color'>software developer</span>
                    </h3>
                    <span className='short-description-sub'>
                        He crafts responsive websites where technologies meet creativity
                    </span>
                    <div className='contact-button'>Contact me !</div>
                </div>
                <div className='right-column'>
                    <img src={LandingImage} alt="landing image" className="responsive-image" />
                    <div className='working-row'><span className='working-icon'></span>
                        <span className='grey-color'>Currently working on </span>Personal projects
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomePage;
