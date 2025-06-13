// src/app/resume/resume.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html', // This points to the HTML template below
  styleUrls: ['./resume.component.css'], // This points to the CSS below
})
export class ResumeComponent {
  // --- Personal Info ---
  name = 'Ravi Shankar. S';
  email = 'raviernesto123@gmail.com';
  phone = '8220777973';
  location = 'Madurai, TamilNadu, India 625017';
  linkedin = 'https://www.linkedin.com/in/ravishankars123';

  // --- Summary ---
  summary = `Dedicated Angular developer with over 2 years of experience in front-end development, an expert in Angular, and a proven record of delivering applications, as mentioned in the Projects section. I am excited to apply my advanced technical skills and extensive knowledge of web services to contribute effectively to mission-critical projects. Driven and determined associate software engineer with several years of experience building client applications. Offers strong interpersonal and communication skills. Seeking an engineering role at a premier defense and security company that delivers a full range of products and services.`;

  // --- Skills ---
  skills = [
    'Angular',
    'HTML',
    'CSS',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Github',
    'Git',
    'Primeflex',
    'Bootstrap',
    'ADFS',
    'PrimeNG',
    'PrimeFlex',
    'RxJS',
    'REST API integration',
    'Angular frameworks',
    'Object-oriented programming',
    'Testing and deployment',
    'Angular Material',
    'Java',
    'C programming',
    'Front-end optimization',
  ];

  // --- Experience ---
  experience = [
    {
      title: 'Associate Software Engineer',
      company: 'Tech Mahindra',
      dates: '02/2022 - Current',
      description: [
        `Championed the incorporation of human factors principles into the application's user interface, directly leading to a demonstrable and significant 25% upswing in overall user happiness.`,
        'Optimized JavaScript and Angular codebases, improving front-end performance by 20% while adhering to industry best practices.',
        'Facilitated seamless cross-team data integration by establishing four REST APIs, leading to being recognized as the most junior member on the team to ship production-level code.',
        'Enhanced system security by implementing ADFS (Active Directory Federation Services) configurations for 3 enterprise-level applications, increasing security compliance by 40%.',
        'Actively participated in code reviews, contributing to improved code quality and maintainability.',
        "Coordinated with back-end engineers to integrate RESTful APIs, enhancing the scalability of the client's digital infrastructure.",
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
        'Delivered client change requests within tight deadlines',
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
        'Ensured timely delivery of client change requests, contributing to project success',
      ],
    },
    {
      name: 'Service Appointment Tracking System (SATS)',
      technologies:
        'JSON, RESTful API, TypeScript, JavaScript, CSS, HTML, Angular 16+, ADFS, PrimeNG, Bootstrap, Git',
      description: [
        'Assisted in the migration from Pivotal Cloud Foundry (PCF) to Google Cloud Platform (GCP), working closely with clients.',
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
        'Contributed to the Ford application migration from Pivotal Cloud Foundry (PCF) to Google Cloud Platform (GCP)',
        'Developed and tested scalable applications based on client needs',
        'Debugged and resolved system errors, ensuring smooth functionality',
        'Successfully delivered client-requested modifications within required timeframes',
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
    'Javascript -',
  ];
}
