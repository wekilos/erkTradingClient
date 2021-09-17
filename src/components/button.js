import React from 'react';

import './button.css';



const Button = props=>{
     

    return(
         <button 
         className={`button ${props.className}` }
         onClick={props.onClick}
         style={props.style}
         >
             {props.children}
             
             </button>
    );
};

export default Button;