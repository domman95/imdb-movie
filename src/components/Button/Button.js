import React from 'react';
import { StyledButton } from './Button.styles';

const Button = ({ children, type = 'button', onClick }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
