import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContnatctComponent } from './contnatct.component';

describe('ContnatctComponent', () => {
  let component: ContnatctComponent;
  let fixture: ComponentFixture<ContnatctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContnatctComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContnatctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
