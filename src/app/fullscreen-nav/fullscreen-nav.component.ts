import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-fullscreen-nav',
  templateUrl: './fullscreen-nav.component.html',
  styleUrls: ['./fullscreen-nav.component.less']
})
export class FullscreenNavComponent {
  isShowing: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    this.isShowing = new BehaviorSubject<boolean>(false);
  }

  public getIsShowing(): Observable<boolean> {
    return this.isShowing.asObservable();
  }

  public toggle() {
    this.isShowing.next(!this.isShowing.getValue());

    // Update body class
    const body = document.getElementsByTagName('body')[0];
    if (this.isShowing.getValue())
      body.classList.add('modal-open');
    else
      body.classList.remove('modal-open');
  }
}
