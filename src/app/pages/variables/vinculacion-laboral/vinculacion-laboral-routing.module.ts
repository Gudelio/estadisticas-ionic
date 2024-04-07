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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VinculacionLaboralPageRoutingModule {}
