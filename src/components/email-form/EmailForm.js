import {useEffect, useState} from "react";
import './EmailForm.css';
import emailjs from "emailjs-com";

const EmailForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [isEmailSent, setIsEmailSent] = useState(false);
    const [isNameMissing, setIsNameMissing] = useState(false);
    const [isEmailMissing, setIsEmailMissing] = useState(false);
    const [isCompanyMissing, setIsCompanyMissing] = useState(false);

    useEffect(() => {
        if(isEmailSent){emptyFields();}
    },[isEmailSent]);

    const handleName = (event) => {
        setName(event.target.value);
        setIsNameMissing(false);
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
        setIsEmailMissing(false);
    }
    const handleCompany = (event) => {
        setCompany(event.target.value);
        setIsCompanyMissing(false);
    }
    const handleAdditionalInfo = (event) => {
        setAdditionalInfo(event.target.value);
    }

    const emptyFields = () => {
        setName('');
        setEmail('');
        setCompany('');
        setAdditionalInfo('');
    }

    const sendEmail = (e) => {
        e.preventDefault();

        if(!name || !email || !company){
            if(!name){
                setIsNameMissing(true);
            }
            if(!email){
                setIsEmailMissing(true);
            }
            if(!company){
                setIsCompanyMissing(true);
            }
        }else{

            emailjs
                .sendForm("gmail", "portfolio_template", e.target, process.env.REACT_APP_EMAILJS_KEY,)
                .then(
                    () => {
                        setIsEmailSent(true);
                        setInterval(() => {
                            setIsEmailSent(false);
                        },2000);
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        }
    }

    return (
        <form className='email-form' id='email-form' onSubmit={sendEmail}>
            <div>
                <span className='email-label'>Name</span>
                <input onChange={handleName} className='input' name='full_name' value={name}/>
                {isNameMissing && <sub className='error'>Name required</sub>}
            </div>
            <div>
                <span className='email-label'>Email</span>
                <input onChange={handleEmail} className='input' name='email' type='email' value={email}/>
                {isEmailMissing && <sub className='error'>Email required</sub>}
            </div>
            <div>
                <span className='email-label'>Company</span>
                <input onChange={handleCompany} className='input' name='company' value={company}/>
                {isCompanyMissing && <sub className='error'>Company required</sub>}
            </div>
            <div>
                <span>Additional Information</span>
                <input onChange={handleAdditionalInfo} className='input' name='message' value={additionalInfo}/>
            </div>
            <div>
                <button className={isEmailSent ? 'success' : 'submit-button'} type='submit'>{isEmailSent ? 'Email Sent Successfully' : 'Send'}</button>
            </div>
        </form>
    )
}

export default EmailForm;
