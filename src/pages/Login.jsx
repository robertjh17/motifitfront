import { loginSchema } from '../utils/FormValidation';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { useState } from 'react';

const Login = () => {
    const [error, setError] = useState('');

    const handleSubmit = async (values) => {
        try {
            const loginResponse = await axios.post('https://localhost:7150/api/Auth/login', {
                userName: values.userName,
                password: values.password,
            });

            if (loginResponse.status === 200) {
                const token = loginResponse.data.token;
                localStorage.setItem('accessToken', token);
                window.location.href = '/';
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setError('De combinatie van gebruikersnaam en wachtwoord klopt niet');
            } else {
                setError('Er is een fout opgetreden bij het inloggen.');
            }
        }
    };

    return (
        <div className="w-full max-w-xs mx-auto">
            {error && <div className="bg-red-100 text-red-500 py-2 px-4 mb-4 rounded">{error}</div>}
            <Formik
                initialValues={{
                    userName: '',
                    password: '',
                }}
                validationSchema={loginSchema}
                onSubmit={handleSubmit}
            >
                <Form id="loginForm" className="bg-white rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-2">
                        <Field
                            type="text"
                            id="userName"
                            name="userName"
                            placeholder="Gebruikersnaam"
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <ErrorMessage name="userName" component="p" className="text-red-500 text-xs italic" />
                    </div>
                    <div className="mb-2">
                        <Field
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Uw wachtwoord"
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <ErrorMessage name="password" component="p" className="text-red-500 text-xs italic" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
                        >
                            Aanmelden
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default Login;