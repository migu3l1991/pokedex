import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { AuthGuard } from 'src/app/shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'account',
    loadChildren: () => import('./../account/account.module').then((m) => m.AccountPageModule)
  },
  {
    path: 'pokemon-list',
    loadChildren: () => import('./../pokemon/pokemon.module').then((m) => m.PokemonPageModule),
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
