import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}
  
  fetchPokemon() {
    //todo: Mas adelante pedir al usuario que busque los que quiera (el offset es para a partir de cual)
    return this.http.get(`${this.url}?limit=151&offset=0`)
  }

  fetchPokemonByURL(url:string) {
    return this.http.get(url)
  }

  fetchPokemonByID(id:string) {
    return this.http.get(`${this.url}/${id}`)
  }
}
