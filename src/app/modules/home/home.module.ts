import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, FormBuilder } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { Shared } from 'src/app/shared/shared';
import { Pokemon } from 'src/app/models/classes/pokemon';
import { PokemonService } from 'src/app/models/services/pokemon.service';
import { AuthGuard } from 'src/app/shared/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage],
  providers: [
    Shared,
    Pokemon,
    PokemonService,
    FormBuilder,
    AuthGuard
  ]
})
export class HomePageModule {}
