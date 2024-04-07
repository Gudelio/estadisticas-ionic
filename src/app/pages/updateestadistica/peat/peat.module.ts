import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PEAtPageRoutingModule } from './peat-routing.module';

import { PEAtPage } from './peat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PEAtPageRoutingModule
  ],
  declarations: [PEAtPage]
})
export class PEAtPageModule {}
