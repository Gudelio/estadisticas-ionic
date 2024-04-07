import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PermanenteupdatePageRoutingModule } from './permanenteupdate-routing.module';

import { PermanenteupdatePage } from './permanenteupdate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PermanenteupdatePageRoutingModule
  ],
  declarations: [PermanenteupdatePage]
})
export class PermanenteupdatePageModule {}
