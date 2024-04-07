import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

import { IonicModule } from '@ionic/angular';

import { EventualgPageRoutingModule } from './eventualg-routing.module';

import { EventualgPage } from './eventualg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgChartsModule,
    EventualgPageRoutingModule
  ],
  declarations: [EventualgPage]
})
export class EventualgPageModule {}
