import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

import { IonicModule } from '@ionic/angular';

import { TasaDesocupaciongPageRoutingModule } from './tasa-desocupaciong-routing.module';

import { TasaDesocupaciongPage } from './tasa-desocupaciong.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgChartsModule,
    TasaDesocupaciongPageRoutingModule
  ],
  declarations: [TasaDesocupaciongPage]
})
export class TasaDesocupaciongPageModule {}
