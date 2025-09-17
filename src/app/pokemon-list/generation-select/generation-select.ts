import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-generation-select',
  imports: [],
  templateUrl: './generation-select.html',
  styleUrl: './generation-select.css'
})
export class GenerationSelect {
  @Input() generation : any
  @Output() generationSelected = new EventEmitter<string>();

  onGenerationClick(): void{
    this.generationSelected.emit(this.generation.name);
  }
}
