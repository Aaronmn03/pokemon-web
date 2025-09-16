import { Component, OnChanges, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { PokemonTypes } from '../../../consts/pokemon_types';

interface typeImages{
  name: string,
  url: string | undefined,
}
interface PokemonTypeSlot {
  slot: number,
  type: {
    name: string;
    url: string;
  };
}

@Component({
  selector: 'app-pokemon-details-types',
  imports: [],
  templateUrl: './pokemon-details-types.html',
  styleUrl: './pokemon-details-types.css'
})
export class PokemonDetailsTypes implements OnChanges{
  @Input() pokemon_types : any
  types: typeImages[] = [];

  ngOnChanges(): void {
    this.types = []
    this.pokemon_types?.map((slot : PokemonTypeSlot)=> {
      this.types.push({
        name: slot.type.name, 
        url: PokemonTypes.find(t => t.name === slot.type.name)?.image
      })
    })
  }
}
