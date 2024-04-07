import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventualupdatePageRoutingModule } from './eventualupdate-routing.module';

import { EventualupdatePage } from './eventualupdate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventualupdatePageRoutingModule
  ],
  declarations: [EventualupdatePage]
})
export class EventualupdatePageModule {}
