import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

import { IonicModule } from '@ionic/angular';

import { MujeresgPageRoutingModule } from './mujeresg-routing.module';

import { MujeresgPage } from './mujeresg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgChartsModule,
    MujeresgPageRoutingModule
  ],
  declarations: [MujeresgPage]
})
export class MujeresgPageModule {}
