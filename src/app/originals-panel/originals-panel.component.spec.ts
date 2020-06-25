import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginalsPanelComponent } from './originals-panel.component';

describe('OriginalsPanelComponent', () => {
  let component: OriginalsPanelComponent;
  let fixture: ComponentFixture<OriginalsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriginalsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginalsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
