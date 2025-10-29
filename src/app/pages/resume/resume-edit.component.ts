// src/app/resume/resume.component.ts

import { Component, OnInit, HostListener } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-resume-edit',
  templateUrl: './resume-edit.component.html',
  styleUrls: ['./resume-edit.component.css'],
})
export class ResumeEditComponent implements OnInit {
  private originalTitle = document.title;
  constructor(private firestore: AngularFirestore) {}

  //Access
  access = true;
  name: any;
  email: any;
  phone: any;
  location: any;
  linkedin: any;
  portfolio: any;
  summary: any;
  skills: any;
  experience: any;
  accomplishments: any;
  projects: any;
  education: any;
  languages: any;
  certifications: any;
  jobTitle: string = 'Frontend Engineer | Angular | React | TypeScript';
  topSkillCategories: any[] = [];
  accessInfo =
    "Hey there! This resume is kinda like my secret training techniques - it's private! But don't worry, if you really wanna see it, just contact me and I'll be happy to share! I promise it'll be worth the wait, just like when I finally master a new Kamehameha! Hehe!";
  gokuImagePath = './assets/goku.png';
  // Existing document (legacy)
  resumeDocId = '37WTDrUfIkRybzFjySed';
  // New target document ID
  newResumeDocId = 'zFhI2z1H1rCO8eOl8ZfL';

  addResume(resumeData: any) {
    return this.firestore.collection('resumes').add(resumeData);
  }

  ngOnInit() {
    // this.seedResume();
    // Update the specific Firestore document with resumeDatas
    //   this.firestore.doc(`resumes/${this.resumeDocId}`).set(this.resumeDatas, { merge: true })
    //     .then(() => console.log('Resume data saved!'))
    //     .catch(error => console.error('Error saving resume:', error));//   }
    // Subscribe to new resume document
    this.firestore
      .doc<any>(`resumes/${this.newResumeDocId}`)
      .valueChanges()
      .subscribe((data) => {
        if (data) {
          this.name = data.name;
          this.email = data.email;
          this.phone = data.phone;
          this.location = data.location;
          this.linkedin = data.linkedin;
          this.summary = data.summary;
          // If skills not present, map from topSkillCategories fallback
          this.skills =
            data.skills && data.skills.length
              ? data.skills
              : data.topSkillCategories
              ? data.topSkillCategories.map((c: any) => ({
                  category: c.label,
                  items: c.items,
                }))
              : [];
          // Ensure topSkillCategories available for template identical binding
          this.topSkillCategories = data.topSkillCategories
            ? data.topSkillCategories
            : this.skills
            ? this.skills.map((s: any) => ({
                label: s.category,
                items: s.items,
              }))
            : [];
          this.experience = data.experience;
          this.accomplishments = data.accomplishments;
          this.projects = data.projects;
          this.education = data.education;
          this.languages = data.languages;
          this.certifications = data.certifications;
          this.portfolio = data.portfolio;
          if (data.jobTitle) {
            this.jobTitle = data.jobTitle;
          }
        } else {
          // Optionally seed if document missing
          this.seedResume();
        }
      });
  }

