import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-5 display-5 fw-bold"><span className="text-gradient">About Me</span></h2>
          
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <div className="glass-panel p-4">
                <p className="mb-4">
                  I am a passionate software engineer with a strong focus on frontend development and user experience. With over 5 years of experience in building web applications, I strive to create software that is not only functional but also beautiful and easy to use.
                </p>
                <p>
                  My journey began with a curiosity for how things work on the internet, which led me to learn HTML & CSS. Fast forward to today, and I've had the privilege of working at an advertising agency, a start-up, and a huge corporation.
                </p>
                <div className="mt-4 d-flex gap-4">
                    <div>
                        <h3 className="text-info fw-bold">5+</h3>
                        <p className="text-secondary small">Years Experience</p>
                    </div>
                    <div>
                        <h3 className="text-danger fw-bold">50+</h3>
                        <p className="text-secondary small">Projects Completed</p>
                    </div>
                    <div>
                        <h3 className="text-success fw-bold">20+</h3>
                        <p className="text-secondary small">Happy Clients</p>
                    </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
               <div className="position-relative">
                  <div style={{ 
                    width: '100%', 
                    height: '400px', 
                    background: '#222', 
                    borderRadius: '16px',
                    overflow: 'hidden'
                  }}>
                    {/* Image Placeholder */}
                    <img 
                        src="https://via.placeholder.com/600x800/111111/333333?text=Profile+Image" 
                        alt="Profile" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} 
                    />
                  </div>
                  {/* Decor */}
                  <div style={{
                      position: 'absolute',
                      bottom: '-20px',
                      right: '-20px',
                      width: '150px',
                      height: '150px',
                      border: '2px solid var(--primary-accent)',
                      zIndex: -1,
                      borderRadius: '16px'
                  }} />
               </div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
