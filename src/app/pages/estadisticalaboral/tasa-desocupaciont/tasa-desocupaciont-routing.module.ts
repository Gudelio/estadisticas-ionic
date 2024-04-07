import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasaDesocupaciontPage } from './tasa-desocupaciont.page';

const routes: Routes = [
  {
    path: '',
    component: TasaDesocupaciontPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasaDesocupaciontPageRoutingModule {}
