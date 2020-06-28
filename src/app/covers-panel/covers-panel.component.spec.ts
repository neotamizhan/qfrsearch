import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoversPanelComponent } from './covers-panel.component';

describe('CoversPanelComponent', () => {
  let component: CoversPanelComponent;
  let fixture: ComponentFixture<CoversPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoversPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoversPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
