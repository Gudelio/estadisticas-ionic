import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PEADesocupadaPageRoutingModule } from './peadesocupada-routing.module';

import { PEADesocupadaPage } from './peadesocupada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PEADesocupadaPageRoutingModule
  ],
  declarations: [PEADesocupadaPage]
})
export class PEADesocupadaPageModule {}
