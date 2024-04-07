import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TasaDesocupacionPageRoutingModule } from './tasa-desocupacion-routing.module';

import { TasaDesocupacionPage } from './tasa-desocupacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasaDesocupacionPageRoutingModule
  ],
  declarations: [TasaDesocupacionPage]
})
export class TasaDesocupacionPageModule {}
