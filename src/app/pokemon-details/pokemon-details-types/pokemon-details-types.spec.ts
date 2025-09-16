import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailsTypes } from './pokemon-details-types';

describe('PokemonDetailsTypes', () => {
  let component: PokemonDetailsTypes;
  let fixture: ComponentFixture<PokemonDetailsTypes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonDetailsTypes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonDetailsTypes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
