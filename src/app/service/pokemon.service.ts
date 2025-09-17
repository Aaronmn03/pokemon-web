import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}
  
  fetchPokemon(limit: string, offset: string) {
    //todo: Mas adelante pedir al usuario que busque los que quiera (el offset es para a partir de cual)
    return this.http.get(`${this.url}?limit=${limit}&offset=${offset}`)
  }

  fetchPokemonByURL(url:string) {
    return this.http.get(url)
  }

  fetchPokemonByID(id:string) {
    return this.http.get(`${this.url}/${id}`)
  }

  fetchPokemonSpecie(url: string){
    return this.http.get(url)
  }

  fetchPokemonEvolutions(url: string){
    return this.http.get(url)
  }
}
