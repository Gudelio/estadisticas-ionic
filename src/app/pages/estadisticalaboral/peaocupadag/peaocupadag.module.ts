import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

import { IonicModule } from '@ionic/angular';

import { PEAOcupadagPageRoutingModule } from './peaocupadag-routing.module';

import { PEAOcupadagPage } from './peaocupadag.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgChartsModule,
    PEAOcupadagPageRoutingModule
  ],
  declarations: [PEAOcupadagPage]
})
export class PEAOcupadagPageModule {}
