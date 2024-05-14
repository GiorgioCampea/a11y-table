import { Directive, HostBinding, Input } from '@angular/core';
import { SortableDirective } from './sortable.directive';

@Directive({
  selector: 'th.sortable.accessible',
  standalone: true,
  hostDirectives: [{
    directive: SortableDirective,
    inputs: ['isSorted', 'isAsc'],
  }],
})
export class AccessibileSortableDirective {
  @HostBinding('attr.aria-sort') sortedValue: 'ascending' | 'descending' | null = null;
  @HostBinding('attr.tabindex') tabindex = null;

  protected _isSorted: boolean = false;
  @Input() set isSorted(value: boolean) {
    this._isSorted = value;
    this.getSortValue();
  }
  protected _isAsc: boolean = false;
  @Input() set isAsc(value: boolean) {
    this._isAsc = value;
    this.getSortValue();
  }

  private getSortValue() {
    this.sortedValue = null;
    if (!this._isSorted) {
      return;
    } 
    if (this._isAsc) {
    }
    this.sortedValue = this._isAsc ? 'ascending' : 'descending';
  }

}
