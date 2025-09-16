import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../service/pokemon.service';
import { CommonModule } from '@angular/common';
import { PokemonTypes } from '../../consts/pokemon_types';
import { Router } from '@angular/router'
import { PokemonDetailsSprites } from "./pokemon-details-sprites/pokemon-details-sprites";
import { PokemonDetailsTypes } from './pokemon-details-types/pokemon-details-types';
import { PokemonDetailsEvolutions } from './pokemon-details-evolutions/pokemon-details-evolutions';

@Component({
  selector: 'app-pokemon-details',
  standalone:true,
  imports: [CommonModule, PokemonDetailsSprites, PokemonDetailsTypes, PokemonDetailsEvolutions],
  templateUrl: './pokemon-details.html',
  styleUrl: './pokemon-details.css'
})
export class PokemonDetails implements OnInit{
  pokemonData: any;
  background: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private pokeService: PokemonService,
    private router: Router,
  ){}

  ngOnInit(): void {
      this.pokemonData = history.state.pokemon
      this.background = history.state.background

      this.route.paramMap.subscribe(paramMap => {
          const id = paramMap.get('id');
          if (id && (!this.pokemonData || this.pokemonData.id !== +id)) {
            this.pokeService.fetchPokemonByID(id).subscribe({
              next: data => {
                this.pokemonData = data;
                this.background = PokemonTypes.find(t => t.name === this.pokemonData.types[0].type.name)?.background
              },
              error: err => console.error('Error al obtener Pokémon:', err)
            });
          }
        });
  }

  previusPokemon(){
    this.router.navigate(['pokemon/', (this.pokemonData.id - 1).toString()])
  }

  nextPokemon(){
    this.router.navigate(['pokemon/', (this.pokemonData.id + 1).toString()])
  }
  home(){
    this.router.navigate(['pokemons/'])
  }
}
