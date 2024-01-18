import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { ExperiencesComponent } from "./experiences/experiences.component";
import { EndureComponent } from "./endure/endure.component";
import { EndurePrivacyPolicyComponent } from "./endure-privacy-policy/endure-privacy-policy.component";
import { ProjectsComponent } from "./projects/projects.component";
import { SmartwatchAppsComponent } from "./smartwatch-apps/smartwatch-apps.component";

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Grant Gupton - Home' },
    { path: 'home', redirectTo: '', pathMatch: 'full'},
    { path: 'experiences', component: ExperiencesComponent, title: 'Experiences' },
    { path: 'projects', component: ProjectsComponent, title: 'Projects' },
    { path: 'contact', component: ContactComponent, title: 'Contact Grant' },
    { path: 'endure', component: EndureComponent, title: 'Endure' },
    { path: 'endure/privacy-policy', component: EndurePrivacyPolicyComponent, title: 'Endure - Privacy Policy'},
    { path: 'smartwatch-apps', component: SmartwatchAppsComponent, title: 'Smartwatch Apps' },
  ];