import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private experiences = [
    {
      jobTitle: "Web Development Intern",
      companyName: "Kadro Solutions LLC",
      dateActive: "August 2022 - December 2022",
      companyUrl: "www.kadro.com",
      description: ["Debugged client projects solving issues with e-commerce websites in Adobe Magento using HTML, CSS, LESS, JavaScript, PHP, and MySQL",
        "Collaborated with mentor and other developers on a consistent basis about debugging internal ticket",
        "Documented JavaScript implementation and usage instructions of a new extension"],
      tools: ["JIRA", "BitBucket", "Adobe Magento", "MySQL", "PHP", "JavaScript", "HTML", "CSS", "LESS"]
    },
    {
      jobTitle: "Summer Code Coach",
      companyName: "theCoderSchool",
      dateActive: "July 2022 - August 2022",
      companyUrl: "www.thecoderschool.com",
      description: ["Taught students from 6-15 years old in Python, HTML, CSS, JavaScript, and Lua through weekly summer camp",
        "Communicated with parents through emails multiple times a week"
      ],
      tools: [],
    },
    {
      jobTitle: "Web Development Intern",
      companyName: "WolfTech",
      dateActive: "February 2022 - May 2022",
      companyUrl: "",
      description: ["Debugged website code for the electrical and computer engineering department at NC State",
        "Reported progress with department lead and other interns to complete tasks efficiently"
      ],
      tools: ["Laravel", "MySQL", "PHP", "JavaScript", "HTML", "CSS"],
    },
  ];
  constructor() { }

  getExperiences() {
    return this.experiences;
  }
}
