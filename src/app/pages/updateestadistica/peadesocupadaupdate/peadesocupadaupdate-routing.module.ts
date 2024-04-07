import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PEADesocupadaupdatePage } from './peadesocupadaupdate.page';

const routes: Routes = [
  {
    path: '',
    component: PEADesocupadaupdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PEADesocupadaupdatePageRoutingModule {}
