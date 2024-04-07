import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapacitacionLaboralPage } from './capacitacion-laboral.page';

const routes: Routes = [
  {
    path: '',
    component: CapacitacionLaboralPage
  },
  {
    path: 'capacitacion',
    loadChildren: () => import('./capacitacion/capacitacion.module').then( m => m.CapacitacionPageModule)
  },
  {
    path: 'servicios-icathi',
    loadChildren: () => import('./servicios-icathi/servicios-icathi.module').then( m => m.ServiciosIcathiPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapacitacionLaboralPageRoutingModule {}
