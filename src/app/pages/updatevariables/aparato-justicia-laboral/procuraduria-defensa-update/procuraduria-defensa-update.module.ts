import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcuraduriaDefensaUpdatePageRoutingModule } from './procuraduria-defensa-update-routing.module';

import { ProcuraduriaDefensaUpdatePage } from './procuraduria-defensa-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcuraduriaDefensaUpdatePageRoutingModule
  ],
  declarations: [ProcuraduriaDefensaUpdatePage]
})
export class ProcuraduriaDefensaUpdatePageModule {}
