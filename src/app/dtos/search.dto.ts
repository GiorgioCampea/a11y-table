export interface SearchDto<PokemonDto> {
    first: number;
    prev: number;
    next: number;
    last: number;
    pages: number;
    items: number;
    data: PokemonDto[];
}