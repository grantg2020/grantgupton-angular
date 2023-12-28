import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent {
  @Input() inverted:boolean = false
  @Input() special:boolean = false
  @Input() fullWidth:boolean = false
  @Input() href:string|null = null
  @Input() target:string = ''
  @Input() content:string = ''

  // if(href != '' && content != ''){
  //   throw Exception("Conflicting links, make sure that href or content do not both contain values");
  // }
}
