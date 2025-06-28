import { Component } from '@angular/core';
import { SlideInOutAnimation } from '../animations';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.less'],
  animations: [SlideInOutAnimation]
})
export class MusicComponent {

}
