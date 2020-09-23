import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiddgetBComponent } from './widdget-b.component';

describe('WiddgetBComponent', () => {
  let component: WiddgetBComponent;
  let fixture: ComponentFixture<WiddgetBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiddgetBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiddgetBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
