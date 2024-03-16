import { environment } from "../../environments/environment";

export class PokemonModel {
    /**
     * default constructor
     */
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


    get imageUrl(): string {
        return `${environment.apiUrl}/images/${ this.id?.toString().padStart(3, '0')}.png`;
    }
}
