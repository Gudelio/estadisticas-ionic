import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalariosgPage } from './salariosg.page';

const routes: Routes = [
  {
    path: '',
    component: SalariosgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalariosgPageRoutingModule {}
