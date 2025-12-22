import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const TypingEffect = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const word1 = "Mutijima ";
  const word2 = "Praise";

  useEffect(() => {
    const typeWord1 = async () => {
      for (let i = 0; i <= word1.length; i++) {
        setText1(word1.substring(0, i));
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      typeWord2();
    };

    const typeWord2 = async () => {
      for (let i = 0; i <= word2.length; i++) {
        setText2(word2.substring(0, i));
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    };

    // Start typing after a small delay
    setTimeout(typeWord1, 1000);

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <h1 style={{ fontSize: '4rem', fontWeight: 700, lineHeight: 1.1, minHeight: '4.4rem' }}>
      {text1}
      <span className="text-gradient">{text2}</span>
      <span style={{ opacity: showCursor ? 1 : 0, color: '#00f2ea' }}>|</span>
    </h1>
  );
};

const Hero = () => {
  return (
    <section id="home" className="d-flex align-items-center" style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '-10%',
        width: '40vw',
        height: '40vw',
        background: 'radial-gradient(circle, rgba(0,242,234,0.15) 0%, rgba(0,0,0,0) 70%)',
        zIndex: -1
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        right: '-10%',
        width: '40vw',
        height: '40vw',
        background: 'radial-gradient(circle, rgba(255,0,85,0.15) 0%, rgba(0,0,0,0) 70%)',
        zIndex: -1
      }} />

      <Container>
        <Row className="align-items-center">
          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-info mb-3">Hello, I'm</h4>
              
              <TypingEffect />

              <h2 className="mb-4 text-secondary">Creative Full Stack Developer</h2>
              <p className="lead mb-5 text-light" style={{ maxWidth: '500px' }}>
                I build accessible, pixel-perfect, performant, and engaging digital experiences for the web.
              </p>
              
              <div className="d-flex gap-3">
                <Button variant="outline-info" size="lg" href="#projects">View Work</Button>
                <Button variant="primary" size="lg" href="#contact">Contact Me</Button>
              </div>

              <div className="mt-5 d-flex gap-4">
                {[
                  { Icon: FaGithub, href: "https://github.com/praise-mut" },
                  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/praise-mut/" }
                ].map((social, i) => (
                  <motion.a 
                    key={i}
                    href={social.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, color: '#00f2ea' }}
                    className="text-secondary fs-4"
                  >
                    <social.Icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </Col>
          
          <Col lg={5} className="d-none d-lg-block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="position-relative"
            >
              {/* Abstract 3D-ish Shape Placeholder */}
              <div className="glass-panel d-flex align-items-center justify-content-center" style={{ width: '100%', height: '400px', borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}>
                 <span className="text-gradient fs-1 fw-bold">P.</span>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
