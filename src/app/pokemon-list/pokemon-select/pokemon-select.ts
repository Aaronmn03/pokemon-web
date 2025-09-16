import { Component, OnChanges } from '@angular/core';
import { Input } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';
import {PokemonTypes} from '../../../consts/pokemon_types'
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'

@Component({
  selector: 'app-pokemon-select',
  imports: [CommonModule],
  templateUrl: './pokemon-select.html',
  styleUrl: './pokemon-select.css'
})
export class PokemonSelect implements OnChanges{
  @Input() pokemon: any;
  pokemonData: any;
  background: string | undefined;
  icon: string | undefined;

  constructor(private pokeService: PokemonService, private router: Router){}

  ngOnChanges(){
    this.getPokemonByURL()
  }

  getPokemonByURL(){
    this.pokeService.fetchPokemonByURL(this.pokemon.url).subscribe({
      next: data => {this.pokemonData = data;
        const typeData = PokemonTypes.find(t => t.name === this.pokemonData.types[0].type.name);
        this.background = typeData?.background
        this.icon = typeData?.image
      },
      error: err => console.error("Se ha encontrado un error buscando a un pokemon:", err),
    })
  }

  getPokemonId(): number {
    const parts = this.pokemon.url.split('/'); // ["https:", "", "pokeapi.co", "api", "v2", "pokemon", "1", ""]
    return Number(parts[6]); // el 6º elemento es el ID
  }

  selectPokemon(){
    this.router.navigate(['pokemon/', this.getPokemonId().toString()], {state: {pokemon: this.pokemonData, background: this.background}})
  }
}
