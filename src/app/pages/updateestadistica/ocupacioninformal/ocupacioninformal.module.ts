import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OcupacioninformalPageRoutingModule } from './ocupacioninformal-routing.module';

import { OcupacioninformalPage } from './ocupacioninformal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OcupacioninformalPageRoutingModule
  ],
  declarations: [OcupacioninformalPage]
})
export class OcupacioninformalPageModule {}
