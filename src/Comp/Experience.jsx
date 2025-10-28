import React from 'react';
 // optional: for custom styling
 import '../index.css';
 import '../App.css';

const Experience = () => {
  const projects = [
    {
      title: 'Employee Payroll Management System',
      description:
        'A Java-based desktop application for managing employee details and payroll operations, integrated with MySQL for data storage.',
      tech: 'Java, MySQL, Swing',
      link: 'https://github.com/stevekalix/Employee_Payroll_Management_System',
    },
    {
      title: 'Eco-Learn Web Application',
      description:
        'A web platform designed to promote environmental awareness and education using HTML, CSS, JavaScript, and MySQL.',
      tech: 'HTML, CSS, JavaScript, MySQL',
      link: 'https://github.com/stevekalix/Eco-learn-WebApplication',
    },
    {
      title: 'React + Spring Boot CRUD Application',
      description:
        'A full-stack CRUD application integrating React for the frontend and Spring Boot for backend RESTful APIs.',
      tech: 'React, Spring Boot, MySQL',
      link: 'https://github.com/stevekalix/REACT--SPRINGBOOT-CRUD',
    },
    {
      title: 'Scheduler Spring Boot Application',
      description:
        'A backend scheduling service built with Spring Boot to automate task execution using cron jobs and asynchronous processing.',
      tech: 'Java, Spring Boot, Scheduler',
      link: 'https://github.com/stevekalix/SHEDULAR-SPRINGBOOT',
    },
    {
      title: 'Flutter + Spring Boot Integration',
      description:
        'A mobile application built with Flutter, connected to a Spring Boot backend via REST APIs for data synchronization.',
      tech: 'Flutter, Spring Boot, REST API',
      link: 'https://github.com/stevekalix/FLUTTER-SPRINGBOOT-INTERGRATION',
    },
    {
      title: 'Microservices with Spring Boot',
      description:
        'A distributed system demonstrating microservice architecture with Spring Boot, including API Gateway and service communication.',
      tech: 'Java, Spring Boot, Microservices, REST',
      link: 'https://github.com/stevekalix/MICROSERVICES-SPRINGBOOT',
    },
  ];

  return (
    <section className="experience">
        
      <h2>My Projects & Experience</h2>
      <p>
        I’m a passionate student developer skilled in Java, Flutter, Spring Boot,
        React, and MySQL. I’ve built several full-stack applications and enjoy
        learning new technologies to improve my craft.
      </p>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Tech Stack:</strong> {project.tech}
            </p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
