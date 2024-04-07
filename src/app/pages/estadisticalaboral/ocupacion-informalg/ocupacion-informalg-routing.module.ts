import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OcupacionInformalgPage } from './ocupacion-informalg.page';

const routes: Routes = [
  {
    path: '',
    component: OcupacionInformalgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OcupacionInformalgPageRoutingModule {}
