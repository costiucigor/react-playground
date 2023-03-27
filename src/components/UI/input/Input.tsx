import React from 'react';
import classes from "./Input.module.css"


const Input = (props: any) => {
    return (
        <input className={classes.input} {...props} />
    );
};

export default Input;