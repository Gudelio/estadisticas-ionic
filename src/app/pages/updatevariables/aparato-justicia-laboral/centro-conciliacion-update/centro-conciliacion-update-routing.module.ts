import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentroConciliacionUpdatePage } from './centro-conciliacion-update.page';

const routes: Routes = [
  {
    path: '',
    component: CentroConciliacionUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentroConciliacionUpdatePageRoutingModule {}
