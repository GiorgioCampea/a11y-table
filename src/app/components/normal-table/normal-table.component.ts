import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PaginatorComponent } from '../../shared/components/paginator/paginator.component';

@Component({
  selector: 'app-normal-table',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    PaginatorComponent
  ],
  templateUrl: './normal-table.component.html',
  encapsulation: ViewEncapsulation.None
})
export class NormalTableComponent {
  public currentPage = 1;
  public search$ = this.pokemonService.getAll(this.currentPage);
  constructor(private pokemonService: PokemonService) {
  }

  changePage(newPage: number) {
    this.currentPage = newPage;
    this.search$ = this.pokemonService.getAll(this.currentPage);
  }
}
