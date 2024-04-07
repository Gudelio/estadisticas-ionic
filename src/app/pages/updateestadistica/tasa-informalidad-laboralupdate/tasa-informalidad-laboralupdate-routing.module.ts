import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasaInformalidadLaboralupdatePage } from './tasa-informalidad-laboralupdate.page';

const routes: Routes = [
  {
    path: '',
    component: TasaInformalidadLaboralupdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasaInformalidadLaboralupdatePageRoutingModule {}
