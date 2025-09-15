import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}
  
  fetchPokemon() {
    return this.http.get(this.url)
  }

  fetchPokemonByURL(url:string) {
    return this.http.get(url)
  }
}
