import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AparatoJusticiaLaboralPageRoutingModule } from './aparato-justicia-laboral-routing.module';

import { AparatoJusticiaLaboralPage } from './aparato-justicia-laboral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AparatoJusticiaLaboralPageRoutingModule
  ],
  declarations: [AparatoJusticiaLaboralPage]
})
export class AparatoJusticiaLaboralPageModule {}
