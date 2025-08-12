// src/app/resume/resume.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html', // This points to the HTML template below
  styleUrls: ['./resume.component.css'], // This points to the CSS below
})
export class ResumeComponent {
  //Access
  access = false;
  accessInfo = 'Hey there! This resume is kinda like my secret training techniques - it\'s private! But don\'t worry, if you really wanna see it, just contact me and I\'ll be happy to share! I promise it\'ll be worth the wait, just like when I finally master a new Kamehameha! Hehe!'
  gokuImagePath = './assets/goku.png';
  // --- Personal Info ---
  name = 'Ravi Shankar. S';
  email = 'raviernesto123@gmail.com';
  phone = '8220777973';
  location = 'Madurai, TamilNadu, India 625017';
  linkedin = 'https://www.linkedin.com/in/ravishankars123';

  // --- Summary ---
  summary = `Results-driven Angular developer with over 2 years of hands-on experience in building scalable and high-performance front-end applications. Proficient in Angular, TypeScript, and RESTful services, with a proven track record of delivering robust solutions for enterprise clients. Strong collaborator with experience in Agile teams, code reviews, and cross-functional API integration. Recognized for improving user satisfaction, performance, and system security. Seeking a challenging role in a forward-thinking organization to apply technical skills to mission-critical projects.`;

  // --- Skills ---
  skills = [
    {
      category: '🔧 Programming Languages',
      items: ['TypeScript', 'JavaScript', 'Java', 'C Programming'],
    },
    {
      category: '🧩 Frameworks & Libraries',
      items: [
        'Angular (including Angular Material & Angular frameworks)',
        'PrimeNG',
        'PrimeFlex',
        'Bootstrap',
        'RxJS',
      ],
    },
    {
      category: '🌐 Web Technologies',
      items: ['HTML', 'CSS', 'REST API Integration', 'Front-end Optimization'],
    },
    {
      category: '🛠️ Tools & Platforms',
      items: ['Node.js', 'Git', 'GitHub', 'ADFS'],
    },
    {
      category: '🧠 Concepts & Methodologies',
      items: ['Object-Oriented Programming (OOP)', 'Testing and Deployment'],
    },
  ];

  // --- Experience ---
  experience = [
    {
      title: 'Associate Software Engineer',
      company: 'Tech Mahindra',
      dates: '02/2022 - Current',
      description: [
        `Championed the incorporation of human factors principles into the application's user interface, resulting in a 25% improvement in overall user satisfaction.`,
        'Optimized JavaScript and Angular codebases, boosting front-end performance by 20% through best practices and modular design.',
        'Developed and deployed 4 REST APIs, enabling seamless cross-team data integration and accelerating project delivery by 25%; recognized as the youngest team member to ship production-ready code.',
        'Implemented ADFS configurations for three enterprise applications, enhancing security compliance by 40% and reducing access-related issues.',
        'Reviewed over 40+ pull requests, identifying defects early and improving front-end code quality by 15%, while mentoring junior developers on Angular best practices.',
        'Collaborated with 3+ backend teams to integrate scalable RESTful APIs, resulting in a 2x improvement in application load handling and 30% boost in system responsiveness.',
      ],
    },
    // Add more experience entries here if applicable
  ];

  // --- Accomplishments ---
  accomplishments = [
    'Recognized with the highest rating in the company twice, reflecting exceptional performance and dedication',
    'Consistently delivered high-quality results, contributing to key projects and business success',
  ];

  // --- Projects ---
  projects = [
    {
      name: 'Supplier information metrics (SIM)',
      technologies:
        'SonarQube, StyleLint, FOSSA, Angular Signals, TypeScript, JavaScript, CSS, HTML, JSON, RESTful API, Angular 14+, ADFS, PrimeNG, Bootstrap, Git',
      description: [
        'Led efforts in migrating applications from Pivotal Cloud Foundry (PCF) to Google Cloud Platform (GCP) for Ford',
        'Collaborated with clients to gather requirements and develop scalable applications.',
        'Identified and resolved critical issues to enhance system performance.',
        'Presented client-requested changes on time, aligning with project milestones.',
      ],
    },
    {
      name: 'Sourcing for quality (SFQ)',
      technologies:
        'SonarQube, StyleLint, FOSSA, Angular Signals, TypeScript, JavaScript, CSS, HTML, JSON, RESTful API, Angular 16+, ADFS, PrimeNG, Bootstrap, and Git',
      description: [
        'Played a key role in migrating applications from Pivotal Cloud Foundry (PCF) to Google Cloud Platform (GCP).',
        'Conducted requirement analysis, development, and testing.',
        'Streamlined issue identification and resolution to optimize workflow',
        'Provided timely implementation of client requests, supporting project success and continuity.',
      ],
    },
    {
      name: 'Service Appointment Tracking System (SATS)',
      technologies:
        'JSON, RESTful API, TypeScript, JavaScript, CSS, HTML, Angular 16+, ADFS, PrimeNG, Bootstrap, Git',
      description: [
        'Developed, tested, and debugged applications to maintain operational efficiency.',
        'Provided quick resolutions to critical issues, improving the user experience.',
        'Managed and executed client change requests, adhering to deadlines.',
      ],
    },
    {
      name: 'Global catalogue',
      technologies:
        'Angular 10+, PrimeNG, Bootstrap, CSS, HTML, JSON, RESTful API, TypeScript, and JavaScript',
      description: [
        'Developed and tested scalable applications based on client needs',
        'Debugged and resolved system errors, ensuring smooth functionality',
        'Distributed critical client updates within scheduled timeframes, maintaining service reliability.',
      ],
    },
    // Add more project entries
  ];

  // --- Education ---
  education = [
    {
      degree: 'Bachelor of Engineering: Computer Science',
      institution: 'PSNA College Of Engineering And Technology, Dindigul',
      dates: '2018 - 2022',
      details: 'Graduated with a 7.86 GPA, recognized for academic excellence.',
    },
    {
      degree: 'HSC (12th Grade): Computer Science',
      institution: 'St.Michael Matric Higher Secondary School, Madurai',
      dates: '2017 - 2018',
      details:
        'Achieved 87.5% overall, demonstrating consistent high performance.',
    },
    {
      degree: 'SSLC (10th Grade)',
      institution: 'St.Michael Matric Higher Secondary School, Madurai',
      dates: '2015 - 2016',
      details:
        'Completed with 95%, reflecting outstanding scholastic achievement.',
    },
    // Add more education entries
  ];

  // --- Languages ---
  languages = [
    { name: 'Tamil', proficiency: 'First Language' },
    { name: 'English', proficiency: 'Advanced (C1)' },
    { name: 'Hindi', proficiency: 'Elementary (A2)' },
  ];

  // --- Certifications ---
  certifications = [
    'Professional Cloud Developer - Google',
    'Introduction to Generative AI - Google',
    'Google Cloud Fundamentals: Core Infrastructure - Google',
    'Github Copilot - NAD',
  ];
}
