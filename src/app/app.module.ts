import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card'; 
import {MatIconModule} from '@angular/material/icon'; 

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { UniverseComponent } from './pages/universe/universe.component';
import { FilterComponent } from './components/filter/filter.component';
import { PlanetFormComponent } from './pages/planet-form/planet-form.component';
import { PlanetComponent } from './pages/planet/planet.component';
import { PlanetEditFormComponent } from './pages/planet-edit-form/planet-edit-form.component';
import { RegisterButtonComponent } from './components/register-button/register-button.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    UniverseComponent,
    FilterComponent,
    PlanetFormComponent,
    PlanetComponent,
    PlanetEditFormComponent,
    RegisterButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
