import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll Spy Logic
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is within the viewport (with some offset)
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveLink(section);
            break; // Stop checking once we find the active one
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar 
      expand="lg" 
      fixed="top"
      className={scrolled ? "glass-panel py-2" : "py-4"}
      style={{ 
        transition: "all 0.3s", 
        backgroundColor: scrolled ? "var(--glass-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none"
      }}
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#" className="fw-bold fs-3 d-flex align-items-center gap-2">
          <FaCode className="text-info" /> 
          <span className="text-gradient">DEV.PORTFOLIO</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <Nav.Link 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={
                    activeLink === item.toLowerCase() 
                    ? "mx-2 fw-medium position-relative text-info" 
                    : "mx-2 fw-medium position-relative link-hover"
                }
                onClick={() => setActiveLink(item.toLowerCase())}
                style={{ color: 'var(--text-color)' }}
              >
                {item}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
