import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less']
})
export class SearchBarComponent {
  @Output() searchName: EventEmitter<string> = new EventEmitter<string>();
  searchInput: string = "";

  startSearch() {
    this.searchName.emit(this.searchInput)
  }
}
