import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasaInformalidadLaboralPage } from './tasa-informalidad-laboral.page';

const routes: Routes = [
  {
    path: '',
    component: TasaInformalidadLaboralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasaInformalidadLaboralPageRoutingModule {}
