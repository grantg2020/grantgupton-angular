import { NgModule } from '@angular/core';
import { BrowserModule, provideProtractorTestingSupport } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ButtonComponent } from './button/button.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { RouterOutlet, provideRouter } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ButtonComponent,
    MobileNavComponent,
    ExperienceComponent,
    ExperiencesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterOutlet,
  ],
  providers: [provideRouter(routes), provideProtractorTestingSupport()],
  bootstrap: [AppComponent]
})
export class AppModule { }
