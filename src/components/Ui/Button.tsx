import React from 'react';
import { ButtonProps } from '../types/ui/button';

const Button = ({ children, type, handlesignIn }: ButtonProps) => {
  return (
    <button onClick={handlesignIn} type={type} className="drawer-button">
      {children}
    </button>
  );
};

export default Button;
