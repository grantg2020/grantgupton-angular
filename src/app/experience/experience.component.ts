import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.less']
})
export class ExperienceComponent {
  @Input() jobTitle: string = "";
  @Input() companyName: string = "";
  @Input() companyUrl: string = "";
  @Input() description: string[] = [];
  @Input() dateActive: string = "";
  @Input() tools: string[] = [];
  @Input() important: boolean = false;
  @Input() projectUrls: { title: string; url: string; }[] = [];
}
