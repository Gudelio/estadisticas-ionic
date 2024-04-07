import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

import { IonicModule } from '@ionic/angular';

import { HombresgPageRoutingModule } from './hombresg-routing.module';

import { HombresgPage } from './hombresg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgChartsModule,
    HombresgPageRoutingModule
  ],
  declarations: [HombresgPage]
})
export class HombresgPageModule {}
