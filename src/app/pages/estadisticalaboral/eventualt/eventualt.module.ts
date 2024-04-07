import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventualtPageRoutingModule } from './eventualt-routing.module';

import { EventualtPage } from './eventualt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventualtPageRoutingModule
  ],
  declarations: [EventualtPage]
})
export class EventualtPageModule {}
