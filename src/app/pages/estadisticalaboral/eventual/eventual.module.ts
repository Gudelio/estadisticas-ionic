import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventualPageRoutingModule } from './eventual-routing.module';

import { EventualPage } from './eventual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventualPageRoutingModule
  ],
  declarations: [EventualPage]
})
export class EventualPageModule {}
