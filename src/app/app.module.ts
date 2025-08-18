import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoggingInterceptor } from './services/logging.interceptor';
import { HeadersInterceptor } from './services/headers.interceptor';
import { ErrorInterceptor } from './services/error.interceptor';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DropdownModule } from 'primeng/dropdown';
import { NavBarComponent } from './common/loader/nav-bar/nav-bar.component';
import { MenubarModule } from 'primeng/menubar';
import { ResumeComponent } from './pages/resume/resume.component';
import { NasaNeoComponent } from './pages/nasa-neo/nasa-neo.component';
import { LoaderComponent } from './common/loader/loader.component';
import { NasaApodComponent } from './pages/nasa-apod/nasa-apod.component';
import { DragonBallComponent } from './pages/dragon-ball/dragon-ball.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './Store/store.reducer';
@NgModule({
  declarations: [AppComponent, NavBarComponent, ResumeComponent, NasaNeoComponent, LoaderComponent, NasaApodComponent, DragonBallComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TableModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    CardModule,
    HttpClientModule,
    ProgressSpinnerModule,
    DropdownModule,
    MenubarModule,
    StoreModule.forRoot(({ count: counterReducer })),
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
