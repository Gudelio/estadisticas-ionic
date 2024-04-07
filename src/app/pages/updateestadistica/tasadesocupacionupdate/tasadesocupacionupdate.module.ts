import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TasadesocupacionupdatePageRoutingModule } from './tasadesocupacionupdate-routing.module';

import { TasadesocupacionupdatePage } from './tasadesocupacionupdate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasadesocupacionupdatePageRoutingModule
  ],
  declarations: [TasadesocupacionupdatePage]
})
export class TasadesocupacionupdatePageModule {}
