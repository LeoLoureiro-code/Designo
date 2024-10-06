import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsNavComponent } from './locations-nav.component';

describe('LocationsNavComponent', () => {
  let component: LocationsNavComponent;
  let fixture: ComponentFixture<LocationsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationsNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
