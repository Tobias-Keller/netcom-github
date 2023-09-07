import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.less']
})
export class StatusBarComponent {
  @Input() statusMessage: string = "";
  @Input() isError: boolean = false;

}
