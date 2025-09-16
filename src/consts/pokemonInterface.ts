import { PokemonTypeInfo } from "./pokemon_types"

export interface PokemonInterface{
    id: number,
    name: string,
    types: PokemonTypeInfo[] | undefined,
    image: string | undefined,
}