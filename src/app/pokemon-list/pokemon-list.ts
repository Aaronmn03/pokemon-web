import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';
import { PokemonSelect } from './pokemon-select/pokemon-select';
import { GENERATIONS } from '../../consts/generations';
import { GenerationSelect } from "./generation-select/generation-select";

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonSelect, GenerationSelect],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css'
})

export class PokemonList implements OnInit{
  pokemonData: any = [];
  GENERATIONS = GENERATIONS

  constructor(private pokeService: PokemonService){}
  
  getPokemon(limit: string, offset:string){
    this.pokeService.fetchPokemon(limit, offset).subscribe({
      next: data => {
        this.pokemonData = data;
      },
      error: err => console.error("Se ha encontrado un error mientras se obtenian los pokemon", err)
    })
  }

  handleGeneration(genName: string) {
    const generation = GENERATIONS.find(gen => gen.name === genName)
    if(generation){
      const {limit, offset} = generation
      this.getPokemon(limit.toString(), offset.toString())
    }
  }

  ngOnInit(){
    this.getPokemon("151","0")
  }
}
