import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalariosupdatePage } from './salariosupdate.page';

const routes: Routes = [
  {
    path: '',
    component: SalariosupdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalariosupdatePageRoutingModule {}
