import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OcupacionInformaltPage } from './ocupacion-informalt.page';

const routes: Routes = [
  {
    path: '',
    component: OcupacionInformaltPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OcupacionInformaltPageRoutingModule {}
