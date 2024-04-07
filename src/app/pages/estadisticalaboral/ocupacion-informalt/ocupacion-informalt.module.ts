import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OcupacionInformaltPageRoutingModule } from './ocupacion-informalt-routing.module';

import { OcupacionInformaltPage } from './ocupacion-informalt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OcupacionInformaltPageRoutingModule
  ],
  declarations: [OcupacionInformaltPage]
})
export class OcupacionInformaltPageModule {}
