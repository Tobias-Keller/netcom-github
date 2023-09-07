import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.less']
})
export class LoaderComponent {
  activeStatus: boolean = false;

  @Input() set active(value: boolean) {
    this.activeStatus = value;
    const body = document.getElementsByTagName("body")[0];
    if (value) {
      body.classList.add("noScroll");
    } else {
      body.classList.remove("noScroll");
    }
  }
}
