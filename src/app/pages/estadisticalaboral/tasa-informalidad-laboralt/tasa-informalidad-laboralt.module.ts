import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TasaInformalidadLaboraltPageRoutingModule } from './tasa-informalidad-laboralt-routing.module';

import { TasaInformalidadLaboraltPage } from './tasa-informalidad-laboralt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasaInformalidadLaboraltPageRoutingModule
  ],
  declarations: [TasaInformalidadLaboraltPage]
})
export class TasaInformalidadLaboraltPageModule {}
