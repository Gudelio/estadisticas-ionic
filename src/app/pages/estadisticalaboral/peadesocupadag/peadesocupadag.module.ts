import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

import { IonicModule } from '@ionic/angular';

import { PEADesocupadagPageRoutingModule } from './peadesocupadag-routing.module';

import { PEADesocupadagPage } from './peadesocupadag.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgChartsModule,
    PEADesocupadagPageRoutingModule
  ],
  declarations: [PEADesocupadagPage]
})
export class PEADesocupadagPageModule {}
