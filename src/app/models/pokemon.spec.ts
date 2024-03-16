import { PokemonModel } from './pokemon';

describe('Pokemon', () => {
  it('should create an instance', () => {
    expect(new PokemonModel()).toBeTruthy();
  });
});
