import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventualtPage } from './eventualt.page';

const routes: Routes = [
  {
    path: '',
    component: EventualtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventualtPageRoutingModule {}
