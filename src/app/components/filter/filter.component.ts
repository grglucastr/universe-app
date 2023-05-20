import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  
  constructor(private router: Router){}
  
  redirectToPlanetForm():void {
    this.router.navigate(['/planet-form'])
  }
}
