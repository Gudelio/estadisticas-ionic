import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PinchZoomModule } from 'ngx-pinch-zoom';

import { IonicModule } from '@ionic/angular';

import { SemaforoPageRoutingModule } from './semaforo-routing.module';

import { SemaforoPage } from './semaforo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PinchZoomModule,
    SemaforoPageRoutingModule
  ],
  declarations: [SemaforoPage]
})
export class SemaforoPageModule {}
