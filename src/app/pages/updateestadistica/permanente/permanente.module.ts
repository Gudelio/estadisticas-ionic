import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PermanentePageRoutingModule } from './permanente-routing.module';

import { PermanentePage } from './permanente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PermanentePageRoutingModule
  ],
  declarations: [PermanentePage]
})
export class PermanentePageModule {}
