import { Directive, HostBinding, Input } from '@angular/core';
import { SortableOrderType } from '../types/sortable-order.type';
import { SortableDirective } from './sortable.directive';

@Directive({
  selector: '.accessible th.sortable',
  standalone: true,
  hostDirectives: [{
    directive: SortableDirective,
    inputs: ['menuId'],
    outputs: ['menuClosed'],
  }],
})
export class AccessibileSortableDirective {
  @HostBinding('attr.class') sortedValue: SortableOrderType | null = null;

  @Input() set isSorted(value: boolean) {
    this.getSortedValue();
  }
  private _order: SortableOrderType = 'ascending';
  @Input() set sortableOrder(value: SortableOrderType) {
    this._order = value;
    this.getSortedValue();
  }

  private getSortedValue() {
    this.sortedValue = null;
    if (!this.isSorted) {
      return;
    }
    this.sortableOrder = this._order;
  }

}
