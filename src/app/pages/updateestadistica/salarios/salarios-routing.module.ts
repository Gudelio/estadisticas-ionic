import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalariosPage } from './salarios.page';

const routes: Routes = [
  {
    path: '',
    component: SalariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalariosPageRoutingModule {}
