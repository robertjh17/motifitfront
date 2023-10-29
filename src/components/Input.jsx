import React from 'react';
import PropTypes from 'prop-types';

function Input({ onChange, type, name, label }) {
    Input.propTypes = {
        onChange: PropTypes.onChange,
        type: PropTypes.type,
        name: PropTypes.name,
        label: PropTypes.label
    }

    return (
        <div className="form-group input-group">
            <input className="border-bottom border-0 input-style form-control mb-3 mb-md-2"
                onChange={onChange}
                type={type}
                id={name}
                placeholder={label} />
        </div>
    );
}

export default Input;