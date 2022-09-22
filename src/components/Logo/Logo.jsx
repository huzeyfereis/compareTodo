import React from 'react';
import { CompanyLogo, Container } from './Logo.styled';
import logo from './static/logo.png';

const Logo = () => {
  return (
    <Container>
      <CompanyLogo src={logo} alt='logo' />
    </Container>
  );
};

export default Logo;
