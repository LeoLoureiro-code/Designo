import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDesignComponent } from './app-design.component';

describe('AppDesignComponent', () => {
  let component: AppDesignComponent;
  let fixture: ComponentFixture<AppDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
