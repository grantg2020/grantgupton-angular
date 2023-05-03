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
  animationState: number[] = [];

  constructor(private experienceService: ExperienceService) {

  }

  ngOnInit() {
    this.items = this.experienceService.getExperiences();

    // init animation states
    for (let index = 0; index < this.items.length; index++) {
      this.animationState.push(0);
    }
  }

  /**
   * Toggles an accordion tab
   * @param index index of accordion tab to animate
   */
  toggleAccordionTab(index: number) {
    // Check for invalid index
    if (index < 0 || index >= this.animationState.length) return;

    // Toggle animation state
    this.animationState[index] = this.animationState[index] ? 0 : 1;
    // Close everything else
    for (let i = 0; i < this.animationState.length; i++) {
      if (i != index)
        this.animationState[i] = 0;
    }
  }
}
