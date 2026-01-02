import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import dashboardImage from '../assets/PFBS/dashboard.png';

const projects = [
  {
    title: 'PFBS',
    desc: 'A Personal Finance Budgeting System built with features like budget tracking, interactive analytics dashboard, and multi-currency support.',
    tags: ['React', 'Spring Boot', 'PostgreSQL', 'TailwindCSS'],
    link: 'https://www.loom.com/share/7d639dfd0e0c45ce9c9503fc35b6876a',
    github: 'https://github.com/praise-mut/Personal-Finance-Budgeting-System_25954.git',
    image: dashboardImage
  },
  {
    title: 'Task Management App',
    desc: 'Collaborative project management tool with real-time updates using Socket.io. Features drag-and-drop Kanban boards.',
    tags: ['Vue.js', 'Firebase', 'Tailwind'],
    link: '#',
    github: '#'
  },
  {
    title: 'AI Image Generator',
    desc: 'Web application that uses OpenAI API to generate images from text descriptions. Features a gallery and social sharing.',
    tags: ['React', 'OpenAI API', 'Express'],
    link: '#',
    github: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <Container>
        <h2 className="mb-5 display-5 fw-bold"><span className="text-gradient">Featured Projects</span></h2>

        <Row className="g-4">
          {projects.map((project, index) => (
            <Col key={index} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} className="h-100">
                  <div className="glass-panel h-100 d-flex flex-column overflow-hidden">
                    <div style={{ height: '200px', background: '#222', position: 'relative', overflow: 'hidden' }}>
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-100 h-100"
                          style={{ objectFit: 'cover' }}
                        />
                      ) : (
                        <div className="w-100 h-100 d-flex align-items-center justify-content-center text-secondary bg-dark">
                          <span>Project Screenshot</span>
                        </div>
                      )}
                    </div>

                    <div className="p-4 flex-grow-1 d-flex flex-column">
                      <h3 className="h4 mb-3">{project.title}</h3>
                      <p className="text-secondary mb-4 flex-grow-1">{project.desc}</p>

                      <div className="d-flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <Badge key={i} bg="transparent" className="border border-secondary text-secondary fw-normal">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="d-flex gap-3">
                        <Button
                          variant="outline-light"
                          size="sm"
                          className="d-flex align-items-center gap-2"
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          as="a"
                        >
                          <FaGithub /> Code
                        </Button>
                        <Button
                          variant="outline-info"
                          size="sm"
                          className="d-flex align-items-center gap-2"
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          as="a"
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
