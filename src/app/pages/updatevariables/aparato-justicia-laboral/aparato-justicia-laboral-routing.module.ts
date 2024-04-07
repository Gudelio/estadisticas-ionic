import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AparatoJusticiaLaboralPage } from './aparato-justicia-laboral.page';

const routes: Routes = [
  {
    path: '',
    component: AparatoJusticiaLaboralPage
  },
  {
    path: 'junta-local',
    loadChildren: () => import('./junta-local/junta-local.module').then( m => m.JuntaLocalPageModule)
  },
  {
    path: 'junta-local-update',
    loadChildren: () => import('./junta-local-update/junta-local-update.module').then( m => m.JuntaLocalUpdatePageModule)
  },
  {
    path: 'procuraduria-defensa',
    loadChildren: () => import('./procuraduria-defensa/procuraduria-defensa.module').then( m => m.ProcuraduriaDefensaPageModule)
  },
  {
    path: 'procuraduria-defensa-update',
    loadChildren: () => import('./procuraduria-defensa-update/procuraduria-defensa-update.module').then( m => m.ProcuraduriaDefensaUpdatePageModule)
  },
  {
    path: 'tribunal-arbitraje',
    loadChildren: () => import('./tribunal-arbitraje/tribunal-arbitraje.module').then( m => m.TribunalArbitrajePageModule)
  },
  {
    path: 'tribunal-arbitraje-update',
    loadChildren: () => import('./tribunal-arbitraje-update/tribunal-arbitraje-update.module').then( m => m.TribunalArbitrajeUpdatePageModule)
  },
  {
    path: 'centro-conciliacion',
    loadChildren: () => import('./centro-conciliacion/centro-conciliacion.module').then( m => m.CentroConciliacionPageModule)
  },
  {
    path: 'centro-conciliacion-update',
    loadChildren: () => import('./centro-conciliacion-update/centro-conciliacion-update.module').then( m => m.CentroConciliacionUpdatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AparatoJusticiaLaboralPageRoutingModule {}
