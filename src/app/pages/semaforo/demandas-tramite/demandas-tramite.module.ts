import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PinchZoomModule } from 'ngx-pinch-zoom';

import { IonicModule } from '@ionic/angular';

import { DemandasTramitePageRoutingModule } from './demandas-tramite-routing.module';

import { DemandasTramitePage } from './demandas-tramite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PinchZoomModule,
    IonicModule,
    DemandasTramitePageRoutingModule
  ],
  declarations: [DemandasTramitePage]
})
export class DemandasTramitePageModule {}
