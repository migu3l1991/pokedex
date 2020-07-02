import { Component, OnInit, Input } from '@angular/core';
import { IPokemonData } from 'src/app/models/interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: IPokemonData;

  constructor() { }

  ngOnInit() { }

}
