import React from "react";

const Button = (props) => {

    return (
        <button
            onClick={props.click}
            style={{border: 'none', width: '100px', background: 'green', color: 'white'}}
        >
            {props.label}
        </button>
    )
}

export default Button;