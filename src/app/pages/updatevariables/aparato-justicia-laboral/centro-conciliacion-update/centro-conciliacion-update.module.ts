import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentroConciliacionUpdatePageRoutingModule } from './centro-conciliacion-update-routing.module';

import { CentroConciliacionUpdatePage } from './centro-conciliacion-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentroConciliacionUpdatePageRoutingModule
  ],
  declarations: [CentroConciliacionUpdatePage]
})
export class CentroConciliacionUpdatePageModule {}
