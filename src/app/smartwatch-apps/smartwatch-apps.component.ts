import { Component } from '@angular/core';
import { SmartwatchAppService } from '../smartwatch-app.service';
import { SmartwatchAppComponent } from '../smartwatch-app/smartwatch-app.component';

@Component({
  selector: 'app-smartwatch-apps',
  templateUrl: './smartwatch-apps.component.html',
  styleUrls: ['./smartwatch-apps.component.less']
})
export class SmartwatchAppsComponent {
  fitbitApps: SmartwatchAppComponent[] = [];
  garminApps: SmartwatchAppComponent[] = [];

  constructor(private smartwatchAppsService: SmartwatchAppService){}

  ngOnInit() {
    this.fitbitApps = this.smartwatchAppsService.getFitbitApps();
    this.garminApps = this.smartwatchAppsService.getGarminApps();
  }
}
