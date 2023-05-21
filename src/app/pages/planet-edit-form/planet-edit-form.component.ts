import { Router, ActivatedRoute } from '@angular/router';
import { PlanetService } from 'src/app/services/planet/planet.service';
import { Planet } from './../../models/planet';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planet-edit-form',
  templateUrl: './planet-edit-form.component.html',
  styleUrls: ['./planet-edit-form.component.css']
})
export class PlanetEditFormComponent implements OnInit {
  
  planet:Planet = {
    name: '',
    mass: ''
  };

  constructor(
    private service: PlanetService,
    private router: Router,
    private route: ActivatedRoute){}
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.findById(parseInt(id!)).subscribe((planet) => {
      this.planet = planet;
    });
  }

  save(){
    this.service.edit(this.planet).subscribe(() => {
      const detailUrl = `/planets/${this.planet.id}`;
      this.router.navigate([detailUrl]);
    });
  }

  returnToDetail(){
    const detailUrl = `/planets/${this.planet.id}`;
    this.router.navigate([detailUrl]);
  }

  



}
