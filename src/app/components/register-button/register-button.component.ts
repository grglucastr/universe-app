import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register-button',
  templateUrl: './register-button.component.html',
  styleUrls: ['./register-button.component.css']
})
export class RegisterButtonComponent {

  constructor(private router: Router){}

  redirectToPlanetForm():void {
    this.router.navigate(['/planet-form'])
  }
}
