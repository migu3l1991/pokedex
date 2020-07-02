import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountFormComponent } from './components/account-form/account-form.component';

import { AccountPageRoutingModule } from './account-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [AccountFormComponent]
})
export class AccountPageModule {}
