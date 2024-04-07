import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasaDesocupaciongPage } from './tasa-desocupaciong.page';

const routes: Routes = [
  {
    path: '',
    component: TasaDesocupaciongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasaDesocupaciongPageRoutingModule {}
