import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiddgetAComponent } from './widdget-a.component';

describe('WiddgetAComponent', () => {
  let component: WiddgetAComponent;
  let fixture: ComponentFixture<WiddgetAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiddgetAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiddgetAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
