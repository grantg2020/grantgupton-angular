import { Component, Input, ViewChild } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  
})
export class HomeComponent {
  @ViewChild(AboutMeComponent) child:AboutMeComponent|null = null;

  showPopup(){
    if(this.child != null){
      this.child.showPopup();
    }
  }
}
