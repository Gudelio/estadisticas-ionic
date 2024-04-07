import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcuraduriaDefensaPageRoutingModule } from './procuraduria-defensa-routing.module';

import { ProcuraduriaDefensaPage } from './procuraduria-defensa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcuraduriaDefensaPageRoutingModule
  ],
  declarations: [ProcuraduriaDefensaPage]
})
export class ProcuraduriaDefensaPageModule {}
