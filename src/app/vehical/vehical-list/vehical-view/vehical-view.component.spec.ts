import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicalViewComponent } from './vehical-view.component';

describe('VehicalViewComponent', () => {
  let component: VehicalViewComponent;
  let fixture: ComponentFixture<VehicalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicalViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
