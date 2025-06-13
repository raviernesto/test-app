import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './pages/resume/resume.component';
import { NasaNeoComponent } from './pages/nasa-neo/nasa-neo.component';

const routes: Routes = [
  {
    path: 'resume',
    component: ResumeComponent,
    title: 'Resume'
  },
  {
    path: 'nasa-neo',
    component: NasaNeoComponent,
    title: 'Nasa NEO Browser'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
