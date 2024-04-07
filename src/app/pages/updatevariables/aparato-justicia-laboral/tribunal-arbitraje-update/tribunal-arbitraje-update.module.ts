import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TribunalArbitrajeUpdatePageRoutingModule } from './tribunal-arbitraje-update-routing.module';

import { TribunalArbitrajeUpdatePage } from './tribunal-arbitraje-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TribunalArbitrajeUpdatePageRoutingModule
  ],
  declarations: [TribunalArbitrajeUpdatePage]
})
export class TribunalArbitrajeUpdatePageModule {}
