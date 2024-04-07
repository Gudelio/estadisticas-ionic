import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MujeresupdatePageRoutingModule } from './mujeresupdate-routing.module';

import { MujeresupdatePage } from './mujeresupdate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MujeresupdatePageRoutingModule
  ],
  declarations: [MujeresupdatePage]
})
export class MujeresupdatePageModule {}
