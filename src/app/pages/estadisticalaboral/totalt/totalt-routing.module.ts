import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TotaltPage } from './totalt.page';

const routes: Routes = [
  {
    path: '',
    component: TotaltPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TotaltPageRoutingModule {}
