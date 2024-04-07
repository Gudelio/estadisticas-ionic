import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatevariablesPage } from './updatevariables.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatevariablesPage
  },
  {
    path: 'capacitacionlaboral',
    loadChildren: () => import('./capacitacionlaboral/capacitacionlaboral.module').then( m => m.CapacitacionlaboralPageModule)
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
export class UpdatevariablesPageRoutingModule {}
