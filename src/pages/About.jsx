import React from 'react';
import { useState } from 'react';
import EducationList from '../components/EducationList';
import ExperienceList from '../components/ExperienceList';
import ProfileCard from '../components/ProfileCard';
import SkillsCard from '../components/SkillsCard';
import ContactForm from '../components/ContactForm';
import 'bootstrap/dist/css/bootstrap.css';

function About() {
    const [showContactForm, setShowContactForm] = useState(false);
    function handleContactForm() {
        setShowContactForm(!showContactForm);
    }

    return (
        <div className="container-fluid mx-auto bg-gray-100 pt-3">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
                {/* Kolom 1 (Profiel en vaardigheden) */}
                <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-4">
                    <ProfileCard handleContactForm={handleContactForm} />
                    <SkillsCard />
                </div>

                {/* Kolom 2 (Contactformulier, Onderwijs en Ervaring) */}
                <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-8">
                    <div className="bg-white p-4 shadow-md rounded mb-4">
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
    )
}
export default About;