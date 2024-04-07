import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasaInformalidadLaboraltPage } from './tasa-informalidad-laboralt.page';

const routes: Routes = [
  {
    path: '',
    component: TasaInformalidadLaboraltPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasaInformalidadLaboraltPageRoutingModule {}
