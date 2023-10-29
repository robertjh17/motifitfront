import { Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
function TextInput({type, name, placeholder }) {
    TextInput.proptypes = {
        type: PropTypes.type,
        name: PropTypes.name,
        placeholder: PropTypes.placeholder
    }

    return (
        <>
            <Field type={type}
                className="border-bottom border-0 input-style form-control mb-3 mb-md-2 col-start-2 hover:cursor-pointer"
                name={name}
                placeholder={placeholder }/>
            <ErrorMessage
                name={name}
                component="div"/>
        </>
    )
}

export default TextInput;