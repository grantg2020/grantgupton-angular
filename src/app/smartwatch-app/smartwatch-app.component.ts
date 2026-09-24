import { Component, Input } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-smartwatch-app',
  templateUrl: './smartwatch-app.component.html',
  styleUrls: ['./smartwatch-app.component.less']
})
export class SmartwatchAppComponent {
  @Input() title: string = "";
  @Input() description: string = "";
  @Input() url: string = "";
  @Input() icon: string = "";
  @Input() projectImages: string[] = [];
}
