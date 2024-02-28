import { NgModule } from '@angular/core';
import { BrowserModule, provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ButtonComponent } from './button/button.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { EndureComponent } from './endure/endure.component';
import { EndurePrivacyPolicyComponent } from './endure-privacy-policy/endure-privacy-policy.component';
import { EndureNavComponent } from './endure-nav/endure-nav.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';
import { FullscreenNavComponent } from './fullscreen-nav/fullscreen-nav.component';
import {MatIconModule} from '@angular/material/icon';
import { EndureFooterComponent } from './endure-footer/endure-footer.component';
import { SmartwatchAppsComponent } from './smartwatch-apps/smartwatch-apps.component';
import { SmartwatchAppComponent } from './smartwatch-app/smartwatch-app.component';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ButtonComponent,
    MobileNavComponent,
    ExperienceComponent,
    ExperiencesComponent,
    ContactComponent,
    EndureComponent,
    EndurePrivacyPolicyComponent,
    EndureNavComponent,
    ProjectsComponent,
    ProjectComponent,
    FullscreenNavComponent,
    EndureFooterComponent,
    SmartwatchAppsComponent,
    SmartwatchAppComponent,
    AboutMeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [provideRouter(routes), provideProtractorTestingSupport()],
  bootstrap: [AppComponent]
})
export class AppModule { }
