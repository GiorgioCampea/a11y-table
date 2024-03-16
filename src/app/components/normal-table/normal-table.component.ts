import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-normal-table',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  templateUrl: './normal-table.component.html',
  styleUrl: './normal-table.component.scss'
})
export class NormalTableComponent {
  public search$ = this.pokemonService.getAll();
  constructor(private pokemonService: PokemonService) {
  }
}
