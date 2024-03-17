import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PaginatorComponent } from '../../shared/components/paginator/paginator.component';
import { SortableDirective } from '../../shared/directives/sortable.directive';
import { EntityPropertyValuePipe } from '../../shared/pipes/entity-property-value.pipe';

@Component({
  selector: 'app-sortable-table',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    PaginatorComponent,
    EntityPropertyValuePipe,
    SortableDirective
  ],
  templateUrl: './sortable-table.component.html',
  styleUrl: './sortable-table.component.scss'
})
export class SortableTableComponent {
  public currentPage = 1;
  public search$ = this.pokemonService.getAll(this.currentPage);
  orderColumn = '';
  isAscending = true;
  tableColumn = [
    {
      name: '#',
      property: 'id',
      type: 'string',
      main: true
    },
    {
      name: 'Photo',
      property: 'imageUrl',
      type: 'image'
    },
    {
      name: 'Name',
      property: 'name.english',
      type: 'string',
      sortable: true
    },
    {
      name: 'Hp',
      property: 'base.hp',
      type: 'string',
      sortable: true
    },
    {
      name: 'Defense',
      property: 'base.defense',
      type: 'string',
      sortable: true
    },
    {
      name: 'Speed',
      property: 'base.speed',
      type: 'string',
      sortable: true
    }
  ];
  constructor(private pokemonService: PokemonService) { }

  changePage(newPage: number) {
    this.currentPage = newPage;
    this.search$ = this.pokemonService.getAll(this.currentPage);
  }

  changeSort(columnName: string) {
    if (this.orderColumn === columnName) {
      this.isAscending = !this.isAscending;
    } else {
      this.isAscending = true;
    }
    this.orderColumn = columnName;
    this.search$ = this.pokemonService.getAll(this.currentPage, columnName, this.isAscending);
  }
}
