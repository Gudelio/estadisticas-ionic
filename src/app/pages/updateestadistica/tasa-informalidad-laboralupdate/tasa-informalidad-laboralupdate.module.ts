import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TasaInformalidadLaboralupdatePageRoutingModule } from './tasa-informalidad-laboralupdate-routing.module';

import { TasaInformalidadLaboralupdatePage } from './tasa-informalidad-laboralupdate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasaInformalidadLaboralupdatePageRoutingModule
  ],
  declarations: [TasaInformalidadLaboralupdatePage]
})
export class TasaInformalidadLaboralupdatePageModule {}
