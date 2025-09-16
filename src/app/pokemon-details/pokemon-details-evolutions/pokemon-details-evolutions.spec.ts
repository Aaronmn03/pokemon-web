import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailsEvolutions } from './pokemon-details-evolutions';

describe('PokemonDetailsEvolutions', () => {
  let component: PokemonDetailsEvolutions;
  let fixture: ComponentFixture<PokemonDetailsEvolutions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonDetailsEvolutions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonDetailsEvolutions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
