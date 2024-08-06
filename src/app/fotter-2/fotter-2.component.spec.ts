import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fotter2Component } from './fotter-2.component';

describe('Fotter2Component', () => {
  let component: Fotter2Component;
  let fixture: ComponentFixture<Fotter2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fotter2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Fotter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
