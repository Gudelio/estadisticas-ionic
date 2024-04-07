import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatesemaforoPageRoutingModule } from './updatesemaforo-routing.module';

import { UpdatesemaforoPage } from './updatesemaforo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatesemaforoPageRoutingModule
  ],
  declarations: [UpdatesemaforoPage]
})
export class UpdatesemaforoPageModule {}
