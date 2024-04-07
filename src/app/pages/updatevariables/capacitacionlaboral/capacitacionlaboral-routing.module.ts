import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapacitacionlaboralPage } from './capacitacionlaboral.page';

const routes: Routes = [
  {
    path: '',
    component: CapacitacionlaboralPage
  },
  {
    path: 'capacitacion',
    loadChildren: () => import('./capacitacion/capacitacion.module').then( m => m.CapacitacionPageModule)
  },
  {
    path: 'capacitacion-update',
    loadChildren: () => import('./capacitacion-update/capacitacion-update.module').then( m => m.CapacitacionUpdatePageModule)
  },
  {
    path: 'servicios-icathi',
    loadChildren: () => import('./servicios-icathi/servicios-icathi.module').then( m => m.ServiciosIcathiPageModule)
  },
  {
    path: 'servicios-icathi-update',
    loadChildren: () => import('./servicios-icathi-update/servicios-icathi-update.module').then( m => m.ServiciosIcathiUpdatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapacitacionlaboralPageRoutingModule {}
