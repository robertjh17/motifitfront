import React, { useState } from 'react';
import Input from './Input';
import { validateEmail, validateName, validatePhone, validateSubject, validateMessage } from '../utils/FormValidation';
import ReCAPTCHA from 'react-google-recaptcha';

function ContactForm() {
    function onChange(value) {
        console.log("Captcha value:", value);
    }

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
      <h2 className="text-center">Contact me</h2>
      <form onSubmit={validateForm}>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-sm-12">
            <div className="row">
              <div className="col-lg-6 col-sm-12 ">
                <Input type="text" label="Voornaam" name="firstname" value={firstName} onChange={handleFirstNameChange} />
                {firstNameError && <div>{firstNameError}</div>}
                          </div>

              <div className="col-lg-6 col-sm-12">
                <Input type="text" label="Achternaam" name="lastname" value={lastName} onChange={handleLastNameChange} />
                {lastNameError && <div>{lastNameError}</div>}
              </div>
                      </div>

               <Input label="Email" name="email" value={email} onChange={handleEmailChange} />
                      {emailError && <div>{emailError}</div>}

            <Input type="tel" label="Telefoonnummer" name="phonenumber" value={phoneNumber} onChange={handlePhoneNumberChange} />
                      {phoneError && <div>{phoneError}</div>}

                      <Input type="text" label="Onderwerp" name="subject" value={subject} onChange={handleSubjectChange} />
                       {subjectError && <div>{subjectError}</div>}
            <div className="form-group">
              <label htmlFor="message">Bericht</label>
               <textarea id="message" className="form-control input-style" rows="5" value={message} onChange={handleMessageChange} />
                {messageError && <div>{messageError}</div>}
                      </div>
                      <ReCAPTCHA sitekey="6Le2zSgoAAAAANEAy-_WXA1DGZhal-oHOtswWpCG" onChange={ onChange} />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Verstuur</button>
      </form>
    </>
  );
}

export default ContactForm;