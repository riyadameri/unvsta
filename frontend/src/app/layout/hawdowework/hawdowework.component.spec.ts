import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HawdoweworkComponent } from './hawdowework.component';

describe('HawdoweworkComponent', () => {
  let component: HawdoweworkComponent;
  let fixture: ComponentFixture<HawdoweworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HawdoweworkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HawdoweworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
