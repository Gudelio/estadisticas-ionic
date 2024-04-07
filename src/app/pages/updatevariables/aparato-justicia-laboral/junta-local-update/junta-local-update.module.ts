import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuntaLocalUpdatePageRoutingModule } from './junta-local-update-routing.module';

import { JuntaLocalUpdatePage } from './junta-local-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuntaLocalUpdatePageRoutingModule
  ],
  declarations: [JuntaLocalUpdatePage]
})
export class JuntaLocalUpdatePageModule {}
