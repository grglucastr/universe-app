import { Router } from '@angular/router';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  
  @Output() 
  onSearch = new EventEmitter<string>();

  searchInput: string = '';

  constructor(private router: Router){}
  
  onTextChange(){
    this.onSearch.emit(this.searchInput);
  }

  
}
