import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OcupacioninformalupdatePage } from './ocupacioninformalupdate.page';

const routes: Routes = [
  {
    path: '',
    component: OcupacioninformalupdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OcupacioninformalupdatePageRoutingModule {}
