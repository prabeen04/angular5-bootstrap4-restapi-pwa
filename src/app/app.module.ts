import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { ParticlesModule } from 'angular-particle';
import { HttpClientModule } from '@angular/common/http';

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";

import { Observable } from 'rxjs/Observable';

import { appRoutes } from './app.route';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/Home/Home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ServiceComponent } from './components/service/service.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProjectComponent } from './components/project/project.component';

import { CoteService } from './services/cote.service';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("17496993874-sokd3ppol3recpoctgs5hs7p4knsp0sj.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("788753627986934")
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    ServiceComponent,
    ProfileComponent,
    ProjectComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    HttpClientModule,
    ParticlesModule,
    SocialLoginModule
  ],
  providers: [CoteService,    {
              provide: AuthServiceConfig,
              useFactory: provideConfig
            }
          ],
  bootstrap: [AppComponent]
})
export class AppModule { }
