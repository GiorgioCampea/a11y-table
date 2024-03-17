import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common'
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
  styleUrl: './normal-table.component.scss'
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
