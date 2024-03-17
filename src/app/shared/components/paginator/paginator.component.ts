import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { filter, map, range, tap } from 'rxjs';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent implements OnInit, OnChanges, OnDestroy {
  /**
   * output emitted when page is changed
   */
  @Output() changePage = new EventEmitter<number>;
  /**
   * input showing the page visualized
   */
  @Input() currentPage: number = 0;
  /**
   * input for the total research pages
   */
  @Input() totalPages: number = 0;
  /**
   * input for choose the delta of visible pages
   */
  @Input() range = 5;

  //#region lifecycle hooks


  ngOnInit() {
    this.getPages();
  }

  ngOnChanges() {
    this.getPages();
  }

  ngOnDestroy() {

  }

  //#endregion

  visiblePages: number[] = [];

  goToPage(page: '-1' | '+1' | number) {
    if (page === '-1') {
      return this.changePage.emit(this.currentPage - 1)
    }
    if (page === '+1') {
      return this.changePage.emit(this.currentPage + 1);
    }
    return this.changePage.emit(page);
  }

  getPages() {
    this.visiblePages = [];
    let rangeNumber = this.range;
    let rangeNumberMax = this.range * 2 + 1;
    if (this.currentPage >= this.range) {
      rangeNumber = Math.floor(this.range / 2);
      rangeNumberMax = Math.floor(this.range / 2) * 2 + 1;
    } else {
      rangeNumberMax = (this.range - Math.floor((this.currentPage - 1) / 2)) * 2 + 1;
    }
    // console.log('rangeNumberMax', rangeNumberMax);
    // console.log('rangeNumber', rangeNumber);
    range(-rangeNumber, rangeNumberMax)
      .pipe(
        // tap((res: number) => console.log('primo tap', res)),
        map((res: number) => this.currentPage + res),
        // tap((res: number) => console.log('secondo tap', res)),
        filter(page => this.isValidPageNumber(page, this.totalPages)),
        // tap((res: number) => console.log(res)),
        tap((page: number) => this.visiblePages = [...this.visiblePages, page])
      ).subscribe();
  }

  isValidPageNumber(page: number, totalPages: number): boolean {
    return page > 0 && page <= totalPages;
  }

  getCurrentPage(offset: number, numberForPage: number): number {
    return Math.floor(offset / numberForPage);
  }

  getTotalPages(numberForPage: number, totalNumber: number): number {
    return Math.ceil(Math.max(totalNumber, 1) / Math.max(numberForPage, 1));
  }
}
