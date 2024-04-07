import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PEAOcupadaPageRoutingModule } from './peaocupada-routing.module';

import { PEAOcupadaPage } from './peaocupada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PEAOcupadaPageRoutingModule
  ],
  declarations: [PEAOcupadaPage]
})
export class PEAOcupadaPageModule {}
