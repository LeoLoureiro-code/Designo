import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicDesignComponent } from './graphic-design.component';

describe('GraphicDesignComponent', () => {
  let component: GraphicDesignComponent;
  let fixture: ComponentFixture<GraphicDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicDesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
