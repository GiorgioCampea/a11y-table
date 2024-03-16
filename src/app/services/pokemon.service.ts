import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable, map } from 'rxjs';
import { PokemonDto } from '../dtos/pokemon.dto';
import { PokemonModel } from '../models/pokemon';
import { PokemonConverter } from '../converters/pokemon.converter.service';
import { SearchDto } from '../dtos/search.dto';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private entityName = 'pokemon';

  constructor(private httpClient: HttpClient, private pokemonConverter: PokemonConverter) { }

  getAll(): Observable<SearchDto<PokemonModel>> {
    return this.httpClient.get<SearchDto<PokemonDto>>(`${environment.apiUrl}/${this.entityName}?_page=1&_per_page=20`).pipe(
      map(dto => ({
        ...dto,
        data: dto.data.map(el => {
          return this.pokemonConverter.convertToModel(el)
        })
      }
      )));
  }
}
