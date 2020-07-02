import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Shared } from 'src/app/shared/shared';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  error = false;

  constructor(private nav: NavController, private shared: Shared) {}

  login(email: string, pass: string) {
    const user = JSON.parse(localStorage.getItem(email));
    if (user && user.pass === pass) {
      this.shared.setEmailProfile(email);
      this.error = false;
      this.nav.navigateForward('/home/pokemon-list');
    } else {
      this.error = true;
    }
  }
}
