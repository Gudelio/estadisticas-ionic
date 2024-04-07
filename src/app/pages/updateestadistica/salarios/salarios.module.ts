import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalariosPageRoutingModule } from './salarios-routing.module';

import { SalariosPage } from './salarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalariosPageRoutingModule
  ],
  declarations: [SalariosPage]
})
export class SalariosPageModule {}
