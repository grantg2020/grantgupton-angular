import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private experiences = [
    {
      jobTitle: "Web Development Intern",
      companyName: "Kadro Solutions LLC",
      dateActive: "August 2022 - Decemeber 2022",
      companyUrl: "www.kadro.com",
      description: "- this\n-this\n- and this"
    },
    {
      jobTitle: "Web Development Intern",
      companyName: "Kadro Solutions LLC",
      dateActive: "August 2022 - Decemeber 2022",
      companyUrl: "www.kadro.com",
      description: "- this\n-this\n- and this"
    },
    {
      jobTitle: "Web Development Intern",
      companyName: "Kadro Solutions LLC",
      dateActive: "August 2022 - Decemeber 2022",
      companyUrl: "www.kadro.com",
      description: "- this\n-this\n- and this"
    },
  ];
  constructor() { }

  getExperiences() {
    return this.experiences;
  }
}
