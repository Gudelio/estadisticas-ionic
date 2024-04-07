import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PEADesocupadatPage } from './peadesocupadat.page';

const routes: Routes = [
  {
    path: '',
    component: PEADesocupadatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PEADesocupadatPageRoutingModule {}
