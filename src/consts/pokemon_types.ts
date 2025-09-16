export interface PokemonTypeInfo{
    name:string,
    background: string,
    image: string,
}

export const PokemonTypes: PokemonTypeInfo[] = [
  { name: "normal",   background: "bg-gray-200",   image: "poke_types/Badge_18_01.png" },
  { name: "fire",     background: "bg-orange-500", image: "poke_types/Badge_27_01.png" },
  { name: "water",    background: "bg-blue-300",   image: "poke_types/Badge_28_01.png" },
  { name: "electric", background: "bg-yellow-400", image: "poke_types/Badge_30_01.png" },
  { name: "grass",    background: "bg-green-300",  image: "poke_types/Badge_29_01.png" },
  { name: "ice",      background: "bg-cyan-300",   image: "poke_types/Badge_32_01.png" },
  { name: "fighting", background: "bg-amber-800",  image: "poke_types/Badge_19_01.png" },
  { name: "poison",   background: "bg-purple-600", image: "poke_types/Badge_21_01.png" },
  { name: "ground",   background: "bg-amber-300",  image: "poke_types/Badge_22_01.png" },
  { name: "flying",   background: "bg-cyan-100",   image: "poke_types/Badge_20_01.png" },
  { name: "psychic",  background: "bg-purple-300", image: "poke_types/Badge_31_01.png" },
  { name: "bug",      background: "bg-green-200",  image: "poke_types/Badge_24_01.png" },
  { name: "rock",     background: "bg-amber-950",  image: "poke_types/Badge_23_01.png" },
  { name: "ghost",    background: "bg-gray-800",   image: "poke_types/Badge_25_01.png" },
  { name: "dragon",   background: "bg-purple-900", image: "poke_types/Badge_33_01.png" },
  { name: "dark",     background: "bg-black",      image: "poke_types/Badge_34_01.png" },
  { name: "steel",    background: "bg-gray-100",   image: "poke_types/Badge_26_01.png" },
  { name: "fairy",    background: "bg-pink-200",   image: "poke_types/Badge_35_01.png" },
];