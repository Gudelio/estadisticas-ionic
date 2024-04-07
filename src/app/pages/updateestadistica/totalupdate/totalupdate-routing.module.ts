import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TotalupdatePage } from './totalupdate.page';

const routes: Routes = [
  {
    path: '',
    component: TotalupdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TotalupdatePageRoutingModule {}
