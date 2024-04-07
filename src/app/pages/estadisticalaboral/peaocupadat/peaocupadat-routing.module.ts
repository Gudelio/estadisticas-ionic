import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PEAOcupadatPage } from './peaocupadat.page';

const routes: Routes = [
  {
    path: '',
    component: PEAOcupadatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PEAOcupadatPageRoutingModule {}
