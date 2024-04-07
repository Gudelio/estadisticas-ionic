import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PinchZoomModule } from 'ngx-pinch-zoom';

import { IonicModule } from '@ionic/angular';

import { MontoLaudosPageRoutingModule } from './monto-laudos-routing.module';

import { MontoLaudosPage } from './monto-laudos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PinchZoomModule,
    IonicModule,
    MontoLaudosPageRoutingModule
  ],
  declarations: [MontoLaudosPage]
})
export class MontoLaudosPageModule {}
