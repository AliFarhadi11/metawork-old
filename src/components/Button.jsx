import React from "react";

const Button = ({ text, style }) => {
    return (
        <button className={`text-white ${style} bg-primary rounded-[12px] font-poppins font-medium`}>
            {text}
        </button>
    );
};

export default Button;
