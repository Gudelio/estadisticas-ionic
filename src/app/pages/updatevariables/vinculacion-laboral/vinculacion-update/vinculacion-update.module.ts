import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VinculacionUpdatePageRoutingModule } from './vinculacion-update-routing.module';

import { VinculacionUpdatePage } from './vinculacion-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VinculacionUpdatePageRoutingModule
  ],
  declarations: [VinculacionUpdatePage]
})
export class VinculacionUpdatePageModule {}
