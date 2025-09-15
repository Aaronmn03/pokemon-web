import { Component, OnInit } from '@angular/core';
import { PokemonService } from './service/pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonSelect } from './pokemon-select/pokemon-select';

@Component({
  selector: 'app-root',
  imports: [FormsModule, PokemonSelect],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
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