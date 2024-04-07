import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TotalgPage } from './totalg.page';

const routes: Routes = [
  {
    path: '',
    component: TotalgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TotalgPageRoutingModule {}
