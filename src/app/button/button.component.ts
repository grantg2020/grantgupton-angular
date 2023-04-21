import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent {
  @Input() inverted = false
  @Input() special = false
  @Input() fullWidth = false
  @Input() content = ''
}
