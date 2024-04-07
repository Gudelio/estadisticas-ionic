import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateestadisticaPage } from './updateestadistica.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateestadisticaPage
  },
  {
    path: 'peat',
    loadChildren: () => import('./peat/peat.module').then( m => m.PEAtPageModule)
  },
  {
    path: 'peaupdate',
    loadChildren: () => import('./peaupdate/peaupdate.module').then( m => m.PEAupdatePageModule)
  },
  {
    path: 'peaocupada',
    loadChildren: () => import('./peaocupada/peaocupada.module').then( m => m.PEAOcupadaPageModule)
  },
  {
    path: 'peaocupadaupdate',
    loadChildren: () => import('./peaocupadaupdate/peaocupadaupdate.module').then( m => m.PEAOcupadaupdatePageModule)
  },
  {
    path: 'peadesocupada',
    loadChildren: () => import('./peadesocupada/peadesocupada.module').then( m => m.PEADesocupadaPageModule)
  },
  {
    path: 'peadesocupadaupdate',
    loadChildren: () => import('./peadesocupadaupdate/peadesocupadaupdate.module').then( m => m.PEADesocupadaupdatePageModule)
  },
  {
    path: 'ocupacioninformal',
    loadChildren: () => import('./ocupacioninformal/ocupacioninformal.module').then( m => m.OcupacioninformalPageModule)
  },
  {
    path: 'ocupacioninformalupdate',
    loadChildren: () => import('./ocupacioninformalupdate/ocupacioninformalupdate.module').then( m => m.OcupacioninformalupdatePageModule)
  },
  {
    path: 'tasadesocupacion',
    loadChildren: () => import('./tasadesocupacion/tasadesocupacion.module').then( m => m.TasadesocupacionPageModule)
  },
  {
    path: 'tasadesocupacionupdate',
    loadChildren: () => import('./tasadesocupacionupdate/tasadesocupacionupdate.module').then( m => m.TasadesocupacionupdatePageModule)
  },
  {
    path: 'tasa-informalidad-laboral',
    loadChildren: () => import('./tasa-informalidad-laboral/tasa-informalidad-laboral.module').then( m => m.TasaInformalidadLaboralPageModule)
  },
  {
    path: 'tasa-informalidad-laboralupdate',
    loadChildren: () => import('./tasa-informalidad-laboralupdate/tasa-informalidad-laboralupdate.module').then( m => m.TasaInformalidadLaboralupdatePageModule)
  },
  {
    path: 'total',
    loadChildren: () => import('./total/total.module').then( m => m.TotalPageModule)
  },
  {
    path: 'totalupdate',
    loadChildren: () => import('./totalupdate/totalupdate.module').then( m => m.TotalupdatePageModule)
  },
  {
    path: 'permanente',
    loadChildren: () => import('./permanente/permanente.module').then( m => m.PermanentePageModule)
  },
  {
    path: 'permanenteupdate',
    loadChildren: () => import('./permanenteupdate/permanenteupdate.module').then( m => m.PermanenteupdatePageModule)
  },
  {
    path: 'eventual',
    loadChildren: () => import('./eventual/eventual.module').then( m => m.EventualPageModule)
  },
  {
    path: 'eventualupdate',
    loadChildren: () => import('./eventualupdate/eventualupdate.module').then( m => m.EventualupdatePageModule)
  },
  {
    path: 'mujeres',
    loadChildren: () => import('./mujeres/mujeres.module').then( m => m.MujeresPageModule)
  },
  {
    path: 'mujeresupdate',
    loadChildren: () => import('./mujeresupdate/mujeresupdate.module').then( m => m.MujeresupdatePageModule)
  },
  {
    path: 'hombres',
    loadChildren: () => import('./hombres/hombres.module').then( m => m.HombresPageModule)
  },
  {
    path: 'hombresupdate',
    loadChildren: () => import('./hombresupdate/hombresupdate.module').then( m => m.HombresupdatePageModule)
  },
  {
    path: 'salarios',
    loadChildren: () => import('./salarios/salarios.module').then( m => m.SalariosPageModule)
  },
  {
    path: 'salariosupdate',
    loadChildren: () => import('./salariosupdate/salariosupdate.module').then( m => m.SalariosupdatePageModule)
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateestadisticaPageRoutingModule {}
