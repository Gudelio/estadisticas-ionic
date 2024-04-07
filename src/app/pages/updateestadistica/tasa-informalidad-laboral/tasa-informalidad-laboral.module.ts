import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TasaInformalidadLaboralPageRoutingModule } from './tasa-informalidad-laboral-routing.module';

import { TasaInformalidadLaboralPage } from './tasa-informalidad-laboral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasaInformalidadLaboralPageRoutingModule
  ],
  declarations: [TasaInformalidadLaboralPage]
})
export class TasaInformalidadLaboralPageModule {}
