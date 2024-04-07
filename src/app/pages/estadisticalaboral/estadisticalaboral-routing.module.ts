import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstadisticalaboralPage } from './estadisticalaboral.page';

const routes: Routes = [
  {
    path: 'estadisticalaboral',
    component: EstadisticalaboralPage,
    children:[
      {path:"peat", loadChildren:()=> import('src/app/pages/estadisticalaboral/peat/peat.module').then(res => res.PEAtPageModule)},
      {path:"peag", loadChildren:()=> import ('src/app/pages/estadisticalaboral/peag/peag.module').then( res => res.PEAgPageModule)},
    ]
  },
  {
    path:"",
    redirectTo: "estadisticalaboral/peat",
    pathMatch: "full"
  },
  {
    path: 'peaocupada',
    loadChildren: () => import('./peaocupada/peaocupada.module').then( m => m.PEAOcupadaPageModule)
  },
  {
    path: 'peaocupadat',
    loadChildren: () => import('./peaocupadat/peaocupadat.module').then( m => m.PEAOcupadatPageModule)
  },
  {
    path: 'peaocupadag',
    loadChildren: () => import('./peaocupadag/peaocupadag.module').then( m => m.PEAOcupadagPageModule)
  },
  {
    path: 'peadesocupada',
    loadChildren: () => import('./peadesocupada/peadesocupada.module').then( m => m.PEADesocupadaPageModule)
  },
  {
    path: 'peadesocupadat',
    loadChildren: () => import('./peadesocupadat/peadesocupadat.module').then( m => m.PEADesocupadatPageModule)
  },
  {
    path: 'peadesocupadag',
    loadChildren: () => import('./peadesocupadag/peadesocupadag.module').then( m => m.PEADesocupadagPageModule)
  },
  {
    path: 'ocupacion-informal',
    loadChildren: () => import('./ocupacion-informal/ocupacion-informal.module').then( m => m.OcupacionInformalPageModule)
  },
  {
    path: 'ocupacion-informalt',
    loadChildren: () => import('./ocupacion-informalt/ocupacion-informalt.module').then( m => m.OcupacionInformaltPageModule)
  },
  {
    path: 'ocupacion-informalg',
    loadChildren: () => import('./ocupacion-informalg/ocupacion-informalg.module').then( m => m.OcupacionInformalgPageModule)
  },
  {
    path: 'tasa-desocupacion',
    loadChildren: () => import('./tasa-desocupacion/tasa-desocupacion.module').then( m => m.TasaDesocupacionPageModule)
  },
  {
    path: 'tasa-desocupaciont',
    loadChildren: () => import('./tasa-desocupaciont/tasa-desocupaciont.module').then( m => m.TasaDesocupaciontPageModule)
  },
  {
    path: 'tasa-desocupaciong',
    loadChildren: () => import('./tasa-desocupaciong/tasa-desocupaciong.module').then( m => m.TasaDesocupaciongPageModule)
  },
  {
    path: 'tasa-informalidad-laboral',
    loadChildren: () => import('./tasa-informalidad-laboral/tasa-informalidad-laboral.module').then( m => m.TasaInformalidadLaboralPageModule)
  },
  {
    path: 'tasa-informalidad-laboralt',
    loadChildren: () => import('./tasa-informalidad-laboralt/tasa-informalidad-laboralt.module').then( m => m.TasaInformalidadLaboraltPageModule)
  },
  {
    path: 'tasa-informalidad-laboralg',
    loadChildren: () => import('./tasa-informalidad-laboralg/tasa-informalidad-laboralg.module').then( m => m.TasaInformalidadLaboralgPageModule)
  },
  {
    path: 'total',
    loadChildren: () => import('./total/total.module').then( m => m.TotalPageModule)
  },
  {
    path: 'totalg',
    loadChildren: () => import('./totalg/totalg.module').then( m => m.TotalgPageModule)
  },
  {
    path: 'totalt',
    loadChildren: () => import('./totalt/totalt.module').then( m => m.TotaltPageModule)
  },
  {
    path: 'permanente',
    loadChildren: () => import('./permanente/permanente.module').then( m => m.PermanentePageModule)
  },
  {
    path: 'permanentet',
    loadChildren: () => import('./permanentet/permanentet.module').then( m => m.PermanentetPageModule)
  },
  {
    path: 'permanenteg',
    loadChildren: () => import('./permanenteg/permanenteg.module').then( m => m.PermanentegPageModule)
  },
  {
    path: 'eventual',
    loadChildren: () => import('./eventual/eventual.module').then( m => m.EventualPageModule)
  },
  {
    path: 'eventualt',
    loadChildren: () => import('./eventualt/eventualt.module').then( m => m.EventualtPageModule)
  },
  {
    path: 'eventualg',
    loadChildren: () => import('./eventualg/eventualg.module').then( m => m.EventualgPageModule)
  },
  {
    path: 'mujeres',
    loadChildren: () => import('./mujeres/mujeres.module').then( m => m.MujeresPageModule)
  },
  {
    path: 'mujerest',
    loadChildren: () => import('./mujerest/mujerest.module').then( m => m.MujerestPageModule)
  },
  {
    path: 'mujeresg',
    loadChildren: () => import('./mujeresg/mujeresg.module').then( m => m.MujeresgPageModule)
  },
  {
    path: 'hombres',
    loadChildren: () => import('./hombres/hombres.module').then( m => m.HombresPageModule)
  },
  {
    path: 'hombrest',
    loadChildren: () => import('./hombrest/hombrest.module').then( m => m.HombrestPageModule)
  },
  {
    path: 'hombresg',
    loadChildren: () => import('./hombresg/hombresg.module').then( m => m.HombresgPageModule)
  },
  {
    path: 'salarios',
    loadChildren: () => import('./salarios/salarios.module').then( m => m.SalariosPageModule)
  },
  {
    path: 'salariost',
    loadChildren: () => import('./salariost/salariost.module').then( m => m.SalariostPageModule)
  },
  {
    path: 'salariosg',
    loadChildren: () => import('./salariosg/salariosg.module').then( m => m.SalariosgPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstadisticalaboralPageRoutingModule {}
