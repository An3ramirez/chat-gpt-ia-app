import React from "react";


interface ButtonProps {
    disabled: boolean;
    children: any
}

const Button: React.FC<ButtonProps> = ({ disabled, children }) => {
    return (
      <button
        disabled={disabled}
        type="submit"
        className="px-4 py-2 ml-2 text-sm sm:text-xl font-medium text-white bg-gray-800 rounded-full hover:bg-black focus:outline-none focus:bg-black"
      >
        {children}
      </button>
    );
  }
  
  export default Button;