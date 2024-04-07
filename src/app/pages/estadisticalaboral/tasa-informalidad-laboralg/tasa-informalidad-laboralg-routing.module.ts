import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasaInformalidadLaboralgPage } from './tasa-informalidad-laboralg.page';

const routes: Routes = [
  {
    path: '',
    component: TasaInformalidadLaboralgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasaInformalidadLaboralgPageRoutingModule {}
