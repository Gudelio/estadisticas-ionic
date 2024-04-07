import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalariosupdatePageRoutingModule } from './salariosupdate-routing.module';

import { SalariosupdatePage } from './salariosupdate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalariosupdatePageRoutingModule
  ],
  declarations: [SalariosupdatePage]
})
export class SalariosupdatePageModule {}
