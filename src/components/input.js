import React from 'react';

import './input.css';



const Input = props=>{
     

    return(
        <div style={props.styleDiv}  className="InputDiv">
            <p style={props.styleP} >{props.addBefore}</p>
            <input 
            required={props.required}
            id={props.id}
            className={props.className}
            style={props.style}
            name={props.name}
            type={props.type}
            value={props.value} 
            onClick={props.onClick} 
            onChange={props.onChange}
            placeholder={props.placeholder}
            hidden={props.type=="file" && true}   />
        </div>
    );
};

export default Input;