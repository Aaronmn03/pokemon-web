import { Component, OnChanges } from '@angular/core';
import { Input } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';
import {typeColors} from '../../consts/type-colour'

@Component({
  selector: 'app-pokemon-select',
  imports: [],
  templateUrl: './pokemon-select.html',
  styleUrl: './pokemon-select.css'
})
export class PokemonSelect implements OnChanges{
  @Input() pokemon: any;
  pokemonData: any;
  background: string = '';

  constructor(private pokeService: PokemonService){}

  ngOnChanges(){
    this.getPokemonByURL()
  }

  getPokemonByURL(){
    this.pokeService.fetchPokemonByURL(this.pokemon.url).subscribe({
      next: data => {this.pokemonData = data;
        this.background = typeColors[this.pokemonData.types[0].type.name]
      },
      error: err => console.error("Se ha encontrado un error buscando a un pokemon:", err),
    })
  }
}
