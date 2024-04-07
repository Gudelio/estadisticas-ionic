import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalariostPageRoutingModule } from './salariost-routing.module';

import { SalariostPage } from './salariost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalariostPageRoutingModule
  ],
  declarations: [SalariostPage]
})
export class SalariostPageModule {}
