import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationSelect } from './generation-select';

describe('GenerationSelect', () => {
  let component: GenerationSelect;
  let fixture: ComponentFixture<GenerationSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerationSelect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerationSelect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
