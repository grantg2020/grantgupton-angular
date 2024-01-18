import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SmartwatchAppService {
  private fitbitApps = [
    {
      title: "Daily",
      description: "Get stats on your recent daily activity with this easy to use app! See past data about your steps, distance, calories, and more, It even shows the data in green if you reached your goal for each data.",
      url: "https://gallery.fitbit.com/details/6f33822e-d71d-43be-a9a7-de8ff4cae516",
      icon: "assets/smartwatch-apps/daily/icon.png",
      projectImages: ["assets/smartwatch-apps/daily/screenshot-1.png"],
    },
    {
      title: "Me",
      description: "Get a quick glance of all your personal stats like resting heart rate, stride length, and other health information.",
      url: "https://gallery.fitbit.com/details/149e1c11-4405-4d9d-a4e3-f9bc8d920cd1",
      icon: "assets/smartwatch-apps/me/icon.png",
      projectImages: ["assets/smartwatch-apps/me/screenshot-1.png"],
    },
    {
      title: "Find My Car",
      description: "Using the built-in GPS on Ionic and Connected GPS on the Versa series, you can save your car's location and never get lost in the parking lot again.",
      url: "https://gallery.fitbit.com/details/3d56f2b6-2189-429c-a169-242d5930856e",
      icon: "assets/smartwatch-apps/find-my-car/icon.png",
      projectImages: ["assets/smartwatch-apps/find-my-car/screenshot-1.png"],
    },
    {
      title: "Golf Caddy",
      description: "Keep track of your shots with Golf Caddy! Track each stroke as you play each hole on the golf course. Find out how far you are hitting the ball each time you swing.",
      url: "https://gallery.fitbit.com/details/71075369-b3b5-4bfe-a907-779d30789dbd",
      icon: "assets/smartwatch-apps/golf-caddy/icon.png",
      projectImages: ["assets/smartwatch-apps/golf-caddy/screenshot-1.png"],
    },
    {
      title: "Progress",
      description: "This app shows your current daily activity measured against where you should be based on the time of day to keep you on track to achieve your daily goals.",
      url: "https://gallery.fitbit.com/details/0eaf984b-bbe4-4c95-a1ec-3636a5d11df6",
      icon: "assets/smartwatch-apps/progress/icon.png",
      projectImages: ["assets/smartwatch-apps/progress/screenshot-1.png"],
    },
    {
      title: "Dashboard Face",
      description: "This watch face is a modern way to show your progress on daily goals, time and date, and your battery level. Also shows your heart rate and your primary goal data. You can also see your progress on doubling your goal! A golden arc will cover up the first arc as you get in steps, calories, and more!",
      url: "https://gallery.fitbit.com/details/81375c8d-c40a-4231-a0fe-dff8b26002b2",
      icon: "",
      projectImages: ["assets/smartwatch-apps/dashboard-fitbit/screenshot-1.png"],
    },
    {
      title: "Spinner Face",
      description: "This simple clockface displays the time in a modern fashion. There are spinners to show the time in hours, minutes, and seconds. Easily pick between 6 different color schemes to customize your clockface!",
      url: "https://gallery.fitbit.com/details/247bc932-ea59-4fa7-99d8-b8127326cf10",
      icon: "",
      projectImages: ["assets/smartwatch-apps/spinner/screenshot-1.png"],
    },
    {
      title: "Info Face",
      description: "This watch face that shows the time, date, steps, heart rate, calories burned, and active minutes. The heart rate and activities change color based on current status. You can also upload a picture to set the background and change the color of the text.",
      url: "https://gallery.fitbit.com/details/9ce79340-8b14-4793-8e81-2e655e57e28f",
      icon: "",
      projectImages: ["assets/smartwatch-apps/info-face/screenshot-1.png"],
    },
  ];

  private garminApps = [
    {
      title: "Dashboard",
      description: "Your favorite Fitbit watchface comes to Garmin! See realtime stats as you reach your step and activity goals, floors climbed and more.",
      url: "https://apps.garmin.com/en-US/apps/1a764a3f-e256-4742-81ce-c2f7fb858347",
      icon: "./assets/smartwatch-apps/dashboard-garmin/icon.png",
      projectImages: ["assets/smartwatch-apps/dashboard-garmin/screenshot-1.png"],
    }
  ];

  constructor() { }

  getFitbitApps(){
    return this.fitbitApps;
  }

  getGarminApps() {
    return this.garminApps;
  }
}
