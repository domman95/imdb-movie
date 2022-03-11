import React from 'react';
import GlobalStyle from '../../styles/GlobalStyles';
import { StyledLayout } from './Layout.styles';

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <GlobalStyle />
      {children}
    </StyledLayout>
  );
};

export default Layout;
