import { Component, OnInit } from '@angular/core';
import { Shared } from 'src/app/shared/shared';
import { Pokemon } from 'src/app/models/classes/pokemon';
import { IPokemonData } from 'src/app/models/interfaces/pokemon.interface';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemonList: IPokemonData[] = [];
  from = 1;
  until = 50;
  max = 807;
  isSearchingByNameOrId = false;

  constructor(public pokemon: Pokemon, private shared: Shared) { }

  ngOnInit() {
    this.shared.setStatusActionsHeader(false);
    this.getAdd50Pokemons();
  }

  searchPokemonByName(name: string) {
    if (name && name.length) {
      this.isSearchingByNameOrId = true;
      this.pokemon.getPokemonInfoByNameOrId(name).subscribe((data) => {
        this.pokemonList = [data];
      });
    } else {
      this.isSearchingByNameOrId = false;
      this.from = 1;
      this.until = 50;
      this.pokemonList = [];
      this.getAdd50Pokemons();
    }
  }

  showHomeAction(pokemon: IPokemonData) {
    this.shared.setPokemonData(pokemon);
    this.shared.setStatusActionsHeader(true);
  }

  getAdd50Pokemons(from?: number) {
    const promises: Observable<IPokemonData>[] = [];

    for (let i = this.from; i <= this.until; i++) {
      promises.push(this.pokemon.getPokemonInfoByNameOrId(i.toString()));
    }
    forkJoin(promises).subscribe((pokemonsData: IPokemonData[]) => {
      if (this.pokemonList && this.pokemonList.length) {
        this.pokemonList = this.pokemonList.concat(pokemonsData);
      } else {
        this.pokemonList = pokemonsData;
      }
      this.from += 50;
      this.until += 50;
      if (this.until > 807) {
        this.until = 807;
      }
    });
  }

  loadData(event) {
    setTimeout(() => {
      if (!this.isSearchingByNameOrId) {
        this.getAdd50Pokemons(this.from);
      }
      event.target.complete();
    }, 500);
  }
}
