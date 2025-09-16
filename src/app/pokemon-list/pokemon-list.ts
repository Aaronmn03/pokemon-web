import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';
import { PokemonSelect } from './pokemon-select/pokemon-select';



@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonSelect],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css'
})
export class PokemonList implements OnInit{
  pokemonData: any = [];

  constructor(private pokeService: PokemonService){}
  
  getPokemon(){
    this.pokeService.fetchPokemon().subscribe({
      next: data => {
        this.pokemonData = data;
      },
      error: err => console.error("Se ha encontrado un error mientras se obtenian los pokemon", err)
    })
    
  }

  ngOnInit(){
    this.getPokemon()
  }
}
