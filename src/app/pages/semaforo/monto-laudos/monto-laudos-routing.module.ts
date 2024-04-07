import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MontoLaudosPage } from './monto-laudos.page';

const routes: Routes = [
  {
    path: '',
    component: MontoLaudosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MontoLaudosPageRoutingModule {}
