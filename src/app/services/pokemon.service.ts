import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, map } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { PokemonConverter } from '../converters/pokemon.converter.service';
import { PokemonDto } from '../dtos/pokemon.dto';
import { SearchDto } from '../dtos/search.dto';
import { PokemonModel } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private entityName = 'pokemon';

  constructor(private httpClient: HttpClient, private pokemonConverter: PokemonConverter) { }

  getAll(page: number, sortName = '', isAscending = true, pageSize = 20): Observable<SearchDto<PokemonModel>> {
    let url = `${environment.apiUrl}/${this.entityName}?_page=${page}&_per_page=${pageSize}`;
    if (sortName) {
      url = `${url}&_sort=${isAscending ? '' : '-'}${sortName}`;
    }
    return this.httpClient.get<SearchDto<PokemonDto>>(url).pipe(
      delay(400),
      map(dto => ({
        ...dto,
        data: dto.data.map(el => {
          return this.pokemonConverter.convertToModel(el)
        })
      }
      )));
  }
}
