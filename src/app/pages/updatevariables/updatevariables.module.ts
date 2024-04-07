import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatevariablesPageRoutingModule } from './updatevariables-routing.module';

import { UpdatevariablesPage } from './updatevariables.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatevariablesPageRoutingModule
  ],
  declarations: [UpdatevariablesPage]
})
export class UpdatevariablesPageModule {}
