import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TribunalArbitrajePageRoutingModule } from './tribunal-arbitraje-routing.module';

import { TribunalArbitrajePage } from './tribunal-arbitraje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TribunalArbitrajePageRoutingModule
  ],
  declarations: [TribunalArbitrajePage]
})
export class TribunalArbitrajePageModule {}
