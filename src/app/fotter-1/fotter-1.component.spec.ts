import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fotter1Component } from './fotter-1.component';

describe('Fotter1Component', () => {
  let component: Fotter1Component;
  let fixture: ComponentFixture<Fotter1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fotter1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Fotter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
