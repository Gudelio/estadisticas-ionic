import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

import { IonicModule } from '@ionic/angular';

import { TotalgPageRoutingModule } from './totalg-routing.module';

import { TotalgPage } from './totalg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgChartsModule,
    TotalgPageRoutingModule
  ],
  declarations: [TotalgPage]
})
export class TotalgPageModule {}
