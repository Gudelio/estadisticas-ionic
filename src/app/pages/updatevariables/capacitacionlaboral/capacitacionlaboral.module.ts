import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapacitacionlaboralPageRoutingModule } from './capacitacionlaboral-routing.module';

import { CapacitacionlaboralPage } from './capacitacionlaboral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapacitacionlaboralPageRoutingModule
  ],
  declarations: [CapacitacionlaboralPage]
})
export class CapacitacionlaboralPageModule {}
