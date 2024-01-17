import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SmartwatchAppService {
  private apps = [
    {
      title: "Daily",
      description: "",
      url: "",
      icon: "",
      projectImages: [],
    }
  ];

  constructor() { }

  getSmartwatchApps(){

  }
}
