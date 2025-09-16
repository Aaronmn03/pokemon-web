import { Component, Input, OnChanges } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';
import { PokemonInterface } from '../../../consts/pokemonInterface';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router'
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-pokemon-details-evolutions',
  imports: [],
  templateUrl: './pokemon-details-evolutions.html',
  styleUrl: './pokemon-details-evolutions.css'
})
export class PokemonDetailsEvolutions implements OnChanges{
  @Input() pokemon_specie : any
  pokemon_evolutions : any = []

  constructor(
    private pokemonService :PokemonService,
    private router : Router
  ){}

  ngOnChanges(): void {
    if (!this.pokemon_specie) return;
    this.pokemon_evolutions = [];

    this.pokemonService.fetchPokemonSpecie(this.pokemon_specie).pipe(
      switchMap((specie: any) => this.pokemonService.fetchPokemonEvolutions(specie.evolution_chain.url))
    ).subscribe({
      next: (data: any) => {
        const evolutionIds = this.extractEvolutionIds(data.chain);

        const observables = evolutionIds.map(id => this.pokemonService.fetchPokemonByID(id.toString()));

        forkJoin(observables).subscribe({
          next: (pokemons) => {
            this.pokemon_evolutions = pokemons;
          },
          error: (err) => console.error('Error obteniendo los Pokémon de evoluciones', err)
        });
      },
      error: (err) => console.error('Error obteniendo evoluciones', err)
    });
  }

  selectEvolution(id: number): void{
    this.router.navigate(['pokemon/', id.toString()])
  }

  extractEvolutionIds(chain: any): number[] {
    const ids: number[] = [];

    function traverse(node: any) {
      const url = node.species.url;
      const idMatch = url.match(/\/pokemon-species\/(\d+)\//);
      if (idMatch) {
        ids.push(+idMatch[1]); 
      }

      if (node.evolves_to && node.evolves_to.length > 0) {
        node.evolves_to.forEach(traverse);
      }
    }

    traverse(chain);
    return ids.sort();
  }
}
