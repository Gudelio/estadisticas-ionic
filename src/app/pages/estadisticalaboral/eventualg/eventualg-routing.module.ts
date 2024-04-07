import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventualgPage } from './eventualg.page';

const routes: Routes = [
  {
    path: '',
    component: EventualgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventualgPageRoutingModule {}
