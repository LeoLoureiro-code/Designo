import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDesignComponent } from './web-design.component';

describe('WebDesignComponent', () => {
  let component: WebDesignComponent;
  let fixture: ComponentFixture<WebDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebDesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
