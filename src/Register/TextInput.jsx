import React from "react";

const TextInput = (props) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
            <label htmlFor={props.label} style={{minWidth: '100px', marginBottom: '20px'}}>
                {props.label}
            </label>
            <input
                type={props.type}
                placeholder={props.label}
                name={props.name}
                value={props.value}
                onChange={event => props.action(event)}
            />
        </div>
    )
}

export default TextInput;