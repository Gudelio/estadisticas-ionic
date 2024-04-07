import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PEAupdatePageRoutingModule } from './peaupdate-routing.module';

import { PEAupdatePage } from './peaupdate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PEAupdatePageRoutingModule
  ],
  declarations: [PEAupdatePage]
})
export class PEAupdatePageModule {}
