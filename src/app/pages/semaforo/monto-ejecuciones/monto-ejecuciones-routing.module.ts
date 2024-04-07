import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MontoEjecucionesPage } from './monto-ejecuciones.page';

const routes: Routes = [
  {
    path: '',
    component: MontoEjecucionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MontoEjecucionesPageRoutingModule {}
