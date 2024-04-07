import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PinchZoomModule } from 'ngx-pinch-zoom';

import { IonicModule } from '@ionic/angular';

import { MontoEjecucionesPageRoutingModule } from './monto-ejecuciones-routing.module';

import { MontoEjecucionesPage } from './monto-ejecuciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PinchZoomModule,
    IonicModule,
    MontoEjecucionesPageRoutingModule
  ],
  declarations: [MontoEjecucionesPage]
})
export class MontoEjecucionesPageModule {}
