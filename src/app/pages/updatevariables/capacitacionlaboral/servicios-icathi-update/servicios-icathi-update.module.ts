import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiciosIcathiUpdatePageRoutingModule } from './servicios-icathi-update-routing.module';

import { ServiciosIcathiUpdatePage } from './servicios-icathi-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiciosIcathiUpdatePageRoutingModule
  ],
  declarations: [ServiciosIcathiUpdatePage]
})
export class ServiciosIcathiUpdatePageModule {}
