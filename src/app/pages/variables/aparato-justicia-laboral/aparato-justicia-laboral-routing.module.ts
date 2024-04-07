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
    path: 'procuraduria-defensa',
    loadChildren: () => import('./procuraduria-defensa/procuraduria-defensa.module').then( m => m.ProcuraduriaDefensaPageModule)
  },
  {
    path: 'tribunal-arbitraje',
    loadChildren: () => import('./tribunal-arbitraje/tribunal-arbitraje.module').then( m => m.TribunalArbitrajePageModule)
  },
  {
    path: 'centro-conciliacion',
    loadChildren: () => import('./centro-conciliacion/centro-conciliacion.module').then( m => m.CentroConciliacionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AparatoJusticiaLaboralPageRoutingModule {}
