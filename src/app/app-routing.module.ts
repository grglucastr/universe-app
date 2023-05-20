import { UniverseComponent } from './pages/universe/universe.component';
import { PlanetFormComponent } from './pages/planet-form/planet-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: UniverseComponent, pathMatch:'full' },
  { path: 'planet-form', component: PlanetFormComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
