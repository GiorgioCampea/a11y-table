import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableV3Component } from './table-v3.component';

describe('TableV3Component', () => {
  let component: TableV3Component;
  let fixture: ComponentFixture<TableV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableV3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
