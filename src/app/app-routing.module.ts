import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './pages/resume/resume.component';
import { NasaNeoComponent } from './pages/nasa-neo/nasa-neo.component';
import { NasaApodComponent } from './pages/nasa-apod/nasa-apod.component';
import { DragonBallComponent } from './pages/dragon-ball/dragon-ball.component';

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
  },
  {
    path: 'nasa-apod',
    component: NasaApodComponent,
    title: 'Nasa APOD'
  },
   {
    path: 'dragon-ball',
    component: DragonBallComponent,
    title: 'Dragon Ball Characters'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
