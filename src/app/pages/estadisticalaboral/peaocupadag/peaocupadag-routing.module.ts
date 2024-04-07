import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PEAOcupadagPage } from './peaocupadag.page';

const routes: Routes = [
  {
    path: '',
    component: PEAOcupadagPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PEAOcupadagPageRoutingModule {}
