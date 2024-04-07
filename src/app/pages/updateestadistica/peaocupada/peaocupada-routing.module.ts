import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PEAOcupadaPage } from './peaocupada.page';

const routes: Routes = [
  {
    path: '',
    component: PEAOcupadaPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PEAOcupadaPageRoutingModule {}
