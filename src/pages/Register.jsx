import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { registrationSchema } from '../utils/FormValidation';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { subYears } from 'date-fns';

function Register() {
    const [registrationError, setRegistrationError] = useState(null);

    const handleSubmit = async (values) => {
        try {
            await registrationSchema.validate(values, { abortEarly: false });

            const response = await axios.post('https://localhost:7150/api/Auth/register', values);

            if (response.status === 200) {
                const loginResponse = await axios.post('https://localhost:7150/api/Auth/login', {
                    userName: values.userName,
                    password: values.password,
                });

                if (loginResponse.status === 200) {
                    const token = loginResponse.data.token;
                    localStorage.setItem('accessToken', token);
                    window.location.href = '/';
                }
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setRegistrationError('De gebruiker bestaat al.');
            } else {
                console.error(error);
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    userName: '',
                    password: '',
                    confirmPassword: '',
                    birthDate: '',
                    gender: 'anders',
                }}
                validationSchema={registrationSchema}
                onSubmit={handleSubmit}
            >
                {({ values, setFieldValue }) => (
                    <Form className="bg-white p-8 w-96">
                        {registrationError && <div className="text-red-500 text-center mb-4">{registrationError}</div>}
                        <div className="mb-2">
                            <Field
                                type="text"
                                name="firstName"
                                placeholder="Voornaam"
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                            />
                            <ErrorMessage name="firstName" component="div" className="text-red-500" />
                        </div>
                        <div className="mb-2">
                            <Field
                                type="text"
                                name="lastName"
                                placeholder="Achternaam"
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                            />
                            <ErrorMessage name="lastName" component="div" className="text-red-500" />
                        </div>
                        <div className="mb-2">
                            <Field
                                type="text"
                                name="email"
                                placeholder="E-mail"
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500" />
                        </div>
                        <div className="mb-2">
                            <Field
                                type="text"
                                name="userName"
                                placeholder="Gebruikersnaam"
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                            />
                            <ErrorMessage name="userName" component="div" className="text-red-500" />
                        </div>
                        <div className="mb-2">
                            <Field
                                type="password"
                                name="password"
                                placeholder="Wachtwoord"
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                            />
                            <ErrorMessage name="password" component="div" className="text-red-500" />
                        </div>
                        <div className="mb-2">
                            <Field
                                type="password"
                                name="confirmPassword"
                                placeholder="Bevestig wachtwoord"
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                            />
                            <ErrorMessage name="confirmPassword" component="div" className="text-red-500" />
                        </div>
                        <div className="mb-2">
                            <DatePicker
                                selected={values.birthDate}
                                onChange={(date) => setFieldValue('birthDate', date)}
                                name="birthDate"
                                id="birthDate"
                                placeholderText="Selecteer een datum"
                                dateFormat="dd/MM/yyyy"
                                showYearDropdown
                                scrollableYearDropdown
                                yearDropdownItemNumber={100}
                                maxDate={subYears(new Date(), 0)}
                                minDate={subYears(new Date(), 100)}
                                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                            />
                            <ErrorMessage name="birthDate" component="div" className="text-red-500" />
                        </div>
                        <div className="mb-2">
                            <Field as="select" name="gender" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2">
                                <option value="anders">Selecteer een geslacht</option>
                                <option value="male">Man</option>
                                <option value="female">Vrouw</option>
                                <option value="other">Anders</option>
                            </Field>
                            <ErrorMessage name="gender" component="div" className="text-red-500" />
                        </div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Registreren
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Register;