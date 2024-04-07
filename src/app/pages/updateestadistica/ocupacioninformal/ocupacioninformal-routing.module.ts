import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OcupacioninformalPage } from './ocupacioninformal.page';

const routes: Routes = [
  {
    path: '',
    component: OcupacioninformalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OcupacioninformalPageRoutingModule {}
