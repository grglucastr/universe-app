import { PlanetComponent } from './pages/planet/planet.component';
import { UniverseComponent } from './pages/universe/universe.component';
import { PlanetFormComponent } from './pages/planet-form/planet-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'universe', pathMatch:'full' },
  { path: 'universe', component: UniverseComponent },
  { path: 'planet-form', component: PlanetFormComponent },
  { path: 'planets/:id', component: PlanetComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
