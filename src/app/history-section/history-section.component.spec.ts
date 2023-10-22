import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorySectionComponent } from './history-section.component';

describe('HistorySectionComponent', () => {
  let component: HistorySectionComponent;
  let fixture: ComponentFixture<HistorySectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistorySectionComponent]
    });
    fixture = TestBed.createComponent(HistorySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
