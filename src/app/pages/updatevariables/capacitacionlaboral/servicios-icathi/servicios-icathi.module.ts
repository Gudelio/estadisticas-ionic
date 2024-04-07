import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiciosIcathiPageRoutingModule } from './servicios-icathi-routing.module';

import { ServiciosIcathiPage } from './servicios-icathi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiciosIcathiPageRoutingModule
  ],
  declarations: [ServiciosIcathiPage]
})
export class ServiciosIcathiPageModule {}
