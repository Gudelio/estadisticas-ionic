import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PEAOcupadaupdatePage } from './peaocupadaupdate.page';

const routes: Routes = [
  {
    path: '',
    component: PEAOcupadaupdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PEAOcupadaupdatePageRoutingModule {}
