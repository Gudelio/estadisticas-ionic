import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapacitacionLaboralPageRoutingModule } from './capacitacion-laboral-routing.module';

import { CapacitacionLaboralPage } from './capacitacion-laboral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapacitacionLaboralPageRoutingModule
  ],
  declarations: [CapacitacionLaboralPage]
})
export class CapacitacionLaboralPageModule {}
