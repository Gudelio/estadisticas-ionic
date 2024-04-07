import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OcupacionInformalPageRoutingModule } from './ocupacion-informal-routing.module';

import { OcupacionInformalPage } from './ocupacion-informal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OcupacionInformalPageRoutingModule
  ],
  declarations: [OcupacionInformalPage]
})
export class OcupacionInformalPageModule {}
