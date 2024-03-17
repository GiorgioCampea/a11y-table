export class PokemonDto {
    constructor(
        public id?: number,
        public name?: {
            english: string,
            japanese: string,
            chinese: string,
            french: string
        },
        public type?: string[],
        public base?: {
            hp: number,
            attack: number,
            defense: number,
            specialAttack: number,
            specialDefense: number,
            speed: number
        }) {
    }
}