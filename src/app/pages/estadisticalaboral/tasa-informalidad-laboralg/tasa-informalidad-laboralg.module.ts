import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

import { IonicModule } from '@ionic/angular';

import { TasaInformalidadLaboralgPageRoutingModule } from './tasa-informalidad-laboralg-routing.module';

import { TasaInformalidadLaboralgPage } from './tasa-informalidad-laboralg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgChartsModule,
    TasaInformalidadLaboralgPageRoutingModule
  ],
  declarations: [TasaInformalidadLaboralgPage]
})
export class TasaInformalidadLaboralgPageModule {}
