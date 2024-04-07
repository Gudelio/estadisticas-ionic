import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TotaltPageRoutingModule } from './totalt-routing.module';

import { TotaltPage } from './totalt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TotaltPageRoutingModule
  ],
  declarations: [TotaltPage]
})
export class TotaltPageModule {}
