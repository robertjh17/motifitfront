import * as Yup from 'yup';

const nameSchema = Yup.string().required('Naam is verplicht!');
const emailSchema = Yup.string().email('Ongeldig e-mailadres!').required('E-mailadres is verplicht!');
const phoneSchema = Yup.string().matches(/^\d+$/, 'Ongeldig telefoonnummer!').required('Telefoonnummer is verplicht!');
const messageSchema = Yup.string().required('Bericht is verplicht!');
const subjectSchema = Yup.string().required('Onderwerp is verplicht!');

export const validateName = (name) => {
    try {
        nameSchema.validateSync(name);
        return '';
    } catch(error) {
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
    } catch(error) {
        return error.message;
    }
}

export const validateMessage = (message) => {
try {
        messageSchema.validateSync(message);
        return '';
    } catch(error) {
        return error.message;
    }
}

export const validateSubject = (subject) => {
try {
        subjectSchema.validateSync(subject);
        return '';
    } catch(error) {
        return error.message;
    }
}