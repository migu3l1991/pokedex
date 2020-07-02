import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Shared } from 'src/app/shared/shared';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-main',
  templateUrl: './pokemon-main.component.html',
  styleUrls: ['./pokemon-main.component.scss']
})
export class PokemonMainComponent implements OnInit, OnDestroy {
  showActions = false;
  pokemonName = '';
  statusActionsSubscription: Subscription;

  constructor(private nav: NavController, private shared: Shared) { }

  ngOnInit() {
    this.statusActionsSubscription = this.shared.getStatusActionsHeader().subscribe((newStatus: boolean) => {
      this.showActions = newStatus;
      if (this.showActions) {
        this.pokemonName = this.shared.getPokemonData().name;
      }
    });
  }

  ngOnDestroy(): void {
    this.statusActionsSubscription.unsubscribe();
  }

  navigateBack() {
    this.showActions = false;
    this.nav.navigateBack('home/pokemon-list');
  }

  exit() {
    this.nav.navigateRoot('home');
  }

  editProfile() {
    this.shared.setEditMode(true);
    this.nav.navigateForward('home/account');
  }
}
