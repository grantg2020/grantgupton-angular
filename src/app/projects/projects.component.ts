import { Component } from '@angular/core';
import { ProjectComponent } from '../project/project.component';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent {
  items: ProjectComponent[] = [];

  constructor(private projectService: ProjectService) {

  }

  ngOnInit() {
    this.items = this.projectService.getProjects();
  }
}
