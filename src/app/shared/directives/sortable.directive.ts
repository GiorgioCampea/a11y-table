import { Directive, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';
import { SortableOrderType } from '../types/sortable-order.type';

@Directive({
  selector: '[appSortable]',
  standalone: true
})
export class SortableDirective {
  @HostBinding('attr.aria-sortable') sortedValue: SortableOrderType | null = null;

  @Input() set isSorted(value: boolean) {
    this.getSortedValue();
  }
  private _order: SortableOrderType = 'asc';
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
