import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PEAtPage } from './peat.page';

const routes: Routes = [
  {
    path: '',
    component: PEAtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PEAtPageRoutingModule {}
