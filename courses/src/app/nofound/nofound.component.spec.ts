import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NofoundComponent } from './nofound.component';

describe('NofoundComponent', () => {
  let component: NofoundComponent;
  let fixture: ComponentFixture<NofoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NofoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NofoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
