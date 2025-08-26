// src/app/resume/resume.component.ts

import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeEditComponent implements OnInit {
  constructor(private firestore: AngularFirestore) {}

  //Access
  access = true;
  name: any;
  email: any;
  phone: any;
  location: any;
  linkedin: any;
  summary: any;
  skills: any;
  experience: any;
  accomplishments: any;
  projects: any;
  education: any;
  languages: any;
  certifications: any;
  accessInfo =
    "Hey there! This resume is kinda like my secret training techniques - it's private! But don't worry, if you really wanna see it, just contact me and I'll be happy to share! I promise it'll be worth the wait, just like when I finally master a new Kamehameha! Hehe!";
  gokuImagePath = './assets/goku.png';
  // Firestore document ID
  resumeDocId = '37WTDrUfIkRybzFjySed';
  
  addResume(resumeData: any) {
    return this.firestore.collection('resumes').add(resumeData);
  }


  ngOnInit() {
    // Update the specific Firestore document with resumeDatas
    //   this.firestore.doc(`resumes/${this.resumeDocId}`).set(this.resumeDatas, { merge: true })
    //     .then(() => console.log('Resume data saved!'))
    //     .catch(error => console.error('Error saving resume:', error));//   }
    this.firestore
      .doc<any>(`resumes/${this.resumeDocId}`)
      .valueChanges()
      .subscribe((data) => {
        if (data) {
          this.name = data.name;
          this.email = data.email;
          this.phone = data.phone;
          this.location = data.location;
          this.linkedin = data.linkedin;
          this.summary = data.summary;
          this.skills = data.skills;
          this.experience = data.experience;
          this.accomplishments = data.accomplishments;
          this.projects = data.projects;
          this.education = data.education;
          this.languages = data.languages;
          this.certifications = data.certifications;
        }
      });
  }
}
