import { Planet } from './../../models/planet';
import { PlanetService } from './../../services/planet/planet.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-planet-form',
  templateUrl: './planet-form.component.html',
  styleUrls: ['./planet-form.component.css']
})
export class PlanetFormComponent {

  planet:Planet = {
    name: '',
    mass: '',
  }

  constructor(
    private router: Router, 
    private service:PlanetService){}

  save(){
    this.service.post(this.planet).subscribe(() => {
      this.router.navigate(['/universe'])
    });
  }

  returnToHome(){
    this.router.navigate(['']);
  }
}
