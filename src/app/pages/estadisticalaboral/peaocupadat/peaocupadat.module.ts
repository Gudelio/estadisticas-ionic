import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PEAOcupadatPageRoutingModule } from './peaocupadat-routing.module';

import { PEAOcupadatPage } from './peaocupadat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PEAOcupadatPageRoutingModule
  ],
  declarations: [PEAOcupadatPage]
})
export class PEAOcupadatPageModule {}
