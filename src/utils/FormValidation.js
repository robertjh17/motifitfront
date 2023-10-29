import * as Yup from 'yup';

export const registrationSchema = Yup.object().shape({
    firstName: Yup.string().required('Voornaam is verplicht'),
    lastName: Yup.string().required('Achternaam is verplicht'),
    email: Yup.string().email('Ongeldig e-mailadres').required('E-mail is verplicht'),
    password: Yup.string().min(6, 'Wachtwoord moet minimaal 6 tekens bevatten').required('Wachtwoord is verplicht'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Wachtwoorden moeten overeenkomen')
        .required('Bevestig wachtwoord is verplicht'),
    userName: Yup.string().required('Gebruikersnaam is verplicht'),
    birthDate: Yup.date()
        .required('Geboortedatum is verplicht')
        .test('is-minimum-age', 'Je moet minimaal 16 jaar oud zijn', function (value) {
            if (!value) {
                return true;
            }
            const today = new Date();
            const birthDate = new Date(value);
            const age = today.getFullYear() - birthDate.getFullYear();

            return age >= 16;
        }),
});

export const loginSchema = Yup.object().shape({
    userName: Yup.string().required('Gebruikersnaam is verplicht'),
    password: Yup.string().required('Wachtwoord is verplicht'),
});

const nameSchema = Yup.string().required('Naam is verplicht!');
const emailSchema = Yup.string().email('Ongeldig e-mailadres!').required('E-mailadres is verplicht!');
const phoneSchema = Yup.string().matches(/^\d+$/, 'Ongeldig telefoonnummer!').required('Telefoonnummer is verplicht!');
const messageSchema = Yup.string().required('Bericht is verplicht!');
const subjectSchema = Yup.string().required('Onderwerp is verplicht!');

export const validateName = (name) => {
    try {
        nameSchema.validateSync(name);
        return '';
    } catch (error) {
        return error.message;
    }
}
export const validateEmail = (email) => {
    try {
        emailSchema.validateSync(email);
        return '';
    } catch (error) {
        return error.message;
    }
}

export const validatePhone = (phone) => {
    try {
        phoneSchema.validateSync(phone);
        return '';
    } catch (error) {
        return error.message;
    }
}

export const validateMessage = (message) => {
    try {
        messageSchema.validateSync(message);
        return '';
    } catch (error) {
        return error.message;
    }
}

export const validateSubject = (subject) => {
    try {
        subjectSchema.validateSync(subject);
        return '';
    } catch (error) {
        return error.message;
    }
}