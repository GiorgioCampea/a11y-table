import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibleSortableTableComponent } from './accessible-sortable-table.component';

describe('AccessibleSortableTableComponent', () => {
  let component: AccessibleSortableTableComponent;
  let fixture: ComponentFixture<AccessibleSortableTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessibleSortableTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccessibleSortableTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
