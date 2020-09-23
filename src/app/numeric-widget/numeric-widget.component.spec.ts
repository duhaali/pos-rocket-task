import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericWidgetComponent } from './numeric-widget.component';

describe('NumericWidgetComponent', () => {
  let component: NumericWidgetComponent;
  let fixture: ComponentFixture<NumericWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumericWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
