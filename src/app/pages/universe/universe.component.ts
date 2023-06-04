import { Router } from '@angular/router';
import { Planet } from 'src/app/models/planet';
import { PlanetService } from './../../services/planet/planet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-universe',
  templateUrl: './universe.component.html',
  styleUrls: ['./universe.component.css']
})
export class UniverseComponent implements OnInit {

  planets: Planet[] = [];
  filteredPlanets: Planet[] = [];

  constructor(private planetService: PlanetService, private router: Router){}
  
  ngOnInit(): void {
    this.planetService.listAll().subscribe((planets) => {
      this.planets = planets;
      this.filteredPlanets = planets;
    });
  }

  goToDetails(id: number){
    const detailRedirection = `/planets/${id}`;
    this.router.navigate([detailRedirection]);
  }

  onSearchUniverse(term: string){
    this.filteredPlanets = this.planets.filter(planet => planet.name.includes(term));
  }

}
