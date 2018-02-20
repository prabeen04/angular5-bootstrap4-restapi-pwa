import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/Home/Home.component';
import { ServiceComponent } from './components/service/service.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProjectComponent } from './components/project/project.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent,  pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'service',  component: ServiceComponent },
    { path: 'project',  component: ProjectComponent },
    { path: 'profile',  component: ProfileComponent },
    { path: 'login',  component: LoginComponent },
    { path: 'signup',  component: SignupComponent },
    { path: '**', component: PageNotFoundComponent }
  ];
  