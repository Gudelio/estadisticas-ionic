import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

import { IonicModule } from '@ionic/angular';

import { PEAgPageRoutingModule } from './peag-routing.module';

import { PEAgPage } from './peag.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgChartsModule,
    PEAgPageRoutingModule
  ],
  declarations: [PEAgPage]
})
export class PEAgPageModule {}