  private buildResumeData() {
    return {
      access: true,
      name: 'Ravi Shankar. S',
      jobTitle: 'Frontend Engineer | Angular | React | TypeScript',
      email: 'raviernesto123@gmail.com',
      phone: '8220777973',
      location: 'Madurai, TamilNadu, India 625017',
      linkedin: 'https://www.linkedin.com/in/ravishankars123',
      portfolio: 'https://ravi-webfolio.netlify.app',
      summary:
        'Frontend Engineer with 3+ years of experience in Angular and React.js, skilled in TypeScript, JavaScript (ES6+), and Java (OOP fundamentals). Proficient in Component-Based Architecture, Node.js, NPM, RESTful API Integration, and State Management (NgRx / Redux). Experienced in CI/CD Pipelines (Tekton, GitHub Actions, GitLab CI) and Google Cloud Platform (Cloud Build, Cloud Run, Firebase Hosting, Cloud Storage). Strong in UI/UX Design, Performance Optimization, and Agile / Scrum collaboration.',
      topSkillCategories: [
        {
          label: 'Core Technical',
          items: [
            'Angular',
            'React.js',
            'TypeScript',
            'JavaScript (ES6+)',
            'Node.js',
            'Java (OOP basics)',
            'HTML5',
            'CSS3 / SCSS',
            'Component-Based Architecture',
            'Responsive Web Design',
            'State Management (NgRx / Redux)',
            'Reusable UI Components',
          ],
        },
        {
          label: 'API & Data Handling',
          items: [
            'RESTful API Integration',
            'API-driven Development',
            'Authentication & Authorization (JWT / OAuth)',
            'JSON / XML Parsing',
          ],
        },
        {
          label: 'Development Tools',
          items: [
            'Git',
            'GitHub',
            'GitLab',
            'NPM / Yarn',
            'Webpack',
            'Vite',
            'Postman',
            'Swagger',
          ],
        },
        {
          label: 'Performance Optimization',
          items: [
            'Lazy Loading',
            'Code Splitting',
            'Cross-Browser Compatibility',
            'UI Performance Optimization',
            'Caching Strategies',
          ],
        },
        {
          label: 'Methodology & Collaboration',
          items: [
            'Agile / Scrum',
            'Sprint Planning',
            'Cross-Functional Collaboration',
            'Problem Solving',
            'Attention to Detail',
          ],
        },
        {
          label: 'Testing & Quality Assurance',
          items: [
            'Unit Testing (Jasmine / Jest)',
            'Debugging & Troubleshooting',
            'Clean Code Practices',
            'Continuous Integration / Continuous Deployment (CI/CD)',
          ],
        },
        {
          label: 'Cloud & Deployment',
          items: [
            'Google Cloud Platform (GCP)',
            'Tekton CI/CD',
            'Cloud Build',
            'Cloud Run',
            'Firebase Hosting',
            'Cloud Storage',
            'Docker (Basic)',
            'GitHub Actions',
            'GitLab CI',
          ],
        },
        {
          label: 'UI & Accessibility',
          items: [
            'PrimeNG',
            'Material UI (MUI)',
            'Bootstrap',
            'Pixel-Perfect UI Development',
            'Reusable Component Libraries',
            'Design Consistency'
          ],
        },
      ],
      experience: [
        {
          title: 'Associate Software Engineer',
          company: 'Tech Mahindra',
          dates: '02/2022 - Current',
          description: [
            'Delivered Angular & React SPA features with pixel-perfect, responsive UI and state management (NgRx / Redux), boosting UX by 25%.',
            'Integrated RESTful APIs (Postman / Swagger) and optimized performance via Lazy Loading, Code Splitting & Change Detection tuning.',
            'Enhanced Cross-Browser Compatibility, Accessibility (A11y) and UI consistency using reusable design tokens.',
            'Automated testing & deployments using Tekton CI/CD, GitHub Actions and Google Cloud Run cutting regression defects by 15%.',
            'Debugged RxJS / async issues and optimized render performance improving delivery efficiency.',
            'Collaborated in Agile / Scrum sprints and mentored peers on Clean Code & Component-Based Architecture.',
            'Expanded unit testing coverage (Jasmine / Jest) and introduced ES6+ JavaScript & TypeScript patterns for maintainable, testable code.',
          ],
        },
      ],
      accomplishments: [
        'Built reusable UI component libraries improving delivery speed and design consistency.',
        'Recognized twice with top performance rating for on-time delivery of Angular / React / API-driven features.',
        'Strengthened Tekton-based CI/CD pipelines and testing coverage enhancing release reliability.',
      ],
      projects: [
        {
          name: 'Supplier Information Metrics (SIM)',
          technologies:
            'Angular 16+, TypeScript, Signals, RESTful API Integration, PrimeNG, Bootstrap, Git, SonarQube, StyleLint, FOSSA, ADFS, CI/CD',
          description: [
            'Delivered Angular SPA modules using Component-Based Architecture and reusable components.',
            'Implemented responsive layouts (desktop + mobile) reinforcing Responsive Web Design best practices.',
            'Adopted Lazy Loading and Code Splitting to reduce initial bundle size.',
            'Integrated RESTful APIs with Postman / Swagger contract checks supporting API-driven development.',
            'Applied Clean Code Practices and accessibility (A11y) adjustments improving maintainability.',
          ],
        },
        {
          name: 'Sourcing For Quality (SFQ)',
          technologies:
            'React.js 18+, TypeScript, RESTful APIs, Redux Toolkit, React Query, Bootstrap, SCSS, Git, Tekton CI/CD, Google Cloud Run, Axios',
          description: [
            'Built reusable React.js components and implemented Redux Toolkit + React Query for predictable state/data handling and scalable UI delivery.',
            'Optimized performance with React.memo, useCallback, and code-splitting while ensuring cross-browser, responsive layouts using modern SCSS.',
            'Engineered Tekton CI/CD pipelines deploying to Google Cloud Run (Cloud Build), accelerating automated build/test/release cycles.',
          ],
        },
        {
          name: 'Service Appointment Tracking System (SATS)',
          technologies:
            'Angular, TypeScript, RESTful API Integration, PrimeNG, Bootstrap, Git, Jasmine / Jest',
          description: [
            'Built reusable form and table components accelerating API-driven feature rollout.',
            'Applied debugging & troubleshooting to resolve race conditions in asynchronous REST calls.',
            'Expanded unit testing coverage (Jasmine / Jest) ensuring stability across releases.',
          ],
        },
        {
          name: 'Global Catalogue',
          technologies:
            'Angular 10+, TypeScript, RESTful APIs, PrimeNG, Bootstrap, Git, Webpack',
          description: [
            'Refactored legacy components into modular, reusable libraries reducing code duplication.',
            'Optimized bundle via Webpack configuration and Code Splitting.',
            'Ensured Pixel-Perfect UI alignment and A11y improvements across product pages.',
          ],
        },
      ],
      education: [
        {
          degree: 'Bachelor of Engineering: Computer Science',
          institution: 'PSNA College Of Engineering And Technology, Dindigul',
          dates: '2018 - 2022',
          details:
            'Graduated with 7.86 GPA; strong foundation in software engineering principles.',
        },
        {
          degree: 'HSC (12th Grade): Computer Science',
          institution: 'St. Michael Matric Higher Secondary School, Madurai',
          dates: '2017 - 2018',
          details: 'Score: 87.5%; consistent academic performance.',
        },
        {
          degree: 'SSLC (10th Grade)',
          institution: 'St. Michael Matric Higher Secondary School, Madurai',
          dates: '2015 - 2016',
          details: 'Score: 95%; distinction level achievement.',
        },
      ],
      languages: [
        { name: 'Tamil', proficiency: 'First Language' },
        { name: 'English', proficiency: 'Advanced (C1)' },
        { name: 'Hindi', proficiency: 'Elementary (A2)' },
      ],
      certifications: [
        'Professional Cloud Developer - Google Cloud',
        'Introduction to Generative AI - Google Cloud',
        'Google Cloud Fundamentals: Core Infrastructure - Google Cloud',
        'GitHub Copilot - NAD (National Academic Depository)',
      ],
    };
  }

  seedResume() {
    const data = this.buildResumeData();
    this.firestore
      .doc(`resumes/${this.newResumeDocId}`)
      .set(data, { merge: true })
      .then(() => console.log('Seeded resume data into new document'))
      .catch((err) => console.error('Error seeding resume data', err));
  }

  @HostListener('beforeprint')
  handleBeforePrint() {
    document.title = 'RaviShankar_Frontend_Dev_Resume';
  }

  @HostListener('afterprint')
  handleAfterPrint() {
    document.title = this.originalTitle;
  }

  @HostListener('window:keydown', ['$event'])
  handleKeydown(ev: KeyboardEvent) {
    if ((ev.ctrlKey || ev.metaKey) && ev.key.toLowerCase() === 'p') {
      document.title = 'RaviShankar_Frontend_Dev_Resume';
      setTimeout(() => {
        document.title = this.originalTitle;
      }, 4000);
    }
  }
}
