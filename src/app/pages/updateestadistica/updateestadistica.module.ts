import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateestadisticaPageRoutingModule } from './updateestadistica-routing.module';

import { UpdateestadisticaPage } from './updateestadistica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateestadisticaPageRoutingModule
  ],
  declarations: [UpdateestadisticaPage]
})
export class UpdateestadisticaPageModule {}
