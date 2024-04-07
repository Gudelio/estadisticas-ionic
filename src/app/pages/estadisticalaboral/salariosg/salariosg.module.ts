import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

import { IonicModule } from '@ionic/angular';

import { SalariosgPageRoutingModule } from './salariosg-routing.module';

import { SalariosgPage } from './salariosg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgChartsModule,
    SalariosgPageRoutingModule
  ],
  declarations: [SalariosgPage]
})
export class SalariosgPageModule {}
