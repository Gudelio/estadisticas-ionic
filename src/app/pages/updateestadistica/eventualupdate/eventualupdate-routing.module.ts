import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventualupdatePage } from './eventualupdate.page';

const routes: Routes = [
  {
    path: '',
    component: EventualupdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventualupdatePageRoutingModule {}
