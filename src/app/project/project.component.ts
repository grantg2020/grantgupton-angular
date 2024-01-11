import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.less']
})
export class ProjectComponent {
  @Input() projectTitle: string = "";
  @Input() startDate: string = "";
  @Input() projectUrl: string = "";
  @Input() description: string = "";
  @Input() tools: string[] = [];
  @Input() featureImage: string = "";
  @Input() projectColor: string = "";
}
