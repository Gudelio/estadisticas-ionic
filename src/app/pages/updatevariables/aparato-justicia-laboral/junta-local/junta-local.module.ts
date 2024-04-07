import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuntaLocalPageRoutingModule } from './junta-local-routing.module';

import { JuntaLocalPage } from './junta-local.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuntaLocalPageRoutingModule
  ],
  declarations: [JuntaLocalPage]
})
export class JuntaLocalPageModule {}
