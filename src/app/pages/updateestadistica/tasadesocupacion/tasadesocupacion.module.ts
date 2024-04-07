import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TasadesocupacionPageRoutingModule } from './tasadesocupacion-routing.module';

import { TasadesocupacionPage } from './tasadesocupacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasadesocupacionPageRoutingModule
  ],
  declarations: [TasadesocupacionPage]
})
export class TasadesocupacionPageModule {}
