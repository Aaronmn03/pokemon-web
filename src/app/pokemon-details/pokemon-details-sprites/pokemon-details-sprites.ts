import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-details-sprites',
  imports: [],
  templateUrl: './pokemon-details-sprites.html',
  styleUrl: './pokemon-details-sprites.css'
})
export class PokemonDetailsSprites {
  @Input() pokemon_sprites: any

}
