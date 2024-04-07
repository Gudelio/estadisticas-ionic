import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HombresupdatePageRoutingModule } from './hombresupdate-routing.module';

import { HombresupdatePage } from './hombresupdate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HombresupdatePageRoutingModule
  ],
  declarations: [HombresupdatePage]
})
export class HombresupdatePageModule {}
