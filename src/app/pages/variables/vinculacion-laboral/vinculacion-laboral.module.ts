import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VinculacionLaboralPageRoutingModule } from './vinculacion-laboral-routing.module';

import { VinculacionLaboralPage } from './vinculacion-laboral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VinculacionLaboralPageRoutingModule
  ],
  declarations: [VinculacionLaboralPage]
})
export class VinculacionLaboralPageModule {}
