import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects = [
    {
      projectTitle: "Endure Fitness",
      projectColor: "#000000",
      startDate: "August 2020",
      projectUrl: "/endure",
      featureImage: "./assets/endure/feature_graphic.png",
      description: "Endure a tough workout using the app that tracks your muscle goals week to week. Create workouts based on each part of each muscle to optimize growth. An analysis page breaks down what muscles need to be worked out for the week so that you can always stay on track.",
      tools: ["Flutter", "XCode", "Android Studio", "GitHub"]
    },
    {
      projectTitle: "Smartwatch Apps",
      projectColor: "#0088cb",
      startDate: "May 2020",
      projectUrl: "/smartwatch-apps",
      featureImage: "./assets/smartwatch-apps/cover-page.png",
      description: "Custom watchfaces and apps designed and developed for Fitbit and Garmin smartwatches showing in-depth fitness statistics, golf course tracking, and more!",
      tools: ["HTML", "CSS", "JavaScript", "Monkey C", "KiezelPay"]
    },
  ];
  constructor() { }

  getProjects() {
    return this.projects;
  }
}