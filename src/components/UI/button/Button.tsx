import React from "react";
import classes from "./Button.module.css"

interface ButtonProps {
    children:  React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
    label: string;
    type: "button" | "submit" | "reset";
}

const MyButton = (props: ButtonProps) => {
    return (
        <button {...props} className={classes.Btn}>
            {props.children}
        </button>
    )
}

export default MyButton;