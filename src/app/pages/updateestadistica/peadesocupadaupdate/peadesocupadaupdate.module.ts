import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PEADesocupadaupdatePageRoutingModule } from './peadesocupadaupdate-routing.module';

import { PEADesocupadaupdatePage } from './peadesocupadaupdate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PEADesocupadaupdatePageRoutingModule
  ],
  declarations: [PEADesocupadaupdatePage]
})
export class PEADesocupadaupdatePageModule {}
