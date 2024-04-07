import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalariostPage } from './salariost.page';

const routes: Routes = [
  {
    path: '',
    component: SalariostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalariostPageRoutingModule {}
