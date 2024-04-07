import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstadisticalaboralPageRoutingModule } from './estadisticalaboral-routing.module';

import { EstadisticalaboralPage } from './estadisticalaboral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstadisticalaboralPageRoutingModule
  ],
  declarations: [EstadisticalaboralPage]
})
export class EstadisticalaboralPageModule {}
