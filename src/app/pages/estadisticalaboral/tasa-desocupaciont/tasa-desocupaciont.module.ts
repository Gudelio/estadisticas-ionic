import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TasaDesocupaciontPageRoutingModule } from './tasa-desocupaciont-routing.module';

import { TasaDesocupaciontPage } from './tasa-desocupaciont.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasaDesocupaciontPageRoutingModule
  ],
  declarations: [TasaDesocupaciontPage]
})
export class TasaDesocupaciontPageModule {}
