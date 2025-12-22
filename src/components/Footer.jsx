import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="py-4 text-center text-secondary" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <Container>
        <p className="mb-0">&copy; {new Date().getFullYear()} Mutijima Praise. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
