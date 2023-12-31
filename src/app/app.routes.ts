import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { ExperiencesComponent } from "./experiences/experiences.component";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', redirectTo: '', pathMatch: 'full'},
    { path: 'experiences', component: ExperiencesComponent },
    { path: 'contact', component: ContactComponent },
  ];