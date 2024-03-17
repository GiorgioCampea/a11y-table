import { Injectable } from "@angular/core";
import { PokemonDto } from "../dtos/pokemon.dto";
import { PokemonModel } from "../models/pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonConverter {

  convertToDto(model: PokemonModel): PokemonDto {
    return new PokemonDto(model.id,
      model.name,
      model.type,
      model.base);
  }

  convertToModel(dto: PokemonDto): PokemonModel {
    return new PokemonModel(dto.id,
      dto.name,
      dto.type,
      dto.base);
  }
}