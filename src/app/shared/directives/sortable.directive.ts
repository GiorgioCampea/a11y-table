import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'th.sortable',
  standalone: true
})
export class SortableDirective {
  @HostBinding('class') elementClass = '';
  @HostBinding('attr.tabindex') tabindex = 0;

  protected _isSorted: boolean = false;
  @Input() set isSorted(value: boolean) {
    this._isSorted = value;
    this.getSortedClass();
  }
  protected _isAsc: boolean = false;
  @Input() set isAsc(value: boolean) {
    this._isAsc = value;
    this.getSortedClass();
  }

  private getSortedClass() {
    this.elementClass = '';
    if (!this._isSorted) {
      return;
    } 
    this.elementClass = `sorting_${this._isAsc ? 'asc' : 'desc'}`;
  }

}
