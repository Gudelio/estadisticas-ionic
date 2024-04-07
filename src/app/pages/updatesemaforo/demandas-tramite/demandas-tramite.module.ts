import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandasTramitePageRoutingModule } from './demandas-tramite-routing.module';

import { DemandasTramitePage } from './demandas-tramite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandasTramitePageRoutingModule
  ],
  declarations: [DemandasTramitePage]
})
export class DemandasTramitePageModule {}
