import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapacitacionUpdatePage } from './capacitacion-update.page';

const routes: Routes = [
  {
    path: '',
    component: CapacitacionUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapacitacionUpdatePageRoutingModule {}
