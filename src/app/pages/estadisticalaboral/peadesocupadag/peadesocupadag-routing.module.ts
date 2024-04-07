import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PEADesocupadagPage } from './peadesocupadag.page';

const routes: Routes = [
  {
    path: '',
    component: PEADesocupadagPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PEADesocupadagPageRoutingModule {}
