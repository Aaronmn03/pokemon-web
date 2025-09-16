import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailsSprites } from './pokemon-details-sprites';

describe('PokemonDetailsSprites', () => {
  let component: PokemonDetailsSprites;
  let fixture: ComponentFixture<PokemonDetailsSprites>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonDetailsSprites]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonDetailsSprites);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
