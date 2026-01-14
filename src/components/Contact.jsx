import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace these with your actual EmailJS credentials
    const serviceID = 'service_131m8p7';
    const templateID = 'template_dtgf58n';
    const publicKey = 'hk_oqzsr2xrvEXCTk';

    const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: new Date().toLocaleString(),
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((result) => {
          setIsSubmitting(false);
          toast.success(`Thanks ${formData.name}! Message sent successfully. 🚀`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setFormData({ name: '', email: '', subject: '', message: '' });
      }, (error) => {
          setIsSubmitting(false);
          toast.error("Oops! Something went wrong. Please try again later.", {
            position: "bottom-right",
            theme: "dark",
          });
          console.error('EmailJS Error:', error.text);
      });
  };

  const contactInfo = [
    { icon: FaEnvelope, text: 'mutijimapras@gmail.com', href: 'mailto:mutijimapras@gmail.com' },
    { icon: FaMapMarkerAlt, text: 'Kigali, Rwanda', href: null },
    { icon: FaLinkedin, text: 'LinkedIn Profile', href: '#' },
    { icon: FaGithub, text: 'GitHub Profile', href: '#' },
  ];

  return (
    <section id="contact" className="section-padding position-relative overflow-hidden">
        {/* Background Decorative Blobs */}
        <div style={{ position: 'absolute', top: '20%', left: '-10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(97, 218, 251, 0.1) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(13, 110, 253, 0.1) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%', pointerEvents: 'none' }}></div>

      <Container>
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <Row className="g-5">
            {/* Contact Info Side */}
            <Col lg={5} className="d-flex flex-column justify-content-center">
                <div className="mb-5">
                    <h2 className="display-4 fw-bold mb-4"><span className="text-gradient">Let's Connect</span></h2>
                    <p className="lead text-secondary mb-4">
                        I'm currently available for freelance work or full-time opportunities. 
                        If you have a project that needs some creative touch, let's chat.
                    </p>
                </div>

                <div className="d-flex flex-column gap-4">
                    {contactInfo.map((item, index) => (
                        <motion.a 
                            key={index}
                            href={item.href}
                            className={`d-flex align-items-center gap-3 text-decoration-none ${item.href ? 'text-light' : 'text-secondary'}`}
                            whileHover={item.href ? { x: 10, color: '#61DAFB' } : {}}
                            style={{ cursor: item.href ? 'pointer' : 'default' }}
                        >
                            <div className="d-flex align-items-center justify-content-center bg-dark border border-secondary rounded-circle" style={{ width: '50px', height: '50px' }}>
                                <item.icon size={20} />
                            </div>
                            <span className="fs-5">{item.text}</span>
                        </motion.a>
                    ))}
                </div>
            </Col>

            {/* Form Side */}
            <Col lg={7}>
                <div className="glass-panel p-4 p-md-5 position-relative">
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6} className="mb-4">
                                <Form.Group>
                                    <Form.Label className="text-secondary small text-uppercase letter-spacing-2">Your Name</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedInput('name')}
                                        onBlur={() => setFocusedInput(null)}
                                        className="bg-transparent text-light border-0 border-bottom border-secondary rounded-0 px-0 py-2 shadow-none"
                                        style={{ transition: 'border-color 0.3s', borderColor: focusedInput === 'name' ? '#61DAFB' : 'var(--bs-gray-700)' }}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6} className="mb-4">
                                <Form.Group>
                                    <Form.Label className="text-secondary small text-uppercase letter-spacing-2">Your Email</Form.Label>
                                    <Form.Control 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedInput('email')}
                                        onBlur={() => setFocusedInput(null)}
                                        className="bg-transparent text-light border-0 border-bottom border-secondary rounded-0 px-0 py-2 shadow-none"
                                        style={{ transition: 'border-color 0.3s', borderColor: focusedInput === 'email' ? '#61DAFB' : 'var(--bs-gray-700)' }}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-4">
                            <Form.Label className="text-secondary small text-uppercase letter-spacing-2">Subject</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                onFocus={() => setFocusedInput('subject')}
                                onBlur={() => setFocusedInput(null)}
                                className="bg-transparent text-light border-0 border-bottom border-secondary rounded-0 px-0 py-2 shadow-none"
                                style={{ transition: 'border-color 0.3s', borderColor: focusedInput === 'subject' ? '#61DAFB' : 'var(--bs-gray-700)' }}
                                required
                            />
                        </Form.Group>
                        
                        <Form.Group className="mb-5">
                            <Form.Label className="text-secondary small text-uppercase letter-spacing-2">Message</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={4} 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                onFocus={() => setFocusedInput('message')}
                                onBlur={() => setFocusedInput(null)}
                                className="bg-transparent text-light border-0 border-bottom border-secondary rounded-0 px-0 py-2 shadow-none"
                                style={{ resize: 'none', transition: 'border-color 0.3s', borderColor: focusedInput === 'message' ? '#61DAFB' : 'var(--bs-gray-700)' }}
                                required
                            />
                        </Form.Group>
                        
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button 
                                variant="outline-light" 
                                size="lg" 
                                className="w-100 py-3 fw-bold d-flex align-items-center justify-content-center gap-2 rounded-pill" 
                                type="submit" 
                                disabled={isSubmitting}
                                style={{ borderColor: 'rgba(255,255,255,0.2)' }}
                            >
                                {isSubmitting ? (
                                    'Sending...'
                                ) : (
                                    <>
                                        Send Message <FaPaperPlane size={14} />
                                    </>
                                )}
                            </Button>
                        </motion.div>
                    </Form>
                </div>
            </Col>
            </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;