import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PEADesocupadatPageRoutingModule } from './peadesocupadat-routing.module';

import { PEADesocupadatPage } from './peadesocupadat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PEADesocupadatPageRoutingModule
  ],
  declarations: [PEADesocupadatPage]
})
export class PEADesocupadatPageModule {}
