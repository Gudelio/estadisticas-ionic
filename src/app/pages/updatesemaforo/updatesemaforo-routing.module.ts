import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatesemaforoPage } from './updatesemaforo.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatesemaforoPage
  },
  {
    path: 'demandas-tramite',
    loadChildren: () => import('./demandas-tramite/demandas-tramite.module').then( m => m.DemandasTramitePageModule)
  },
  {
    path: 'monto-laudos',
    loadChildren: () => import('./monto-laudos/monto-laudos.module').then( m => m.MontoLaudosPageModule)
  },
  {
    path: 'monto-ejecuciones',
    loadChildren: () => import('./monto-ejecuciones/monto-ejecuciones.module').then( m => m.MontoEjecucionesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatesemaforoPageRoutingModule {}
