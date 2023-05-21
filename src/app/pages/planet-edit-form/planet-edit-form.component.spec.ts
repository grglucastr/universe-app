import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetEditFormComponent } from './planet-edit-form.component';

describe('PlanetEditFormComponent', () => {
  let component: PlanetEditFormComponent;
  let fixture: ComponentFixture<PlanetEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
