import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TotalupdatePageRoutingModule } from './totalupdate-routing.module';

import { TotalupdatePage } from './totalupdate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TotalupdatePageRoutingModule
  ],
  declarations: [TotalupdatePage]
})
export class TotalupdatePageModule {}
