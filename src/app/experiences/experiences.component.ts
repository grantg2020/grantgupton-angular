import { Component } from '@angular/core';
import { ExperienceService } from '../experience.service';
import { ExperienceComponent } from '../experience/experience.component';
import { SlideInOutAnimation } from '../animations';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.less'],
  animations: [SlideInOutAnimation],
})
export class ExperiencesComponent {
  items: ExperienceComponent[] = [];
  animationState: string[] = [];

  constructor(private experienceService: ExperienceService) {

  }

  ngOnInit() {
    this.items = this.experienceService.getExperiences();
    // init animation states
    for (let index = 0; index < this.items.length; index++) {
      this.animationState.push('out');
    }
  }
}
