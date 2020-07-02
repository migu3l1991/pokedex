import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { Shared } from './shared';
import { NavController } from '@ionic/angular';

@Injectable()
export class AuthGuard implements CanLoad {

  constructor(private shared: Shared, private nav: NavController) {}

  canLoad() {
    if (this.shared.getEmailProfile() && this.shared.getEmailProfile().length) {
      return true;
    } else {
      this.nav.navigateRoot('home');
    }
  }
}
