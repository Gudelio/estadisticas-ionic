import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentroConciliacionPageRoutingModule } from './centro-conciliacion-routing.module';

import { CentroConciliacionPage } from './centro-conciliacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentroConciliacionPageRoutingModule
  ],
  declarations: [CentroConciliacionPage]
})
export class CentroConciliacionPageModule {}
