import React from 'react';

function Input(props) {
    return (
        <div className="form-group input-group">
            <input className="border-bottom border-0 input-style form-control mb-3 mb-md-2" onChange={props.onChange} type={props.type} id={props.name} placeholder={props.label } />
        </div>
    );
}

export default Input;
