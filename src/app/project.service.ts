import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects = [
    {
      projectTitle: "Endure Fitness",
      startDate: "August 2020",
      projectUrl: "https://www.grantgupton.com/endure",
      description: ["Debugged client projects solving issues with e-commerce websites in Adobe Magento using HTML, CSS, LESS, JavaScript, PHP, and MySQL",
        "Collaborated with mentor and other developers on a consistent basis about debugging internal ticket",
        "Documented JavaScript implementation and usage instructions of a new extension"],
      tools: ["Flutter", "XCode", "Android Studio", "GitHub"]
    }
  ];
  constructor() { }

  getProjects() {
    return this.projects;
  }
}