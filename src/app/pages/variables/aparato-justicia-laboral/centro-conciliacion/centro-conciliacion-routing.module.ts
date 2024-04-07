import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentroConciliacionPage } from './centro-conciliacion.page';

const routes: Routes = [
  {
    path: '',
    component: CentroConciliacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentroConciliacionPageRoutingModule {}
