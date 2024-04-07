import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandasTramitePage } from './demandas-tramite.page';

const routes: Routes = [
  {
    path: '',
    component: DemandasTramitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandasTramitePageRoutingModule {}
