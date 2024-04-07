import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PermanentetPageRoutingModule } from './permanentet-routing.module';

import { PermanentetPage } from './permanentet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PermanentetPageRoutingModule
  ],
  declarations: [PermanentetPage]
})
export class PermanentetPageModule {}
