import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

import { IonicModule } from '@ionic/angular';

import { PermanentegPageRoutingModule } from './permanenteg-routing.module';

import { PermanentegPage } from './permanenteg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgChartsModule,
    PermanentegPageRoutingModule
  ],
  declarations: [PermanentegPage]
})
export class PermanentegPageModule {}
