import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { ExperiencesComponent } from "./experiences/experiences.component";
import { EndureComponent } from "./endure/endure.component";
import { EndurePrivacyPolicyComponent } from "./endure-privacy-policy/endure-privacy-policy.component";
import { ProjectsComponent } from "./projects/projects.component";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', redirectTo: '', pathMatch: 'full'},
    { path: 'experiences', component: ExperiencesComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'endure', component: EndureComponent, title: 'Endure' },
    { path: 'endure/privacy-policy', component: EndurePrivacyPolicyComponent, title: 'Endure - Privacy Policy'}
  ];