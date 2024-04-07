import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VinculacionLaboralPage } from './vinculacion-laboral.page';

const routes: Routes = [
  {
    path: '',
    component: VinculacionLaboralPage
  },
  {
    path: 'vinculacion',
    loadChildren: () => import('./vinculacion/vinculacion.module').then( m => m.VinculacionPageModule)
  },
  {
    path: 'vinculacion-update',
    loadChildren: () => import('./vinculacion-update/vinculacion-update.module').then( m => m.VinculacionUpdatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VinculacionLaboralPageRoutingModule {}
