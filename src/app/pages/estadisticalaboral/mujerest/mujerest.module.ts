import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MujerestPageRoutingModule } from './mujerest-routing.module';

import { MujerestPage } from './mujerest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MujerestPageRoutingModule
  ],
  declarations: [MujerestPage]
})
export class MujerestPageModule {}
