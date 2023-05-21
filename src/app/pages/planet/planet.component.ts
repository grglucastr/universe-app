import { ActivatedRoute, Router } from '@angular/router';
import { Planet } from './../../models/planet';
import { PlanetService } from './../../services/planet/planet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit{
  
  planet:Planet = {
    mass: '',
    name: ''
  }

  constructor(private service: PlanetService, private router:Router, private route:ActivatedRoute){}
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.findById(parseInt(id!)).subscribe((planet) => {
      this.planet = planet;
    });
  }

  returnToHome(){
    this.router.navigate(['/universe']);
  }

  deletePlanet(){
    const id = this.route.snapshot.paramMap.get('id');
    this.service.delete(parseInt(id!)).subscribe(() => {
      this.router.navigate(['/universe']);
    })
  }

  editPlanet(){
    const id = this.route.snapshot.paramMap.get('id');
    const editForm = `/planets-edit/${id}`;
    this.router.navigate([editForm]);
  }
}
