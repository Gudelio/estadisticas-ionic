import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OcupacioninformalupdatePageRoutingModule } from './ocupacioninformalupdate-routing.module';

import { OcupacioninformalupdatePage } from './ocupacioninformalupdate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OcupacioninformalupdatePageRoutingModule
  ],
  declarations: [OcupacioninformalupdatePage]
})
export class OcupacioninformalupdatePageModule {}
