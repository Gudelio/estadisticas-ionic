import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventualPage } from './eventual.page';

const routes: Routes = [
  {
    path: '',
    component: EventualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventualPageRoutingModule {}
