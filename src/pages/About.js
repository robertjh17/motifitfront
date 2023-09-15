import React from 'react';
import { useState } from 'react';
import EducationList from '../components/EducationList';
import ExperienceList from '../components/ExperienceList';
import ProfileCard from '../components/ProfileCard';
import SkillsCard from '../components/SkillsCard';
import ContactForm from '../components/ContactForm';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/CustomBootstrap.css';
import '../styles/CustomStyles.css'

function About() {
    const [showContactForm, setShowContactForm] = useState(false);
    function handleContactForm() {
        setShowContactForm(!showContactForm);
    }

    return (
        <div className="container-fluid bg-light">
       
            <div className="row mt-2">
                <div className="col-lg-4 col-sm-12">
                    <ProfileCard handleContactForm={handleContactForm} />
                     <SkillsCard/>
                </div>
                <div className="col-lg-8 col-sm12">
                    <div className="card mb-4 shadow">
                        <div className="card-body">
                            {showContactForm ? (
                                <ContactForm />
                            ) : (
                                <>
                                    <EducationList />
                                    <ExperienceList />
                                </>
 )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
)
}
export default About;