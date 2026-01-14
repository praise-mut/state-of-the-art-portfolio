import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDocker, FaAws, FaJava, FaPython } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiFigma, SiTailwindcss, SiCanva, SiSpringboot } from 'react-icons/si';

const skills = [
  // Frontend
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
  
  // Languages & Backend
  { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
  { name: 'Java', icon: FaJava, color: '#007396' },
  { name: 'Python', icon: FaPython, color: '#3776AB' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  
  // Databases
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  
  // Tools & DevOps
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'Docker', icon: FaDocker, color: '#2496ED' },
  { name: 'AWS', icon: FaAws, color: '#FF9900' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'Canva', icon: SiCanva, color: '#00C4CC' },
];

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="section-padding bg-black bg-opacity-50">
      <Container>
        <h2 className="mb-5 display-5 fw-bold text-end"><span className="text-gradient">Technical Skills</span></h2>
        
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
        >
            <Row className="g-4">
            {skills.map((skill, index) => (
                <Col key={index} xs={6} md={4} lg={3}>
                    <motion.div variants={item}>
                        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={2500}>
                            <div className="glass-panel p-4 d-flex flex-column align-items-center justify-content-center h-100" 
                                 style={{ minHeight: '160px', cursor: 'none', transition: 'all 0.3s' }}
                                 onMouseEnter={(e) => e.currentTarget.style.borderColor = skill.color}
                                 onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--glass-border)'}
                            >
                                <skill.icon size={50} color={skill.color} className="mb-3" />
                                <h5 className="mb-0">{skill.name}</h5>
                            </div>
                        </Tilt>
                    </motion.div>
                </Col>
            ))}
            </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills;
