import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './pages/resume/resume.component';
import { ResumeEditComponent } from './pages/resume/resume-edit.component';
import { NasaNeoComponent } from './pages/nasa-neo/nasa-neo.component';
import { NasaApodComponent } from './pages/nasa-apod/nasa-apod.component';
import { DragonBallComponent } from './pages/dragon-ball/dragon-ball.component';
import { CounterComponent } from './pages/counter/counter.component';
import { AboutComponent } from './pages/about/about.component';
import { CodeSnippetComponent } from './pages/code-snippet/code-snippet.component';
import { TrickyQuestionsComponent } from './pages/tricky-questions/tricky-questions.component';

const routes: Routes = [
  {
    path: 'resume-edit',
    component: ResumeEditComponent,
    title: 'Edit Resume',
  },
  {
    path: 'resume',
    component: ResumeComponent,
    title: 'Resume',
  },
  {
    path: 'nasa-neo',
    component: NasaNeoComponent,
    title: 'Nasa NEO Browser',
  },
  {
    path: 'nasa-apod',
    component: NasaApodComponent,
    title: 'Nasa APOD',
  },
  {
    path: 'dragon-ball',
    component: DragonBallComponent,
    title: 'Dragon Ball Characters',
  },
  {
    path: 'counter',
    component: CounterComponent,
    title: 'Counter',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About',
  },
  {
    path: 'tricky-questions',
    component: TrickyQuestionsComponent,
    title: 'Tricky Interview Questions',
  },
  {
    path: '',
    redirectTo: 'dragon-ball',
    pathMatch: 'full',
  },
  {
    path: 'code-snippet',
    component: CodeSnippetComponent,
    title: 'Code Snippet',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
