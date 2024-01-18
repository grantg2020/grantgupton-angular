import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private experiences = [
    {
      jobTitle: "Mobile Software Developer",
      companyName: "VetOvation, Inc.",
      dateActive: "July 2023 - August 2023",
      companyUrl: "www.vetovation.com",
      projectUrls: [
        {
          title: "App Store",
          url: "https://apps.apple.com/us/app/vetovation-videoscope/id1244569827",
        },
      ],
      description: ["Collaborated with other Computer Science students to review existing app code",
        "Fixed bugs on iOS mobile application in Swift",
        "Deployed updates to Apple App Store"],
      tools: ["Swift", "GitHub", "App Store Connect"]
    },
    {
      jobTitle: "Applications Development Intern",
      companyName: "NC Dept of Insurance",
      dateActive: "June 2023 - July 2023",
      companyUrl: "www.ncdoi.gov",
      projectUrls: [
        {
          title: "Project",
          url: "https://apps.ncdoi.net/f?p=109:100",
        },
      ],
      description: ["Developed a reference website for continuing care retirement communities using Oracle APEX",
        "Participated in weekly standup meetings to communicate project updates and issues to address"],
      tools: ["Oracle APEX", "PL/SQL", "JavaScript"]
    },
    {
      jobTitle: "Web Development Intern",
      companyName: "Kadro Solutions LLC",
      dateActive: "August 2022 - December 2022",
      companyUrl: "www.kadro.com",
      projectUrls: [],
      description: ["Debugged client projects solving issues with e-commerce websites in Adobe Magento using HTML, CSS, LESS, JavaScript, PHP, and MySQL",
        "Collaborated with mentor and other developers on a consistent basis about debugging internal ticket",
        "Documented JavaScript implementation and usage instructions of a new extension"],
      tools: ["Jira", "BitBucket", "Adobe Magento", "MySQL", "PHP", "JavaScript", "HTML", "CSS", "LESS"]
    },
    {
      jobTitle: "Summer Code Coach",
      companyName: "theCoderSchool",
      dateActive: "July 2022 - August 2022",
      companyUrl: "www.thecoderschool.com",
      projectUrls: [],
      description: ["Taught students from 6-15 years old in Python, HTML, CSS, JavaScript, and Lua through weekly summer camp",
        "Communicated with parents through emails multiple times a week"],
      tools: ["Python", "HTML", "CSS", "JavaScript", "Lua"],
    },
    {
      jobTitle: "Web Development Intern",
      companyName: "WolfTech",
      dateActive: "February 2022 - May 2022",
      companyUrl: "",
      projectUrls: [],
      description: ["Debugged website code for the electrical and computer engineering department at NC State",
        "Reported progress with department lead and other interns to complete tasks efficiently"
      ],
      tools: ["Laravel", "MySQL", "PHP", "JavaScript", "HTML", "CSS"],
    },
    {
      jobTitle: "Mobile Software Developer",
      companyName: "PLAYERSNEXT",
      dateActive: "August 2020 - December 2021",
      companyUrl: "www.playersnext.com",
      projectUrls: [],
      description: ["Developed mobile application for iOS and Android in Flutter (Dart)",
        "Learned communication skills when discussing project with colleagues and leaders",
        "Improved time management skills by meeting weekly deadlines and participating in weekly meetings"
      ],
      tools: ["Flutter", "Dart", "Firebase"],
    },
    {
      jobTitle: "Website Developer",
      companyName: "Eat, Ski, Live",
      dateActive: "April 2020 - July 2020",
      companyUrl: "https://www.eatskilive.com",
      projectUrls: [
        {
          title: "Website",
          url: "https://www.eatskilive.com",
        },
      ],
      description: ["Developed website for TV Series using a custom, modified WordPress theme using JavaScript, HTML, CSS, and PHP",
        "Maintained website database and blog posts"],
      tools: ["Laravel", "MySQL", "PHP", "JavaScript", "HTML", "CSS"],
    },
  ];
  constructor() { }

  getExperiences() {
    return this.experiences;
  }
}
