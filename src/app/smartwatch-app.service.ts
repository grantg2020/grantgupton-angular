import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SmartwatchAppService {
  private fitbitApps = [
    {
      title: "Daily",
      description: "",
      url: "",
      icon: "",
      projectImages: [],
    }
  ];
  private garminApps = [
    {
      title: "Daily",
      description: "",
      url: "",
      icon: "",
      projectImages: [],
    }
  ];

  constructor() { }

  getFitbitApps(){

  }

  getGarminApps() {

  }
}
