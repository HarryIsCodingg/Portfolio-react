import './ContactPage.css';
import EmailForm from "../../components/email-form/EmailForm";
import {Icon} from "@iconify/react";
import designImage from '../../assets/images/contact-design.png';

const ContactPage = () => {
    return (
        <div className='contact-page'>
            <div className='font-size-large margin-top'><span className='primary-color'>/</span>contacts</div>
            <div className='contact-wrapper'>
                <EmailForm />
                <div>
                    <img src={designImage} className='contact-image' alt='contact'/>
                    <div className='contact-me-section'>
                        <span>Message me at</span>
                        <div className='contact-list'>
                            <div className='contact-item grey-color'>
                                <Icon icon='line-md:email' fontSize={24} />
                                <span>Harrythind41@gmail.com</span>
                            </div>
                            <div className='contact-item grey-color'>
                                <Icon icon='line-md:discord' fontSize={24} />
                                <span>harry5011</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactPage;
