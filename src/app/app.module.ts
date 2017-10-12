import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingSlideComponent } from './components/landing-slide/landing-slide.component';
import { ExperienceSlideComponent } from './components/experience-slide/experience-slide.component';

const appRoutes: Routes = [
  {path : '', component: LandingSlideComponent},
  {path : 'about', component: ExperienceSlideComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingSlideComponent,
    ExperienceSlideComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
