import React, { useState } from 'react';
import Input from './Input';
import { validateEmail, validateName, validatePhone, validateSubject, validateMessage } from '../utils/FormValidation';
import Button from './buttons/Button';
import ReCAPTCHA from 'react-google-recaptcha';

function ContactForm() {


    const [firstName, setFirstName] = useState('');
    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };
    const [lastName, setLastName] = useState('');
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };
    const [email, setEmail] = useState('');
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const [phoneNumber, setPhoneNumber] = useState('');
    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };
    const [subject, setSubject] = useState('');
    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    };
    const [message, setMessage] = useState('');
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

    const handleCaptchaChange = (value) => {
        // `value` is de reCAPTCHA-reactie
        setIsCaptchaVerified(value ? true : false);
    };

    const [subjectError, setSubjectError] = useState(null);
    const [messageError, setMessageError] = useState(null);
    const [firstNameError, setFirstNameError] = useState(null);
    const [lastNameError, setLastNameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [phoneError, setPhoneError] = useState(null);

    const validateForm = (event) => {
        event.preventDefault();

        setFirstNameError(validateName(firstName));
        setLastNameError(validateName(lastName));
        setEmailError(validateEmail(email));
        setPhoneError(validatePhone(phoneNumber));
        setSubjectError(validateSubject(subject));
        setMessageError(validateMessage(message));

    };

    return (
        <>
            <h2 className="text-center text-4xl">Contact me</h2>
            <form onSubmit={validateForm} className="flex justify-center">
                <div className="lg:w-8/12 sm:w-full">
                    <div className="flex flex-wrap ">
                        <div className="w-full lg:w-6/12 sm:w-full ">
                            <div className="relative">
                                <Input type="text" label="Voornaam" name="firstname" value={firstName} onChange={handleFirstNameChange} />
                                {firstNameError && (
                                    <div className="text-xs text-red-500 absolute top-0 right-0 transform translate-y-1/2">
                                        {firstNameError}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="w-full lg:w-6/12 sm:w-full pl-2">
                            <div className="relative">
                            <Input type="text" label="Achternaam" name="lastname" value={lastName} onChange={handleLastNameChange} />
                            {lastNameError &&
                                <div className="text-xs text-red-500 absolute top-0 right-0 transform translate-y-1/2">
                                    {lastNameError}
                                    </div>}
                                </div>
                        </div>
                    </div>

                    <div className="relative mb-2">
                    <Input label="Email" name="email" value={email} onChange={handleEmailChange} />
                    {emailError && <div className="text-xs text-red-500 absolute top-0 right-0 transform translate-y-1/2">
                        {emailError}
                        </div>}
                    </div>

                    <div className="relative mb-2">
                    <Input type="tel" label="Telefoonnummer" name="phonenumber" value={phoneNumber} onChange={handlePhoneNumberChange} />
                    {phoneError && <div className="text-xs text-red-500 absolute top-0 right-0 transform translate-y-1/2">
                        {phoneError}
                        </div>}
                    </div>

                    <div className="relative mb-2">
                    <Input type="text" label="Onderwerp" name="subject" value={subject} onChange={handleSubjectChange} />
                        {subjectError && <div className="text-xs text-red-500 absolute top-0 right-0 transform translate-y-1/2">
                            {subjectError}
                        </div>}
                    </div>

                    <div className="mb-2">
                        <label htmlFor="message" className="block">Bericht</label>
                        <div className="relative">
                        <textarea id="message" className="w-full p-2 border border-gray-300 rounded" rows="5" value={message} onChange={handleMessageChange} />
                        {messageError && <div className="text-xs text-red-500 absolute top-0 right-0 transform translate-y-1/2 mr-2">
                            {messageError}
                            </div>}
                        </div>
                        <ReCAPTCHA className="mt-1" sitekey="6LdEsjAoAAAAAHt878so59gx_GrYtWfaX3u3i4AQ" onChange={handleCaptchaChange} />
                        {isCaptchaVerified && <Button color="motigreen" text="Verstuur" type="submit" />}
                    </div>
                </div>
                
            </form>
        </>
    );
}

export default ContactForm;