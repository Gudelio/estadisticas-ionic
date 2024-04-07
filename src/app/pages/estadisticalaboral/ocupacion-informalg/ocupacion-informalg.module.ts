import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

import { IonicModule } from '@ionic/angular';

import { OcupacionInformalgPageRoutingModule } from './ocupacion-informalg-routing.module';

import { OcupacionInformalgPage } from './ocupacion-informalg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgChartsModule,
    OcupacionInformalgPageRoutingModule
  ],
  declarations: [OcupacionInformalgPage]
})
export class OcupacionInformalgPageModule {}
