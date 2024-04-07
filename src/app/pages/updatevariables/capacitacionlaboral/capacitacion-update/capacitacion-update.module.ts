import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapacitacionUpdatePageRoutingModule } from './capacitacion-update-routing.module';

import { CapacitacionUpdatePage } from './capacitacion-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapacitacionUpdatePageRoutingModule
  ],
  declarations: [CapacitacionUpdatePage]
})
export class CapacitacionUpdatePageModule {}
