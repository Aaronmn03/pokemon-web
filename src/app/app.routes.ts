import { Routes } from '@angular/router';
import { PokemonDetails } from './pokemon-details/pokemon-details';
import { PokemonList } from './pokemon-list/pokemon-list';
import { App } from './app';

export const routes: Routes = [
  { path: '', redirectTo: '/pokemons', pathMatch: 'full' }, // redirige al listado
  { path: 'pokemons', component: PokemonList },   // lista de pokémon
  { path: 'pokemon/:id', component: PokemonDetails }       // detalle por id
];
