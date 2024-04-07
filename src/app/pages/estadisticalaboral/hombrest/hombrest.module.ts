import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HombrestPageRoutingModule } from './hombrest-routing.module';

import { HombrestPage } from './hombrest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HombrestPageRoutingModule
  ],
  declarations: [HombrestPage]
})
export class HombrestPageModule {}
