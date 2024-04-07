import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VariablesPage } from './variables.page';

const routes: Routes = [
  {
    path: '',
    component: VariablesPage
  },
  {
    path: 'capacitacion-laboral',
    loadChildren: () => import('./capacitacion-laboral/capacitacion-laboral.module').then( m => m.CapacitacionLaboralPageModule)
  },
  {
    path: 'vinculacion-laboral',
    loadChildren: () => import('./vinculacion-laboral/vinculacion-laboral.module').then( m => m.VinculacionLaboralPageModule)
  },
  {
    path: 'aparato-justicia-laboral',
    loadChildren: () => import('./aparato-justicia-laboral/aparato-justicia-laboral.module').then( m => m.AparatoJusticiaLaboralPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VariablesPageRoutingModule {}
