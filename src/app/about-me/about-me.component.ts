import { Component } from '@angular/core';
import { ZoomInOutAnimation } from '../animations';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.less'],
  animations: [ZoomInOutAnimation]
})
export class AboutMeComponent {
  animationState: number = 0;

  ngOnInit() {
    this.animationState = 0;
  }

  showPopup(){
    this.animationState = 1;
  }

  hidePopup(){
    this.animationState = 0;
  }
}
