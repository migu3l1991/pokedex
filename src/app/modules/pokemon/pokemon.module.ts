import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonMainComponent } from './components/pokemon-main/pokemon-main.component';

import { PokemonPageRoutingModule } from './pokemon-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonPageRoutingModule,
  ],
  declarations: [
    PokemonDetailComponent,
    PokemonListComponent,
    PokemonCardComponent,
    PokemonMainComponent,
  ]
})
export class PokemonPageModule {}
