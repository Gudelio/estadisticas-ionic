import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PEAOcupadaupdatePageRoutingModule } from './peaocupadaupdate-routing.module';

import { PEAOcupadaupdatePage } from './peaocupadaupdate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PEAOcupadaupdatePageRoutingModule
  ],
  declarations: [PEAOcupadaupdatePage]
})
export class PEAOcupadaupdatePageModule {}
